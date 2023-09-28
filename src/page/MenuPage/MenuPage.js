import React from 'react'
import { UnorderedListOutlined, UserOutlined, CommentOutlined, FileOutlined } from '@ant-design/icons';
import { Image, Layout, Menu, theme } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import ContentComponent from '../../component/ContentComponent';
import avt from '../../avatar.jpg'

const { Content, Sider } = Layout;

export default function MenuPage() {
    //Màu nền
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    //Router
    const navigate = useNavigate()

    return (
        <div style={{ height: window.innerHeight }}>
            <Layout style={{ maxHeight: 600 }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <Image
                        width='100%'
                        src={avt}
                    />
                    <Menu
                        onClick={(key) => { navigate(key.key) }}
                        theme="dark"
                        mode="inline"
                        items={[
                            {
                                key: '/',
                                label: 'About',
                                icon: < UserOutlined />,
                            },
                            {
                                key: '/project',
                                label: 'Learning Project',
                                icon: <UnorderedListOutlined />,
                            },
                            {
                                key: '/contact',
                                label: 'Contact',
                                icon: < CommentOutlined />,
                            },
                            {
                                key: '/cv',
                                label: (<NavLink to='https://www.topcv.vn/xem-cv/BFAJA1FRWgMHUAFXBlECVQEGAVJXUVpRUQBQVg119e' >CV</NavLink>),
                                icon: <FileOutlined />,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            margin: '24px 16px 10px',
                            overflowY: 'auto',
                        }}
                    >
                        <div
                            style={{
                                marginBottom: 15,
                                minHeight: window.innerHeight,
                                background: colorBgContainer,
                            }}
                        >
                            <ContentComponent />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
