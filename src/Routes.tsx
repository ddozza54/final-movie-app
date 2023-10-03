import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import NowPlaying from "./pages/NowPlaying";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "coming-soon",
                element: <ComingSoon />
            },
            {
                path: "/now-playing",
                element: <NowPlaying />
            }
        ]
    }
])

export default router