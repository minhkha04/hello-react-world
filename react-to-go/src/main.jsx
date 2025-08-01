import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/configStore.js";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/*Provider store={store}> use for Redux*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
