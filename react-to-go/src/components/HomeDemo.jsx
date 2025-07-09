import React from 'react'

const HomeDemo = () => {
    const student = {
        name: 'John Doe',
        age: 10,
        course: 'Computer Science'
    };

    return (
        <div className='bg-black p-3 h-[5vh] flex flex-col justify-center items-center text-white'>
            <h2 className='text-2xl font-bold text-green-500'>Hello {student.name}</h2>
            <p>{student.age > 18 ? "You age good" : "Not good" }</p>
        </div>
    )
}

export default HomeDemo
