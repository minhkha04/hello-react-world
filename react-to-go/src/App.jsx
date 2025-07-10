import React, {useState} from 'react'
import HeaderDemo from './components/HeaderDemo';
import HomeDemo from './components/HomeDemo';
import NavigationDemo from './components/NavigationDemo';
import ContentDemo from './components/ContentDemo';
import FooterDemo from './components/FooterDemo';
import RenderDoctor from "./components/RenderDoctor.jsx";
import ExampleProps from "./components/demoProps/ExampleProps.jsx";
import ListPhone from "./components/myPhone/ListPhone.jsx";
import DetailPhone from "./components/myPhone/DetailPhone.jsx";

function App() {
    const phones =  [
        {
            name: "iPhone 12",
            image:
                "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-trang-13-600x600.jpg",
            screen: 'OLED, 6.1", Super Retina XDR',
            os: "iOS 14",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "4 GB",
            rom: "64 GB",
        },
        {
            name: "iPhone 11",
            image:
                "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
            screen: 'LCD, 6.1", Liquid Retina',
            os: "iOS 13",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "4 GB",
            rom: "64 GB",
        },
        {
            name: "iPhone SE (2020)",
            image:
                "https://cdn.tgdd.vn/Products/Images/42/222631/iphone-se-128gb-2020-den-600x600.jpg",
            screen: 'LCD, 4.7", Retina HD',
            os: "iOS 13",
            front_camera: "7 MP",
            rear_camera: "12 MP",
            ram: "3 GB",
            rom: "64 GB",
        },
        {
            name: "iPhone 13 Pro",
            image:
                "https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-midnight-1-600x600.jpg",
            screen: 'OLED, 6.1", Super Retina XDR',
            os: "iOS 15",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "6 GB",
            rom: "128 GB",
        },
    ]
    const [phone, setPhone] = useState();
    function handlePhoneClick(selectedPhone) {
        setPhone(selectedPhone);
    };
    return (
        <div className="h-screen">
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
            <ExampleProps/>
            <ListPhone phones={phones} title={"Danh sách điên thoại"} phone={phone} handlePhoneClick={handlePhoneClick}/>
        </div>

    )
}

export default App;
