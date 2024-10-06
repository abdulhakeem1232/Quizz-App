import React from 'react'


function Landing() {
    return (
        <div className='min-h-screen '>
            <nav className='flex md:px-11 h-20 justify-between  '>
                <img src='/images/logo.jpg' alt="Logo" className="" />
                <div className='my-auto'>
                    <button className="mr-4 px-4 py-2 border border-yellow-500 rounded-md text-yellow-500 hover:bg-yellow-500 hover:text-white transition">Admin</button>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">Login</button>
                </div>
            </nav>
            <hr />
            < div className='flex flex-col-reverse md:flex-row items-center justify-between p-8 md:pr-16 md:pl-24 md:py-8 bg-white mt-8 md:mt-0' >
                < div className='w-full md:w-1/2 text-center md:text-left space-y-6 mb-8 md:mb-0' >
                    <p className='text-3xl md:text-5xl font-bold font-poppins text-gray-800 leading-relaxed md:leading-tight '>
                        Learn <br />
                        <span className="text-yellow-500">New Concepts</span><br />
                        for Every Question
                    </p>
                    <p className="text-gray-600 md:text-lg">
                        We help you prepare for exams and quizzes with bite-sized learning experiences.
                    </p>
                    <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                        Start Quiz
                    </button>
                </div >
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src='/images/landing.jpg' alt="" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div >
            <footer className="py-6 text-center text-gray-600 mt-12">
                <p>&copy; 2024 Quiz. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Landing

