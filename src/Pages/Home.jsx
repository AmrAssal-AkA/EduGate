import React from 'react'
import photoHeader from '../assets/Header-Page/Header.jpg'
import Button from '../component/Button'

function Home() {
return (
<>
        <section className="bg-gray-100 py-12 px-6 flex flex-col md:flex-row items-center justify-between sm:mt-10">
        <div className="max-w-xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Empower Your Education</h2>
        <p className="mb-6 text-gray-600">
            Discover top-notch educational resources that will take your learning experience to the next level.
        </p>
        <Button>Explore Courses</Button>
        </div>
        <img src={photoHeader} alt="Students learning online" className="rounded-xl mt-10 lg:mt-0 w-full max-w-md" />
    </section>

    <section className=' w-full md:min-w-60 mt-6'>
        <h1 className='text-2xl font-bold'>Our Feature</h1>
        <div className='grid grid-cols-3 gap-2 '>
        <div className=' border-1 rounded-2xl shadow-md mt-8 p-4'>
            <h2 className='font-bold'>Interactive Courses</h2>
            <p>engage with dynamic content tailored to enhance your learning</p>
        </div>
                <div className=' border-1 rounded-2xl shadow-md mt-8 p-4'>
            <h2 className='font-bold'> Expert Tutors</h2>
            <p>Learn from industry professionals with years of experience.</p>
        </div>
                <div className=' border-1 rounded-2xl shadow-md mt-8 p-4'>
            <h2 className='font-bold' >flexiblen scheduling</h2>
            <p>Access courses at your convenience and pace.</p>
        </div>
        </div>
    </section>

    <section className='w-full bg-green-100 mt-10 mb-5 py-5'>
    <h1 className='text-2xl font-bold ml-5'>Student testimonials</h1>

    <div className='grid grid-cols-3 gap-2 ml-2'>

    <div className='bg-white  rounded-2xl shadow-md mt-8 '>
    <span>        
        <img
        alt=""
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline-block size-20 rounded-full ring-2 ring-white" /></span>
            <p>"The expert tutors are fantastic and really know their stuff!"</p>
        </div>

            <div className='bg-white rounded-2xl shadow-md mt-8'>
            <span>        
            <img
                src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
                class=" w-20 rounded-full shadow-lg"
                alt="Avatar" />
            </span>
            <p>"I love the flexibility in scheduling my courses!" - Emily</p>
        </div>
        
        <div className='bg-white  rounded-2xl shadow-md mt-8 '>
            <span>        
            <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
            class="w-20 rounded-full shadow-lg"
            alt="Avatar" />
            </span>
            <p>"The interactive courses have transformed my learning experience!" -john</p>
        </div>
    </div>
    </section>
</>
)
}

export default Home