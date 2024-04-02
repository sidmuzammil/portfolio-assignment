import React, { useContext } from "react";
import { Appcontext } from "../App";
const Hero = () => {

  const {data}=useContext(Appcontext)

  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center mt-[30px]">
        {data && <img  src={data.about.avatar.url} alt="" className="md:w-11/12 md:h-[40rem] w-[400px]  h-[500px] rounded-xl object-cover" />} 
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-green-800 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is {data && <span className="font-longfont">{data.about.name}</span>}
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4  text-slate-100 opacity-30 ">
           A creative full stack developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-green-600 cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
