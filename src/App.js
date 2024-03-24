import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import SignUp from "./components/SignUp/SignUp";
import ProtectedRoute from "./components/Protected-Route/Protected";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={SignUp} />
        <Route exact path="/signup" Component={SignUp} />
        <Route Component={ProtectedRoute}>
          <Route exact path="/feed" Component={Main} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
