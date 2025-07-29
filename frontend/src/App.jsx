import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './User/pages/Login'
import Home from './User/pages/Home'
import Signup from './User/pages/Signup'
import Packages from './User/pages/Pricing'
import About from './User/pages/About'
import AdminLogin from './Admin/pages/AdminLogin'
import AdminDashboard from './Admin/pages/AdminDashboard'
import Pricing from './User/pages/Pricing'
import BookingPayment from "./User/pages/BookingPayment"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/about",
      element: <About />
    },
    { path:"/pricing",
      element:<Pricing/>
    },
    {
      path: "/admin",
      element: <AdminLogin />
    },
    {
      path:"/admindashboard",
      element:<AdminDashboard/>
    },
    {
      path:"/BookingPayment",
      element:<BookingPayment/>
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

