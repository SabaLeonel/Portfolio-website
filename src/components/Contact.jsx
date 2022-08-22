import React from 'react'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <Fade bottom>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact me</p>

          </div>

          <div className='flex justify-center items-center'>
            <form
              action="https://getform.io/f/3b91e015-f0b8-471d-a492-56a447b0efe5"
              method='POST'
              className='flex flex-col w-full md:w-1/2'>

              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />

              <textarea
                name="message"
                rows="10"
                placeholder="Message"
                required
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

              <button

                className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                Send message
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact