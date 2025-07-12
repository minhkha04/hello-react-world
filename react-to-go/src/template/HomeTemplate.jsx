import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {NavLink, Outlet} from "react-router-dom";
import {path} from "../common/path.js";
import {useSelector} from "react-redux";

const {Header, Content, Footer} = Layout;
const HomeTemplate = () => {
    const arrNavLink = [
        {
            to: path.homePage,
            content: "Home"
        },
        {
            to: path.myPhone,
            content: "My Phone"
        },
        {
            to: path.demoRedux,
            content: "Demo Redux"
        },
        {
            to: path.myGame,
            content: "My Game"
        },
    ]
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const userName = useSelector(state => state.userSlice.fullName);
    return (
        <Layout className={"bg-black"}>
            <Header
                className="bg-gray-900 border-b border-cyan-500 relative overflow-hidden"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: 'calc((100vh - 85vh)/2)',
                }}
            >
                {/* Galaxy glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
                <div className="relative z-10">
                    {arrNavLink.map((item, index) => {
                        return (
                            <NavLink
                                key={index}
                                className={({isActive, isPending}) => {
                                    return `mx-4 px-4 py-2 rounded-md font-semibold uppercase tracking-wide transition-all duration-300 ${
                                        isActive
                                            ? 'text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500'
                                            : 'text-gray-300 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10'
                                    }`;
                                }}
                                to={item.to}
                            >
                                {item.content}
                            </NavLink>
                        )
                    })}
                </div>

                <div
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-bold uppercase tracking-wider">
                    {userName}
                </div>

                {/* Corner accent lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
            </Header>

            <Content className="bg-black" style={{padding: '0 48px'}}>
                <div
                    className="min-h-[85vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4"
                    style={{
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>

            <Footer
                className="bg-gray-900 border-t border-purple-500 text-center relative overflow-hidden"
                style={{textAlign: 'center', minHeight: 'calc((100vh - 85vh)/2)'}}
            >
                {/* Galaxy glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>

                <div className="relative z-10 text-gray-300">
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
                        Galaxy Design
                    </span> ©{new Date().getFullYear()} Created by{' '}
                    <span className="text-cyan-400 font-bold">MinhKha</span>
                </div>

                {/* Corner accent lines */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-500"></div>
            </Footer>
        </Layout>
    );
};
export default HomeTemplate;