import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Frontend/Navbar";
import Main from "./Frontend/Main";
import Footer from "./Frontend/Footer";
import Products from '../src/Frontend/Component/Products'
import About from '../src/Frontend/Component/About'
import User from '../src/Frontend/Component/User'
import Feedback from '../src/Frontend/Component/Feedback'
import SignUp from "./Frontend/Component/SignUp";
import LogIn from "./Frontend/Component/LogIn";
import PrivateComponent from "./Frontend/Component/PrivateComponent";
import Menu from "./Frontend/Component/Menu";




function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Main/>}/>
  <Route element={<PrivateComponent/>} >
    <Route path="/product" element={<Products/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/menu" element={<Menu/>} />
    </Route>
    <Route path="/sign" element={<SignUp/>} />
    <Route path="/log" element={<LogIn/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
