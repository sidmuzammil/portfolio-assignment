import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "sidhuxnm@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 730 679 2972" },
    {
      logo: "location",
      text: "muzamil location",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <motion.h3  initial={{opacity:0 ,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl font-semibold">
          Contact <span className="text-green-600">Me</span>
        </motion.h3>
        <motion.p initial={{opacity:0 }} whileInView={{opacity:1}} transition={{duration:.7}}  className="text-gray-400 mt-3 text-lg">Get in touch</motion.p>
        <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.7}}
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-neutral-900 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <motion.input initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5}} type="text" placeholder="Your Name" className="bg-neutral-800" />
            <motion.input initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}  type="Email" placeholder="Your Email Address" className="bg-neutral-800" />
            <motion.textarea initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}  placeholder="Your Message" rows={10} className="bg-neutral-800"></motion.textarea>
            <button className="btn-primary w-fit  hover:bg-white hover:text-black ease-in duration-300">Send Message</button>
          </form>
          <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}   className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <motion.div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </motion.div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
