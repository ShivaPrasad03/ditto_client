import Cookies from "js-cookie";
import { Navigate, Route, Outlet } from "react-router-dom";
export default function ProtectedRoute(props) {
  const token = Cookies.get("token");
  if (token === undefined) {
    console.log(token)
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
}
