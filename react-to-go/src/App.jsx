import React, {useState} from 'react'
import HeaderDemo from './components/HeaderDemo';
import HomeDemo from './components/HomeDemo';
import NavigationDemo from './components/NavigationDemo';
import ContentDemo from './components/ContentDemo';
import FooterDemo from './components/FooterDemo';
import RenderDoctor from "./components/RenderDoctor.jsx";
import DemoCss from "./components/demoCss/DemoCss.jsx";

function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="h-screen">
            <DemoCss/>
            <HomeDemo/>
            <HeaderDemo/>
            <div className="grid grid-cols-5 h-[85vh]">
                <NavigationDemo/>
                <ContentDemo/>
            </div>
            <FooterDemo/>
            <div className="p-0.5">
                <RenderDoctor/>
            </div>
            <div className="container">
                <h5 className="demo_sass">Demo sass</h5>
            </div>
        </div>

    )
}

export default App;
