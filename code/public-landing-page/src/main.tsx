import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import About from "./About.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><NavBar /><Outlet /></>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
