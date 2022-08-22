import React from 'react'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div name='contact' className='w-full ' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <Fade bottom>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-wmelon-100'>Contact me</p>

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
                className='p-2 bg-transparent border-carbon-100 border-2 rounded-md  focus:outline-wmelon-100' />

              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                className='p-2 my-4 bg-transparent border-carbon-100 border-2 rounded-md  focus:outline-wmelon-100' />

              <textarea
                name="message"
                rows="10"
                placeholder="Message"
                required
                className='p-2 bg-transparent border-2 border-carbon-100 rounded-md  focus:outline-wmelon-100'></textarea>

              <button
                className='text-white bg-wmelon-100 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
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