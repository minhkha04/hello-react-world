import React from 'react';

const RenderDoctor = () => {
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
        },
        {
            "id": "3ca5c4f2-8997-4b99-b2e6-5a716eda56b1",
            "fullName": "Hung Phu",
            "qualifications": " Đại học Y Hà Nội ",
            "experienceYears": 15,
            "specialty": "Chuyên Khoa Phụ Sản",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1749288955/default-avatar_qwb4ru.png",
            "rate": 0
        },
        {
            "id": "5d6c25c0-f4a6-4e92-9f58-c72fdcf5d514",
            "fullName": "Nguyễn Thị Ngọc Phượng",
            "qualifications": "Bác sĩ Chuyên khoa I",
            "experienceYears": 8,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751525104/uploads/avt_5d6c25c0-f4a6-4e92-9f58-c72fdcf5d514.png",
            "rate": 0
        },
        {
            "id": "80ecc893-3b28-4830-816f-540ef313dfe4",
            "fullName": "Lê Thị Bích Liên",
            "qualifications": "Bác sĩ Chuyên khoa I",
            "experienceYears": 12,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524487/uploads/avt_80ecc893-3b28-4830-816f-540ef313dfe4.png",
            "rate": 0
        },
        {
            "id": "8cfe0a5a-d6dd-4331-b2e1-ce07be834aa1",
            "fullName": "Trần Văn Hùng",
            "qualifications": "Bác sĩ Chuyên khoa I",
            "experienceYears": 6,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524136/uploads/avt_8cfe0a5a-d6dd-4331-b2e1-ce07be834aa1.png",
            "rate": 0
        },
        {
            "id": "bab4fabd-72ab-43d0-9a8c-52d8683b45e9",
            "fullName": "Phan Văn Trung",
            "qualifications": "Bác sĩ",
            "experienceYears": 9,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524733/uploads/avt_bab4fabd-72ab-43d0-9a8c-52d8683b45e9.png",
            "rate": 0
        },
        {
            "id": "bc59f9f2-69f7-43e3-8a63-68886c726bd8",
            "fullName": "Trần Thị Ngọc Vân",
            "qualifications": "Bác sĩ",
            "experienceYears": 4,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751525464/uploads/avt_bc59f9f2-69f7-43e3-8a63-68886c726bd8.png",
            "rate": 0
        },
        {
            "id": "doctor-uuid-1234",
            "fullName": "Nguyễn Thị Ngọc Ánh",
            "qualifications": "Bác sĩ chuyên khoa II",
            "experienceYears": 15,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751523429/uploads/avt_doctor-uuid-1234.png",
            "rate": 0
        },
        {
            "id": "e008e79d-2e82-43f4-b2ad-d51083aeaf2c",
            "fullName": "Nguyễn Thị Hoài Đức",
            "qualifications": "Bác sĩ",
            "experienceYears": 4,
            "specialty": "Hiếm muộn",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751525034/uploads/avt_e008e79d-2e82-43f4-b2ad-d51083aeaf2c.png",
            "rate": 0
        },
        {
            "id": "ecaf6937-7667-4157-9efb-39a088b3420f",
            "fullName": "Hoàng Thị Diệu Linh",
            "qualifications": "Bác sĩ Chuyên khoa II",
            "experienceYears": 14,
            "specialty": "Nội tiết",
            "avatarUrl": "https://res.cloudinary.com/di6hi1r0g/image/upload/v1751524181/uploads/avt_ecaf6937-7667-4157-9efb-39a088b3420f.png",
            "rate": 0
        }
    ];

    function renderDoctor() {
        return listDoctors.map((doctor) => {
            return (
                <div className="render_doctor border-2 border-rose-600 rounded-xl px-1">
                    <img className="h-96 object-cover rounded-md" src={doctor.avatarUrl} alt=""/>
                    <h3 className="font-bold text-xl text-gray-600">{doctor.fullName}</h3>
                    <p>{doctor.qualifications}</p>
                    <p>{doctor.experienceYears}</p>
                    <p>{doctor.rate}</p>
                    <p>{doctor.specialty}</p>
                    <button className="py-2 px-5 border-2 border-purple-400 bg-purple-400 text-white rounded-md hover:bg-white hover:text-purple-400 hover:border-purple-400 active:bg-purple-800">Xem chi tiết</button>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-9">{renderDoctor()}</div>
        </div>
    );
};

export default RenderDoctor;