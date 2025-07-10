import React from 'react'
import DemoEvent from "./DemoEvent.jsx";
import DemoState from "./demoState/DemoState.jsx";

const NavigationDemo = () => {
    return (
        <div className='bg-red-500 col-span-1 h-full'>
            <div className="p-5">
                <DemoEvent/>
                <DemoState/>
            </div>
        </div>
    )
}
export default NavigationDemo
