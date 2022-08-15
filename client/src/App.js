import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Context } from "./context/Context";
import {
  Home,
  About,
  Contact,
  Write,
  Posts,
  Error,
  Login,
  Single,
  Register,
} from "./pages";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="write" element={<Write />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Single />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
