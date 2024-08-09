const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/habits', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const habitSchema = new mongoose.Schema({
  name: String,
  time: String,
  repeatDays: Number,
  completed: { type: Boolean, default: false },
  completionDate: { type: Date },
  archived: { type: Boolean, default: false }
});

const Habit = mongoose.model('Habit', habitSchema);

app.get('/habits', async (req, res) => {
  const habits = await Habit.find({ archived: false });
  res.json(habits);
});

app.post('/habits', async (req, res) => {
  const newHabit = new Habit({ ...req.body, completionDate: new Date() });
  await newHabit.save();
  res.json(newHabit);
});

app.put('/habits/:id', async (req, res) => {
  const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, { ...req.body, completionDate: new Date() }, { new: true });
  res.json(updatedHabit);
});

app.delete('/habits/:id', async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ message: 'Habit deleted' });
});

// Endpoint to archive completed habits
app.post('/habits/archive', async (req, res) => {
  await Habit.updateMany({ completed: true, archived: false }, { $set: { archived: true } });
  res.json({ message: 'Completed habits archived' });
});

// Schedule task to archive habits daily at midnight
cron.schedule('0 0 * * *', async () => {
  await Habit.updateMany({ completed: true, archived: false }, { $set: { archived: true } });
  console.log('Archived completed habits at midnight');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Daily Habit chart back-end
app.get('/habits/daily-status', async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(startOfDay);
  endOfDay.setDate(endOfDay.getDate() + 1);

  const completedCount = await Habit.countDocuments({
    completed: true,
    completionDate: { $gte: startOfDay, $lt: endOfDay },
  });

  const totalCount = await Habit.countDocuments({
    completionDate: { $gte: startOfDay, $lt: endOfDay },
  });

  const incompleteCount = totalCount - completedCount;

  res.json({ completed: completedCount, incomplete: incompleteCount });
});

//weekly habit chart back-end
app.get('/habits/completed/weekly', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - 6); // 7 days ago

  const habits = await Habit.aggregate([
    {
      $match: {
        completed: true,
        completionDate: { $gte: startOfWeek, $lt: today }
      }
    },
    {
      $group: {
        _id: { $dayOfWeek: "$completionDate" }, // Group by day of week (1-7)
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);

  const data = Array(7).fill(0); // Initialize array with 7 zeros

  habits.forEach(habit => {
    const dayIndex = (habit._id + 5) % 7; // Adjust day of week to match Sunday as 0
    data[dayIndex] = habit.count;
  });

  res.json(data);
});

//Monthly Chart back-end
app.get('/habits/completed/monthly', async (req, res) => {
  const currentYear = new Date().getFullYear();

  const habits = await Habit.aggregate([
    {
      $match: {
        completed: true,
        completionDate: {
          $gte: new Date(currentYear, 0, 1), // Start of the current year
          $lt: new Date(currentYear + 1, 0, 1) // Start of the next year
        }
      }
    },
    {
      $group: {
        _id: { $month: "$completionDate" }, // Group by month (1-12)
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);

  const data = Array(12).fill(0); // Initialize array with 12 zeros

  habits.forEach(habit => {
    data[habit._id - 1] = habit.count;
  });

  res.json(data);
});
