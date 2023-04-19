import { createBrowserRouter } from "react-router-dom";
import Countainer from "./layouts/Countainer";
import Home from "./pages/Home/Home";
import Explore from "./pages/explore/Explore";
import Notifications from "./pages/notification/Notifications";
import Messages from "./pages/messages/Messges";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Profile from "./pages/profile/Profile";

const router = createBrowserRouter([
    {
        element : <Countainer />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/explore',
                element : <Explore />
            },
            {
                path : '/notifications',
                element : <Notifications />
            },
            {
                path : '/messages',
                element : <Messages />
            },
            {
                path : '/bookmarks',
                element : <Bookmarks />
            },
            {
                path : '/profile',
                element : <Profile />
            },
            {
                path : '/login',
                element : <Home />
            }
        ]
    }
])

export default router;