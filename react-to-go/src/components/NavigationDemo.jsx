import React, {useState} from 'react'
import DemoEvent from "./DemoEvent.jsx";
import DemoState from "./demoState/DemoState.jsx";
import DemoProps from "./demoProps/DemoProps.jsx";

const NavigationDemo = () => {
    const [age, setAge] = useState(10);
    function updateAge() {
        setAge(age + 1);
    }
    return (
        <div className='bg-red-500 col-span-1 h-full'>
            <div className="p-5">
                <DemoEvent/>
                <DemoState/>
                <DemoProps age={age} updateAge={updateAge}/>
            </div>
        </div>
    )
}
export default NavigationDemo
