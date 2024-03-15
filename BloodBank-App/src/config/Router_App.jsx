import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Main_Components } from "../pages/Main_Component";
import { Private_Routes } from "./Private_Routes";
import { Donor } from "../pages/Donor";
import { Recipient } from "../pages/Recipient ";
import { Donors_List } from "../pages/Donors_List";
import { Recipients_List } from "../pages/Recipients_List";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="" element={<Signup />} />
            <Route path="login" element={<Login />} />
            {/* Private Route */}
            <Route element={<Private_Routes />}>
                <Route path="Homepage" element={<Main_Components />} />
                <Route path='/recipient' element={<Recipient />} />
                <Route path='/donor' element={<Donor />} />
                <Route path='/donors_list' element={<Donors_List />} />
                <Route path='/recipients_list' element={<Recipients_List />} />

            </Route>
        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export { Router_App }