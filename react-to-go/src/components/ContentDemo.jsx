import React from 'react'
import ExampleState from "./demoState/ExampleState.jsx";

const ContentDemo = () => {
    let students = [
        {
            name: 'Minh Kha',
            age: 20,
            course: 'Computer Science'
        },
        {
            name: 'John Doe',
            age: 22,
            course: 'Mathematics'
        },
        {
            name: 'Jane Smith',
            age: 19,
            course: 'Physics'
        }
    ];
    const classButton = "py-2 px-5 bg-purple-400 text-white rounded-md";
    return (
        <div className='bg-yellow-500 col-span-4 h-full'>
            {students.map((student) => {
                return (
                    <div className="bg-blue-600 p-4 m-2 rounded shadow-lg text-white font-bold">
                        <h3>Name: {student.name}</h3>
                        <p>Age: {student.age}</p>
                        <p>Course: {student.course}</p>
                        <button className={classButton} id={student.name}>
                            Login
                        </button>
                    </div>
                );
            })}
            <ExampleState />
        </div>
    )
}

export default ContentDemo
