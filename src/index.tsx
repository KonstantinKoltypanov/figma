import { createRoot } from "react-dom/client";
import { App } from "@/Components/App";
import { createBrowserRouter } from "react-router-dom"
import "./index.module.scss"


const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:undefined //здесб роутинг на другие элементы стр
    }
])

container.render(
    <App />
)

export { App };
