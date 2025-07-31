import React from 'react'

const Button = (props) => {
    return (
    <button className='bg-green-600 py-1.5 px-3 rounded md:ml-8 text-white cursor-pointer '>
        {props.children}
    </button>
    )
}
export default Button