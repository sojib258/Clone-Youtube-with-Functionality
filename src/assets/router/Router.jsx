import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/shared/Layout"
import ErrorPage from "../pages/erroPage/ErrorPage"
import FavouriteList from "../pages/favourite/Favourite"
import History from "../pages/history/History"
import HomePage from "../pages/home/Home"
import Player from "../pages/player/Player"
import Playlist from "../pages/playlist/Playlist"
import RecentList from "../pages/recent/Recent"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path:"/", element: <HomePage />},
      {
        path: "/playlist/:playlistId",
        element: <Playlist/>
      },
      {
        path: "/favourite",
        element: <FavouriteList/>
      },
      {
        path: "/recent",
        element: <RecentList/>
      },
      {
        path: "/history",
        element: <History/>
      },
      {
        path: "/player/watch/:videoId/:playlistId",
        element: <Player/>
      },
    ],
    errorElement: <ErrorPage/>
  }
])
export default router;
