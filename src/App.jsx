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
import MouseFollower from "./Animations/MouseFollower";
import { motion, useScroll, useSpring } from "framer-motion";
export const Appcontext = createContext();

const App = () => {
  const [data,setData]=useState(null)
 


  // fetching the API in here

  useEffect(()=>{
    Axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
    .then((res)=>{
       console.log(res.data);
       setData(res.data.user);
    })
   },[])

   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
     stiffness: 100,
     damping: 30,
     restDelta: 0.001
   });

    
  return (
    <Appcontext.Provider value={{ data, setData}}>
    <div>
    <motion.div className="fixed top-0 right-0 left-0 h-[10px] bg-green-600 origin-[50%] z-[99]" style={{ scaleX }} />
      <MouseFollower/>
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
