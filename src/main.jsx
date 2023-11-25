import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './firebaseConfig'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Components/Registration/Registration.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import UpdateProfile from './Components/Home/UpdateProfule/UpdateProfile'
import { ResetPassword } from './Components/ResetPassword/ResetPassword.jsx'
import store from './Redux/Store/store.jsx'
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/registration',
    element: <Registration></Registration>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/' ,
    element: <Home></Home>,
  },
  {
    path: '/resetPassword',
    element: <ResetPassword></ResetPassword>,
  },
  {
    path : "/updateProfile" ,
    element : <UpdateProfile></UpdateProfile>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)