import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Appcontext } from "../App";

const Project = () => {
  const {data}=useContext(Appcontext)
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <motion.h3 initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}  className="text-4xl font-semibold">
          My <span className="text-green-600">Projects</span>
        </motion.h3>
        <motion.p initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:.7}}  className="text-gray-400 mt-3 text-lg">My awesome works</motion.p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <motion.div initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{staggerChildren:0.1 ,duration:.5}}  className="lg:w-3/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {data && data.projects.map((project_info, i) => (
              <SwiperSlide key={i} >
                <motion.div initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.7}} className="h-[26rem] w-full p-4 bg-neutral-800 rounded-xl ">
                  {data &&  <img src={project_info.image.url} alt="" className="rounded-lg " />}
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-green-600 bg-gray-800 px-2 py-1 inline-block cursor-pointer"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-green-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* <div className="lg:block hidden ">
          {data && <img src={data.about.avatar.url} alt="" />}
        </div> */} 
      </div>
    </section>
  );
};

export default Project;
