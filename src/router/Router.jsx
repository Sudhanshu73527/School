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
import Feestructure from "../pages/Feestructure";
import Music from "../pages/Music";
import Dance from "../pages/Dance";
import Yoga from "../pages/Yoga";
import Cbseinfo from "../pages/Cbseinfo";
import Studentdetails from "../pages/Studentdetails";
import Rte from "../pages/Rte";
import Contact from "../pages/Contact";
import Amissionstructure from "../pages/Amissionstructure";




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
     {path: "/fee", element: <Feestructure/>},
     {path: "/music", element: <Music/>},
     {path: "/dance", element: <Dance/>},
     {path: "/yoga", element: <Yoga/>},
     {path: "cbse-info", element: <Cbseinfo/>},
     {path: "/student", element: <Studentdetails/>},
     {path: "/rte", element: <Rte/>},
     {path: "/contact", element: <Contact/>},
     {path: "/Amissionstructure", element: <Amissionstructure/>},
 ],
  },
]);

export default router;
