import { Navigate, createBrowserRouter } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

import App from "../App";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/chat" replace /> },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
]);

export default router;
