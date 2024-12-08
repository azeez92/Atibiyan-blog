import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";
import Signin from "./pages/signin";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import { Footer } from "flowbite-react";
import FooterCom from "./components/Footer";




export default function App() {
  return (
    <BrowserRouter>
   <Header />
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/projects" element={<Projects />}/>
<Route path="/signin" element={<Signin />}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    <FooterCom />
    </BrowserRouter>
  )
}