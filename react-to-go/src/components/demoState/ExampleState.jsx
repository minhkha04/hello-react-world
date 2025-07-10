import React, {useState} from 'react';

const ExampleState = () => {
    const listDoctors = [
        {
            "id": "08e1c237-20ee-4c3f-9fdf-00d5e6d0d06c",
            "fullName": "Nguyễn Elina Mai",
            "qualifications": "Bác sĩ Chuyên khoa I",
            "experienceYears": 16,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524777/uploads/avt_08e1c237-20ee-4c3f-9fdf-00d5e6d0d06c.png",
            "rate": 4.5
        },
        {
            "id": "11c73d78-e81b-4fb1-9adb-5bcd3711ffc8",
            "fullName": "Phạm Thanh Quỳnh",
            "qualifications": "Bác sĩ Chuyên khoa II",
            "experienceYears": 17,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524585/uploads/avt_11c73d78-e81b-4fb1-9adb-5bcd3711ffc8.png",
            "rate": 0
        },
        {
            "id": "2c531f1e-c022-47ae-9c3e-bf25c90d4a93",
            "fullName": "Nguyễn Thị Thảo Nhi",
            "qualifications": "Bác sĩ Chuyên khoa II",
            "experienceYears": 13,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751525320/uploads/avt_2c531f1e-c022-47ae-9c3e-bf25c90d4a93.png",
            "rate": 0
        }
    ];
    const [doctor, setDoctor] = useState("https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524777/uploads/avt_08e1c237-20ee-4c3f-9fdf-00d5e6d0d06c.png");
    return (
        <div className="grid grid-cols-2 w-1/2">
            <img className="h-80 object-cover rounded-md col-span-1" src={doctor} alt=""/>
            <div className="w-64 flex flex-col col-span-1">
                {listDoctors.map((doc) => {
                    const isSelected = doctor === doc.avatarUrl;
                    return (
                        <button
                            className={`py-2 px-5 border-2 rounded-md mt-3 transition-colors duration-200 ${
                                isSelected
                                    ? 'border-green-500 bg-green-500 text-white'
                                    : 'border-purple-400 bg-purple-400 text-white hover:bg-white hover:text-purple-400 hover:border-purple-400 active:bg-purple-800'
                            }`}
                            onClick={() => {
                                setDoctor(doc.avatarUrl)
                            }}
                        >
                            {doc.fullName}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default ExampleState;