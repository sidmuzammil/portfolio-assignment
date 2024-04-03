import React, { useContext } from "react";
import { Appcontext } from "../App";
import { motion } from "framer-motion";


const Skills = () => {
  const {data}=useContext(Appcontext)
  return (
    <section id="skills" className="py-10 bg-neutral-900  relative">
      <div className="mt-8 text-gray-100 text-center">
        <motion.h3 initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl font-semibold">
          My  <span className="text-green-800">Skills</span>
        </motion.h3>
        <motion.p initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:.7}} className="text-gray-400 mt-3 text-lg">My knowledge</motion.p>
      <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {data && data.skills.map((skill, i) => (
            <motion.div
              initial={{scale:1,opacity:0,y:-100}}
              whileInView={{opacity:1,y:0}}
              animate={{opacity:1, y:0,}}
              transition={{duration:.5 ,staggerChildren:.1}}
              whileHover={{scale:1.1}}
              key={i}
              className="border-2 group border-green-800 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <motion.div
                style={{
                  background: `conic-gradient(rgba(0, 148, 27, 0.85) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center hover:text-green-600">
                 {data && <img src={skill.image.url} alt="" />}
                </div>
              </motion.div>
              <p className="text-xl mt-3">{skill.percentage} % </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

 {/* <ion-icon name={skill.logo}></ion-icon> */}
