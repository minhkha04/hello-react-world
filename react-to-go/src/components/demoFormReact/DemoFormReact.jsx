import React, {useContext, useState} from 'react';
import {useFormik} from "formik";
import InputCustom from "./InputCustom.jsx";
import {DatePicker} from "antd";
import ButtonCustom from "./ButtonCustom.jsx";
import TableData from "./TableData.jsx";
import * as yub from "yup";
import {NotificationContext} from "../../App.jsx";
import dayjs from "dayjs";

const DemoFormReact = () => {
    // const [value, setValue] = useState({
    //     full_name: '', email: ''
    // });
    // const handleChange = (event) => {
    //     const id = event.target.id;
    //     setValue({...value, [id]: event.target.value});
    // }
    // <div>
    //     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
    //         Email
    //     </label>
    //     <input
    //         type="text"
    //         id="email"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
    //          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //         placeholder="Input your email"
    //         // value={value.email}
    //         // onChange={handleChange}
    //         name={"email"}
    //         onChange={formik.handleChange}
    //         value={formik.values.email}
    //     />
    // </div>
    const [arrData, setArrData] = useState([]);
    const valueContext = useContext(NotificationContext);
    const deleteItem = (email) => {
        const newArr = [...arrData];
        const index = newArr.findIndex(item => item.email === email);
        if (index !== -1) {
            newArr.splice(index, 1);
            setArrData(newArr);
            valueContext.handleNotification(
                "success",
                "Delete item successfully"
            );
        } else {
            valueContext.handleNotification(
                "error",
                "Item not found"
            );
        }
    }
    const {handleSubmit, handleChange, values, setFieldValue, errors, handleBlur, touched, resetForm, setValues} = useFormik({
        initialValues: {
            full_name: '',
            email: '',
            date_of_birth: '',
            gender: '',
        },
        onSubmit: (values, {resetForm}) => {
            setArrData([...arrData, values]);
            resetForm();
        },
        validationSchema: yub.object({
            email: yub.string().required("Email is required").email("Invalid email format"),
            full_name: yub.string().required("Full name is required").matches(/^[A-Za-z\s]+$/, "Full name must not contain numbers or special characters"),
        })
    });

    const getInfo = (record) => {
        setValues({
            email: record.email,
            full_name: record.full_name,
            date_of_birth: record.date_of_birth,
            gender: record.gender,
        });
    }

    const handleUpdate = (editingEmail) => {
        if (!editingEmail) return;

        const newData = [...arrData];
        const index = newData.findIndex(item => item.email === editingEmail);
        if (index !== -1) {
            newData[index] = values;
            setArrData(newData);
            valueContext.handleNotification("success", "Update successfully");
            resetForm();
        } else {
            valueContext.handleNotification("error", "Item not found to update");
        }
    };
    return (<div>
        <h2>Get data in React</h2>
        <form onSubmit={handleSubmit}>
            <div className={'grid grid-cols-2 gap-5'}>
                <InputCustom
                    labelContent={"Full name"}
                    id={"full_name"}
                    placeholder={"Input your full name"}
                    name={"full_name"}
                    onChange={handleChange}
                    value={values.full_name}
                    type={"text"}
                    onBlur={handleBlur}
                    error={errors.full_name}
                    touched={touched.full_name}
                />
                <InputCustom
                    labelContent={"Email"}
                    id={"email"}
                    placeholder={"Input your email"}
                    name={"email"}
                    onChange={handleChange}
                    value={values.email}
                    type={"email"}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                    readOnly={!!values.email}
                />
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Ngày sinh
                    </label>
                    <DatePicker
                        name={"date_of_birth"}
                        className={'w-full h-11'}
                        format={"DD/MM/YYYY"}
                        onChange={(date, dateString) => {
                            setFieldValue('date_of_birth', dateString);
                        }}
                        value={values.date_of_birth ? dayjs(values.date_of_birth, "DD/MM/YYYY") : null}
                    />
                </div>
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                        an option</label>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={values.gender}
                        name={"gender"}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select one</option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                    </select>
                </div>
            </div>

            <div className={'flex justify-end gap-3 mt-5'}>
                <ButtonCustom
                    type={"submit"}
                    content={"Submit"}
                />
                <ButtonCustom
                    content={"Reset"}
                    bgColor={"bg-green-700"}
                    onclick={() => {resetForm()}}
                />
                <ButtonCustom
                    content={"Update"}
                    bgColor={"bg-yellow-500"}
                    onclick={() => handleUpdate(values.email)}
                />
            </div>

        </form>
        <div className={"mt-10"}>
            <TableData arrData={arrData} handleDelete={deleteItem} handleEdit={getInfo}/>
        </div>
    </div>);
};

export default DemoFormReact;
