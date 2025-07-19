import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import DoctorCard from "./DoctorCard.jsx";

const DemoUseEffectDetail = () => {
    const params = useParams();
    const [doctor, setDoctor] = useState(null);
    const [doctors, setDoctors] = useState();

    // run whenever the value changes
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://techleaf.pro/infertility-system/api/v1/public/doctors/${params.id}?isPublic=true`,
        }).then((res) => {
            setDoctor(res.data.result)
        })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, [params.id]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://techleaf.pro/infertility-system/api/v1/public/doctors?page=0&size=4',
        }).then((res) => {
            setDoctors(res.data.result.content)
        })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
    }, [])

    return (
        <div>
            <div className="container">
                {/* Doctor Detail Card */}
                <div className="bg-gray-900 border border-cyan-500 rounded-lg p-8 relative overflow-hidden group max-w-4xl container">
                    <div className="">
                        {/* Doctor Avatar Section */}
                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            <div className="flex-shrink-0">
                                <div
                                    className="w-48 h-48 mx-auto md:mx-0 bg-gray-800 border-4 border-cyan-400 rounded-full overflow-hidden shadow-lg shadow-cyan-500/25 hover:border-purple-400 transition-colors duration-300 relative">
                                    <img
                                        src={doctor?.avatarUrl}
                                        alt={doctor?.fullName}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                    {/* Galaxy sparkle effects */}
                                    <div className="absolute top-2 right-2 text-cyan-400 animate-bounce">⭐</div>
                                    <div className="absolute bottom-2 left-2 text-purple-400 animate-pulse">✨</div>
                                </div>
                            </div>

                            {/* Doctor Name & Title */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 uppercase tracking-wide">
                                    Details: {doctor?.fullName}
                                </h1>
                                <div
                                    className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto md:mx-0 rounded-full mb-6"></div>
                            </div>
                        </div>

                        {/* Doctor Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-wide border-b-2 border-cyan-400 pb-2 mb-4">
                                    Thông tin cá nhân
                                </h3>

                                <div className="space-y-3">
                                    <p className="text-purple-400 font-semibold border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Họ tên:</span><br/>
                                        <span className="text-gray-300 text-lg">{doctor?.fullName}</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Email:</span><br/>
                                        <span className="text-gray-300 text-lg">{doctor?.email}</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Số điện thoại:</span><br/>
                                        <span className="text-gray-300 text-lg">{doctor?.phoneNumber}</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Giới tính:</span><br/>
                                        <span className="text-gray-300 text-lg">{doctor?.gender}</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Ngày sinh:</span><br/>
                                        <span className="text-gray-300 text-lg">{doctor?.dateOfBirth}</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-cyan-400 pl-4 hover:text-cyan-400 hover:border-purple-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Địa chỉ:</span><br/>
                                        <span className="text-gray-300 text-lg">{doctor?.address}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Professional Information */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-purple-400 uppercase tracking-wide border-b-2 border-purple-400 pb-2 mb-4">
                                    Thông tin nghề nghiệp
                                </h3>

                                <div className="space-y-3">
                                    <p className="text-purple-400 font-semibold border-l-4 border-purple-400 pl-4 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span
                                            className="uppercase tracking-wide text-sm">Bằng cấp & Năm tốt nghiệp:</span><br/>
                                        <span
                                            className="text-gray-300 text-lg">{doctor?.qualifications} - {doctor?.graduationYear}</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-purple-400 pl-4 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Kinh nghiệm:</span><br/>
                                        <span
                                            className="text-green-400 text-lg font-bold">{doctor?.experienceYears} năm</span>
                                    </p>

                                    <p className="text-purple-400 font-semibold border-l-4 border-purple-400 pl-4 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 transform hover:translate-x-1">
                                        <span className="uppercase tracking-wide text-sm">Chuyên khoa:</span><br/>
                                        <span className="text-yellow-400 text-lg font-bold">{doctor?.specialty}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Corner accent lines */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-cyan-500"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-purple-500"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-purple-500"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-cyan-500"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
                    {doctors?.map((doctor, index) => {
                        return (
                            <DoctorCard doctor={doctor}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DemoUseEffectDetail;