import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoute() {
  const token = Cookies.get("token");
  if (token === undefined) {
    console.log(token)
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet  />;
}
