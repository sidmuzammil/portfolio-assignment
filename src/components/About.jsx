import React, { useContext } from "react";
import {Appcontext} from "../App"
import { motion } from "framer-motion";
const About = () => {
  const {data}=useContext(Appcontext)
  const info = [
    { text: "Years experience", count: "05" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <motion.h3 initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl font-semibold">
          About <span className="text-green-800">Me</span>
        </motion.h3>
        <motion.p initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:.7}} className="text-gray-400 my-3 text-lg">My introduction</motion.p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
             {data && <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration:0.5}} className="text-justify leading-7 w-11/12 mx-auto ">
                {data.about.description}
              </motion.p>} 
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <motion.div initial={{opacity:0 ,y:-100}} whileInView={{opacity:1 , y:0}} transition={{ duration:0.5,staggerChildren:0.1}} key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-green-800">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </motion.div>
                ))}
              </div>
              <br />
              <br />
              <a href="#" download>
                <button className="btn-primary  hover:bg-white hover:text-black ease-in duration-300">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              {data && <img
                src={data.about.avatar.url}
                alt=""
                className="w-full object-cover bg-green-400 rounded-xl"
              />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
