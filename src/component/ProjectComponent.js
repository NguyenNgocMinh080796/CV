import React from 'react'
import { Card, Space, Typography, Popover } from 'antd'
import { SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import quanLy from '../asset/quanLy.jpeg';
import movie from '../asset/movie.jpeg';
import xuatNhap from '../asset/xuatNhap.jpeg';

const { Title, Text } = Typography;
const { Meta } = Card;

export default function ProjectComponent() {
    return (
        <>
            <div style={{ textAlign: 'center', padding: 10, overflowY: 'auto' }}>
                <Title>DỰ ÁN HỌC TẬP CÁ NHÂN</Title>
                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        paddingBottom: 20
                    }}
                >
                    {/* web_xem_phim */}
                    <Card
                        hoverable
                        style={{
                            width: 400,
                        }}
                        cover={
                            <img
                                alt="web_xem_phim"
                                src={movie}
                            />
                        }
                        actions={[
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Công nghệ sử dụng: </Text>
                                    <Text>React, Ant Design, React-Router, Redux, Redux Thunk, Axios, Moment</Text>
                                </div>}
                            >
                                <SettingOutlined key="setting" />
                            </Popover>,
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Back-end: </Text>
                                    <Text>API của Trung tâm Đào tạo</Text>
                                </div>}
                            >
                                <i className="fa-solid fa-cloud-arrow-down" />
                            </Popover>,
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Github</Text>
                                </div>}
                            >
                                <NavLink to='https://github.com/NguyenNgocMinh080796/WebXemPhim.git' ><i className="fa-solid fa-link" /></NavLink>
                            </Popover>,
                        ]}

                    >
                        <Meta title="WEB XEM PHIM" description='Dự án demo trang web xem phim với các chức năng đăng ký, đăng nhập, đặt vé' />
                    </Card>
                    {/* quan_ly_thong_tin_van_chuyen */}
                    <Card
                        hoverable
                        style={{
                            width: 400,
                        }}
                        cover={
                            <img
                                alt="quan_ly_thong_tin_van_chuyen"
                                src={xuatNhap}
                            />
                        }
                        actions={[
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Công nghệ sử dụng: </Text>
                                    <Text>React, Ant Design, React-Router, Redux, Redux Thunk, Axios, Moment</Text>
                                </div>}
                            >
                                <SettingOutlined key="setting" />
                            </Popover>,
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Back-end: </Text>
                                    <Text>API được hỗ trợ từ bạn bè</Text>
                                </div>}
                            >
                                <i className="fa-solid fa-cloud-arrow-down" />
                            </Popover>,
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Github</Text>
                                </div>}
                            >
                                <NavLink to='https://github.com/NguyenNgocMinh080796/QuanLy.git' ><i className="fa-solid fa-link" /></NavLink>
                            </Popover>,
                        ]}
                    >
                        <Meta title="QUẢN LÝ THÔNG TIN VẬN CHUYỂN" description='Dự án demo trang admin quản lý thông tin vận chuyển hàng với chức năng hiển thị thông tin' />
                    </Card>
                    {/* quan_ly_nhan_vien */}
                    <Card
                        hoverable
                        style={{
                            width: 400,
                        }}
                        cover={
                            <img
                                alt="quan_ly_nhan_vien"
                                src={quanLy}
                            />
                        }
                        actions={[
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Công nghệ sử dụng: </Text>
                                    <Text>React, Ant Design, React-Router, Redux, Redux Thunk, Axios</Text>
                                </div>}
                            >
                                <SettingOutlined key="setting" />
                            </Popover>,
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Back-end: </Text>
                                    <Text>API của Trung tâm Đào tạo</Text>
                                </div>}
                            >
                                <i className="fa-solid fa-cloud-arrow-down" />
                            </Popover>,
                            <Popover
                                content={<div style={{ maxWidth: 200 }}>
                                    <Text strong>Github</Text>
                                </div>}
                            >
                                <NavLink to='https://github.com/NguyenNgocMinh080796/QuanLyNhanVien.git' ><i className="fa-solid fa-link" /></NavLink>
                            </Popover>,
                        ]}

                    >
                        <Meta title="QUẢN LÝ NHÂN VIÊN" description='Dự án demo trang admin quản lý thông tin nhân viên và sinh viên với các chức năng hiển thị, thêm, xóa, sửa' />
                    </Card>
                </Space>
            </div >
        </>
    )
}
