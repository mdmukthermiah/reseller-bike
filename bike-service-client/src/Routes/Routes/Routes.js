import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProduct from "../../Pages/Dashboard/SellerDashboard/MyProduct";
import MyBuyer from "../../Pages/Dashboard/SellerDashboard/MyBuyer";
import AdminRoute from "../AdminRoute/AdminRoute"
import Payment from "../../Pages/Dashboard/Payment/CheckOut";
import About from "../../Pages/Home/About/About";
import Shop from "../../Pages/Shop/Shop";
import Royal from "../../Pages/Items/Royal/Royal";
import Suzuki from "../../Pages/Items/Suzuki/Suzuki";
import Yamaha from "../../Pages/Items/Yamaha/Yamaha";
import Blogs from "../../Pages/Blogs.js/Blogs";
import CarDetails from "../../Pages/Items/CarDetails/CarDetails";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/shop',
                element:<Shop></Shop>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
           
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/royal',
                element:<PrivateRoute><Royal></Royal></PrivateRoute>
            },
            
            {
                path:'/royalDetails/:id',
                element:<CarDetails></CarDetails>,
                loader:({params})=>fetch(`http://localhost:5000/royalBikes/${params.id}`)
            },
            {
                path: '/suzuki',
                element:<PrivateRoute><Suzuki></Suzuki></PrivateRoute>
            },
            
            {
                path:'/suzukiDetail/:id',
                element:<CarDetails></CarDetails>,
                loader:({params})=>fetch(`http://localhost:5000/suzukiBike/${params.id}`)
            },
            {
                path: '/yamaha',
                element:<PrivateRoute><Yamaha></Yamaha></PrivateRoute>
            },
            {
                path:'/yamahaDetail/:id',
                element:<CarDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/yamahaBike/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/myBuyer',
                element: <MyBuyer></MyBuyer>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]

    }
])
export default router;