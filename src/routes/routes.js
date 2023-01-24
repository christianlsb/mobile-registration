import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/home"
import User from "../containers/user"

export default function RoutesApp() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    );
  }