import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Applayout";
import App from "../App";
import School from "../pages/School";
import Infra from "../pages/Infra";
import Preprimary from "../pages/Preprimary";
import Primary from "../pages/Primary";
import Admissionprocess from "../pages/Admissionprocess";
import Onlineregstration from "../pages/Onlineregstration";
import Admissionnotification from "../pages/Admissionnotification";
import Gallary from "../pages/Gallary";




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
     { index: true, element: <App /> },  
     {path:"/about-school", element: <School/> } ,
     {path:"/Infrastructure", element: <Infra/>},
     {path:"/pre-primary", element: <Preprimary/>},
     {path:'/primary', element: <Primary/>},
     {path: "/admission-process", element: <Admissionprocess/>},
     {path: "/online-registration", element: <Onlineregstration/>},
     {path: "/notification", element: <Admissionnotification/>},
     {path: "/gallery", element: <Gallary/>},
 ],
  },
]);

export default router;
