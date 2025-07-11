import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {NavLink, Outlet} from "react-router-dom";
import {path} from "../common/path.js";

const {Header, Content, Footer} = Layout;
const HomeTemplate = () => {
    const arrNavLink = [
        {
            to: path.homePage,
            content: "Home"
        },
        {
            to:path.myPhone,
            content: "My Phone"
        },
    ]
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Layout className={"min-h-screen"}>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {arrNavLink.map((item) => {
                    return (
                        <NavLink className={({isActive, isPending}) => {
                            return `mx-4 ${isActive ? 'text-red-500' : 'text-gray-500'}`;
                        }} to={item.to}>{item.content}</NavLink>
                    )
                })}
                <div className="demo-logo"/>
            </Header>
            <Content style={{padding: '0 48px'}}>
                <div
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©{new Date().getFullYear()} Created by MinhKha
            </Footer>
        </Layout>
    );
};
export default HomeTemplate;