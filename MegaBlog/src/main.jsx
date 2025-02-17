import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { Protected, Login } from './components/index.js'


import AddPost from "./Pages/AddPost";
import Signup from './components/Signup';
import EditPosts from "./Pages/EditPosts";

import Post from "./Pages/Post";

import AllPosts from "./Pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            key: "home",
            path: "/",
            element: <Home />,
        },
        {
            key: "login",
            path: "/login",
            element: (
                
                <Protected authentication={false}>
                    <Login />
                </Protected>
            ),
        },
        {
            key: "signup",
            path: "/signup",
            element: (
                <Protected authentication={false}>
                    <Signup />
                </Protected>
            ),
        },
        {
            key: "all-posts",
            path: "/all-posts",
            element: (
                <Protected authentication>
                    {" "}
                    <AllPosts />
                </Protected>
            ),
        },
        {
            key: "add-post",
            path: "/add-post",
            element: (
                <Protected authentication>
                    {" "}
                    <AddPost />
                </Protected>
            ),
        },
        {
            key: "edit-post",
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                    {" "}
                    <EditPosts />
                </Protected>
            ),
        },
        {
            key: "post",
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)