import React from 'react'

function Videos ({ videos }){
  return (
    <div className="xl:[p-4 my-8 rounded-lg w-auto] p-4 ">
      <h2 className="text-2xl ml-16 font-bold mb-4">Tips for Good Habit Building | Motivation and Yoga tutorials</h2>
      <ul className="space-y-4">
        {videos.map((video) => (
          <li key={video.id} className="xl:[p-4 ml-16 bg-[#081b29] rounded-lg shadow-md flex items-center] flex-col justify-center items-center grid grid-flow-col">
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-80 h-52 rounded-lg "
            />
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl pl-4 hover:text-blue-700"
            >
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Videos