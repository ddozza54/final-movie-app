import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import NowPlaying from "./pages/NowPlaying";
import ErrorPage from "./pages/ErrorPage";
import MovieDetail from "./components/Moives/MovieDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
                children: [
                    {
                        path: "detail/:id",
                        element: <MovieDetail />
                    }
                ]
            },
            {
                path: "coming-soon",
                element: <ComingSoon />,
                children: [
                    {
                        path: "detail/:id",
                        element: <MovieDetail />
                    }
                ]
            },
            {
                path: "now-playing",
                element: <NowPlaying />,
                children: [
                    {
                        path: "detail/:id",
                        element: <MovieDetail />
                    }
                ]
            }
        ]
    }
])

export default router