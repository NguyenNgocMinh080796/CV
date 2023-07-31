import { Button, Card, Space, Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom';

const { Title } = Typography;

export default function ProjectComponent() {
    return (
        <>
            <div style={{ overflowY: 'auto', textAlign: 'center' }}>
                <Title>DỰ ÁN HỌC TẬP CÁ NHÂN</Title>
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <Space
                        direction="vertical"
                        size="large"
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Card
                            style={{
                                width: 500,
                                backgroundColor: '#EEEEEE'
                            }}
                        >
                            <ul style={{ textAlign: 'start' }}>
                                <li>
                                    <p style={{ fontWeight: 'bold' }}>
                                        Công nghệ sử dụng
                                    </p>
                                    <p>
                                        ReactJS, React-Router-Dom, Redux-Thunk, Axios, Ant Design
                                    </p>
                                </li>
                                <li>
                                    <p style={{ fontWeight: 'bold' }}>
                                        Back End
                                    </p>
                                    <p>
                                        Của trung tâm đào tạo
                                    </p>
                                </li>
                                <li>
                                    <p style={{ fontWeight: 'bold' }}>
                                        Link Github
                                    </p>
                                    <NavLink to='https://github.com/NguyenNgocMinh080796/DuAnHocTap.git' >
                                        Dự án học tập
                                    </NavLink>
                                </li>
                            </ul>
                        </Card>
                    </Space>
                </div>
            </div >
        </>
    )
}
