import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Main.css";
export default function Main() {
  const navigate = useNavigate();
  const token = Cookies.get("jwt-token");
  if (token === undefined) {

    navigate("/login");
  }
  return (
    <div className="Main-container">
      <h1>We are coming soon!!</h1>
    </div>
  );
}
