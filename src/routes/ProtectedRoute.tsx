import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { pathname } = useLocation();

  const isAuth = !!localStorage.getItem("authToken");
  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" replace state={{ referrer: pathname }} />;
}
