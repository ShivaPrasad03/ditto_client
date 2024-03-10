import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" Component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
