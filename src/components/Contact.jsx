import React from 'react'

const Contact = () => {
  return (
    <div  name="contact" className='bg-[#0a192f] w-full  flex justify-center items-center p-4 ' >
      <form method='post' action='https://getform.io/f/80b56777-84f4-4996-99d1-7b6cc4668b52' className='flex flex-col max-w-[600px] w-full'>
            <div className='h-[100px]'>
              
            </div>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>
                // Submit the form below or shoot me an email- <span className='inline border-b-2 border-pink-600'>emraheskibagci595@gmail.com</span>
                </p>
            </div>
            <input type="text" placeholder='Name' name='name'  className=' p-2 bg-[#ccd6f6]'/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea placeholder='Message' name="message"  cols="30" rows="10" className=' p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded'>SEND</button>

      </form>
    </div>
  )
}

export default Contact
