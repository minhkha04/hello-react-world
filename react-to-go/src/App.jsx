import useRootCustom from "./routes/useRootCustom.jsx";
import {createContext} from "react";
import {message} from "antd";

export const ContextName = createContext({ value: null });
export const NotificationContext = createContext();

function App() {
    const [messageApi, contextHolder] = message.useMessage();
    const handleNotification = (type, content) => {
        messageApi.open({
            type,
            content
        });
    }
    let name = "Minh Kha Ne";
    return <ContextName.Provider value={{value: name}}>
        <NotificationContext.Provider value={{handleNotification}}>
            {contextHolder}
            {useRootCustom()}
        </NotificationContext.Provider>
    </ContextName.Provider>
}

export default App;
