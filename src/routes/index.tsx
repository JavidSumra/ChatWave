import { createBrowserRouter } from "react-router-dom";
import Signin from "../Pages/Signin";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "",
    element: <Signin />,
  },
  {
    path: "/chat",
    element: <App />,
  },
]);

export default router;
