import React from 'react'
import { Card, Typography, Space, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';

const { Title } = Typography;

export default function ContactComponent() {
    return (
        <div style={{ overflowY: 'auto', textAlign: 'center' }}>
            <Title>LIÊN HỆ</Title>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                    }}
                >
                    {/* Thông tin liên hệ */}
                    <Card
                        style={{
                            width: 500,
                            backgroundColor: '#EEEEEE'
                        }}
                    >
                        <Row>
                            <Col span={2}>
                                <p><i className="fa-solid fa-location-dot"></i></p>
                                <p><i className="fa-solid fa-phone"></i></p>
                                <p><i className="fa-solid fa-envelope"></i></p>
                                <p><i className="fa-solid fa-share-from-square"></i></p>
                            </Col>
                            <Col offset={2} span={20} style={{ textAlign: 'left' }}>
                                <p><NavLink to='https://goo.gl/maps/EEtgMfrSXk1Qzc626'>194 Cống Lở, phường 15, quận Tân Bình, TPHCM</NavLink></p>
                                <p><NavLink to='tel:0937293509'>0937 29 35 09</NavLink></p>
                                <p><NavLink to='mailto:nguyen.ngoc.minh080796@gmail.com'>nguyen.ngoc.minh080796@gmail.com</NavLink></p>
                                <p>
                                    <NavLink to='https://github.com/NguyenNgocMinh080796'><i class="icon-contact fa-brands fa-github"></i></NavLink>
                                    <NavLink to='https://www.facebook.com/NguyenNgocMinh0807/'><i class="icon-contact fa-brands fa-facebook-messenger"></i></NavLink>
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Space>
            </div>
        </div >
    )
}
