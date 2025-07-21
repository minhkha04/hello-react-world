import React from 'react';
import {Space, Table, Tag} from 'antd';
import ButtonCustom from "./ButtonCustom.jsx";

const TableData = ({arrData, handleDelete, handleEdit}) => {
    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'full_name',
            key: 'full_name',
            render: (text, record, index) => {
                console.log(record);
                console.log(index);
                return <span>{text}</span>;
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
            render: (text, record, index) => {
                return <Tag color={text === 'man' ? 'magenta' : 'geekblue'}>{text}</Tag>
            }
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
            render: (text, record, index) => {
                return <div className={'flex gap-2'}>
                    <ButtonCustom
                        type={'button'}
                        content={'Edit'}
                        onclick={() => {handleEdit(record)}}
                    />
                    <ButtonCustom
                        type={'button'}
                        content={'Delete'}
                        bgColor={'bg-red-500'}
                        onclick={() => handleDelete(record.email)}
                    />
                </div>
            }
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={arrData} pagination={false}/>
        </div>
    );
};

export default TableData;
