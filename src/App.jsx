import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Layout from "./layouts/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
