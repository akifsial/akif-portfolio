import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe"
import Projects from "./pages/Projects/Project"
import AppLayout from "./pages/AppLayout/AppLayout"
import './App.css'

function App() {
const routing = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-me",
        element: <AboutMe />
      },
      {
        path: "projects",
        element: <Projects />
      }
      
    ]
  }
])

  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export default App
