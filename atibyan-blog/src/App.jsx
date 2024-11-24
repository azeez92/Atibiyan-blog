import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/projects" element={<Projects />}/>
<Route path="/signin" element={<Signin />}/>
<Route path="/signin" element={<Signup />}/>
<Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  )
}