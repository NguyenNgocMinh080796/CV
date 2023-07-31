import React from 'react'
import { UnorderedListOutlined, UserOutlined, CommentOutlined, FileOutlined } from '@ant-design/icons';
import { Image, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
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
        <Layout style={{ height: 450 }}>
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
                            label: 'CV',
                            icon: <FileOutlined />,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflowY: 'auto',
                    }}
                >
                    <div
                        style={{
                            marginBottom: 15,
                            height: 900,
                            background: colorBgContainer,
                        }}
                    >
                        <ContentComponent />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
