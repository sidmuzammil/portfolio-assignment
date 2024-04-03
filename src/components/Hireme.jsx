import React, { useContext } from "react";
import hireMe from "../assets/images/hireMe.png";
import { motion } from "framer-motion";
import { Appcontext } from "../App";
const Hireme = () => {
  
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <motion.h3  initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}  className="text-4xl font-semibold">
          Hire <span className="text-green-600">Me</span>
        </motion.h3>
        <motion.p  initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:.7}} className="text-gray-400 mt-3 text-lg">Do you have any work?</motion.p>
      </div>
      <motion.div initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}  className="bg-green-900  relative px-8 rounded-[15px] py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <motion.h2 initial={{opacity:0}} whileInView={{opacity:1,}} transition={{ duration:0.5}}  className="text-2xl font-semibold">
            Do you want any work from me?
          </motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration:0.5}}  className=" lg:text-left opacity-0 text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            soluta quos tempore eos accusamus cupiditate, amet in similique
            sapiente obcaecati odio deleniti architecto corporis ratione.
            Consequatur a quidem maiores!
          </motion.p>
          <motion.button className="btn-white mt-10  hover:bg-green-600 hover:text-black ease-in duration-300 ">Say Hello</motion.button>
        </div>
        <motion.img
        initial={{opacity:0,y:-200}}  whileInView={{opacity:1, y:0}} transition={{duration:.8}}
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hireme;
