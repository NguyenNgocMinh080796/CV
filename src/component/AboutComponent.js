import React from 'react'
import { Card, Typography, Space } from 'antd';
import { NavLink } from 'react-router-dom';

const { Title } = Typography;

export default function AboutComponent() {
    return (
        <div style={{ overflowY: 'auto', textAlign: 'center' }}>
            <Title>TỰ GIỚI THIỆU</Title>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                    }}
                >
                    {/* Mục tiêu nghề nghiệp */}
                    <Card
                        style={{
                            width: 500,
                            backgroundColor: '#EEEEEE'
                        }}
                    >
                        <Title level={3} style={{ marginTop: 0 }}>Mục tiêu nghề nghiệp</Title>
                        <>
                            Không ngừng học hỏi và trau dồi những kiến thức về lập
                            trình để phát triển kỹ năng chuyên môn. Mục tiêu trong
                            1 năm tới có thể trở thành lập trình viên Font End
                            chuyên nghiệp và học thêm lập trình Back End
                        </>
                    </Card>
                    {/* Trình độ học vấn */}
                    <Card
                        style={{
                            width: 500,
                            backgroundColor: '#EEEEEE'
                        }}
                    >
                        <Title level={3} style={{ marginTop: 0 }}>Quá trình học vấn</Title>
                        <Space
                            direction="vertical"
                            size="large"
                            style={{
                                display: 'flex',
                            }}
                        >
                            <ul style={{ textAlign: 'start' }}>
                                <p style={{ fontSize: 18, textAlign: 'center' }}>
                                    04/2023: Hoàn thành các khóa học của CyberSoft
                                </p>
                                <li style={{ paddingBottom: 10 }}>
                                    <NavLink to='https://cyberlearn.vn/tu-duy-thuat-toan-phan-tich-bai-toan/'>
                                        COMBO 1: TƯ DUY LẬP TRÌNH, THUẬT TOÁN NỀN TẢNG LẬP
                                        TRÌNH HƯỚNG ĐỐI TƯỢNG
                                    </NavLink>
                                </li>
                                <li style={{ paddingBottom: 10 }}>
                                    <NavLink to='https://cyberlearn.vn/lap-trinh-front-end-foundation/'>
                                        COMBO 2: LẬP TRÌNH FONT END FOUNDATION
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink to='https://cyberlearn.vn/lap-trinh-front-end-master-reactjs/'>
                                        COMBO 3: LẬP TRÌNH FONT END MASTER REACTJS
                                    </NavLink>
                                </li>
                            </ul>
                            {/* <div style={{ textAlign: 'start' }}>
                                <p style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>
                                    04/2023: Hoàn thành các khóa học của CyberSoft
                                </p>
                                <p>
                                    <NavLink to='https://cyberlearn.vn/tu-duy-thuat-toan-phan-tich-bai-toan/'>
                                        COMBO 1: TƯ DUY LẬP TRÌNH, THUẬT TOÁN NỀN TẢNG LẬP
                                        TRÌNH HƯỚNG ĐỐI TƯỢNG
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to='https://cyberlearn.vn/lap-trinh-front-end-foundation/'>
                                        COMBO 2: LẬP TRÌNH FONT END FOUNDATION
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink to='https://cyberlearn.vn/lap-trinh-front-end-master-reactjs/'>
                                        COMBO 3: LẬP TRÌNH FONT END MASTER REACTJS
                                    </NavLink>
                                </p>
                            </div> */}
                        </Space>
                    </Card>
                    {/* Kỹ năng */}
                    <Card
                        style={{
                            width: 500,
                            backgroundColor: '#EEEEEE',
                        }}
                    >
                        <Title level={3} style={{ marginTop: 0 }}>Kỹ năng</Title>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Space
                                size="large"
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <Card
                                    style={{
                                        width: 100,
                                    }}
                                >
                                    <i className="icon-about fa-brands fa-react"></i>
                                </Card>
                                <Card
                                    style={{
                                        width: 100,
                                    }}
                                >
                                    <i className="icon-about fa-brands fa-html5"></i>
                                </Card>
                                <Card
                                    style={{
                                        width: 100,
                                    }}
                                >
                                    <i className="icon-about fa-brands fa-css3-alt"></i>
                                </Card>
                                <Card
                                    style={{
                                        width: 100,
                                    }}
                                >
                                    <i className="icon-about fa-brands fa-square-js"></i>
                                </Card>
                            </Space>
                        </div>
                    </Card>
                </Space>
            </div>
        </div >
    )
}
