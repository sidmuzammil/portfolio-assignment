import React,{createContext, useState,useEffect} from "react";
import Axios from "axios"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import { motion } from "framer-motion";
export const Appcontext = createContext();

const App = () => {
  const [data,setData]=useState(null)
  const [mousePosition ,setMousePosition]=useState({
    x:0,
    y:0
  })


  // fetching the API in here

  useEffect(()=>{
    Axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
    .then((res)=>{
       console.log(res.data);
       setData(res.data.user);
    })
   },[])

   //mouse Follower functions.....

   useEffect(()=>{
      const mouseMove =(e)=>{
        setMousePosition({
          x:eclientX,
          y:eclientY,
        })
      }
      window.addEventListener("mousemove",mouseMove)

      return ()=>{
        window.removeEventListener("mousemove",mouseMove)
      }
   },[])

   const variants={
    default:{
       x:mousePosition.x,
       y:mousePosition.y,
    }
   }

  return (
    <Appcontext.Provider value={{ data, setData}}>
    <div>
      <div   className="rounded-full bg-orange-500 z-50 fixed top-0 left-0 h-[32px] w-[32px]"/>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </div>
    </Appcontext.Provider>
  );
};

export default App;
