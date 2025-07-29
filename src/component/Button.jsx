import React from 'react'

const Button = (props) => {
    return (
    <button className='bg-green-600 py-2 px-5 rounded md:ml-8 text-white hover:text-3xl duration-500 '>
        {props.children}
    </button>
    )
}
export default Button