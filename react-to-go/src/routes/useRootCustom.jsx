import React from 'react';
import {useRoutes} from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate.jsx";
import PageNotFound from "../components/pageNotFound/PageNotFound.jsx";
import Phone from "../components/myPhone/Phone.jsx";
import PokeDetail from "../components/PokeDetail.jsx";
import ExampleProps from "../components/demoProps/ExampleProps.jsx";
import {path} from "../common/path.js";
import DemoRedux from "../components/demoRedux/DemoRedux.jsx";

const UseRootCustom = () => {
    return useRoutes([
        {
            path: path.homePage,
            element: <HomeTemplate/>,
            children: [
                {
                    index: true,
                    element: <ExampleProps/>
                },
                {
                    path: path.myPhone,
                    element: <Phone/>
                },
                {
                    path: `${path.pokeDetail}/:id`,
                    element: <PokeDetail/>
                },
                {
                    path: path.demoRedux,
                    element: <DemoRedux/>
                },

            ]
        },
        {
            path: "*",
            element: <PageNotFound/>
        }
    ]);
};

export default UseRootCustom;