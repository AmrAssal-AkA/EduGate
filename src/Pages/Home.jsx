import React from 'react'
import photoHeader from '../assets/Header-Page/Header.jpg'
import Button from '../component/Button'


export function HomeHeader () {
    return(
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

    )
}

export function PrevCourses(){

    let courses = [
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            title: "Introduction to Programming",
            description: "Learn the basics of programming with hands-on exercises.",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Web Development Bootcamp",
            description: "Build responsive websites using HTML, CSS, and JavaScript.",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            title: "Data Science Fundamentals",
            description: "Explore data analysis and visualization techniques.",
        }
    ];

    return (
        <section className='w-full bg-gray-100 mt-10 mb-5 py-5'>
            <h1 className='text-2xl font-bold ml-5'>Previous Courses</h1>
            <div className='grid grid-cols-3 gap-2 ml-2'>
                {courses.map(course => (
                    <div key={course.id} className='bg-white rounded-2xl shadow-md mt-8 p-4'>
                        <img src={course.image} alt={course.title} className='w-full h-32 object-cover rounded-t-xl' />
                        <h3 className='text-lg font-semibold mt-2'>{course.title}</h3>
                        <p className='text-gray-600'>{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function About(){
return (
    <section className="w-full bg-white py-12 mt-10 mb-5">
    <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-700">About Our Company</h1>
        <p className="text-gray-600 mb-6">
        Asal Academy is committed to transforming education by providing accessible, high-quality learning experiences for everyone. 
        Our expert instructors design courses that empower students to achieve their personal and professional goals. 
        We believe in continuous growth, innovation, and a supportive community for all learners.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        <div className="bg-blue-50 rounded-xl p-6 shadow-md flex-1">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h2>
            <p className="text-gray-700">
            To make world-class education accessible and engaging for everyone, everywhere.
            </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 shadow-md flex-1">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Our Values</h2>
            <p className="text-gray-700">
            Excellence, innovation, inclusivity, and lifelong learning are at the heart of everything we do.
            </p>
        </div>
        </div>
    </div>
    </section>
)
}

function Home() {
return (
<>
    <HomeHeader />
    <PrevCourses />
    <About />
</>
)
}

export default Home