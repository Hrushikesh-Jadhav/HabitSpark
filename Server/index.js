// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const TodoModel = require('./Models/Todo')

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/test')

// app.get('/get',(req, res) => {
//     TodoModel.find()
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.put('/update/:id',(req, res) => {
//     const {id} = req.params;
//     TodoModel.findByIdAndUpdate({_id: id}, {done: true})
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.delete('/delete/:id',(req, res) => {
//     const {id} = req.params;
//     TodoModel.findByIdAndDelete({_id: id})
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.post('/add',(req, res) => {
//     const task = req.body.task;
//     TodoModel.create({
//         task: task
//     }).then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("Server is Running")
// })

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/habits', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// // Habit Schema
// const habitSchema = new mongoose.Schema({
//   name: String,
//   time: String,
//   repeatDays: Number,
//   completed: { type: Boolean, default: false }
// });

// const Habit = mongoose.model('Habit', habitSchema);

// // Routes
// app.get('/habits', async (req, res) => {
//   const habits = await Habit.find();
//   res.json(habits);
// });

// app.post('/habits', async (req, res) => {
//   const newHabit = new Habit(req.body);
//   await newHabit.save();
//   res.json(newHabit);
// });

// app.put('/habits/:id', async (req, res) => {
//   const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedHabit);
// });

// app.delete('/habits/:id', async (req, res) => {
//   await Habit.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Habit deleted' });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

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
  completionDate: { type: Date }
});

const Habit = mongoose.model('Habit', habitSchema);

app.get('/habits', async (req, res) => {
  const habits = await Habit.find();
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

const getCompletedCount = async (start, end) => {
  return await Habit.countDocuments({
    completed: true,
    completionDate: {
      $gte: start,
      $lt: end
    }
  });
};

app.get('/habits/completed/daily', async (req, res) => {
  const now = new Date();
  const start = new Date(now.setHours(0, 0, 0, 0));
  const end = new Date(now.setHours(24, 0, 0, 0));
  const count = await getCompletedCount(start, end);
  res.json({ count });
});

app.get('/habits/completed/weekly', async (req, res) => {
  const now = new Date();
  const start = new Date(now.setDate(now.getDate() - now.getDay()));
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  const count = await getCompletedCount(start, end);
  res.json({ count });
});

app.get('/habits/completed/monthly', async (req, res) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const count = await getCompletedCount(start, end);
  res.json({ count });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});