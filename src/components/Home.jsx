import React from "react";
import HeroImage from "../assets/heroImage.png";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";

const Home = () => {
return (
<div
   name="home"
   className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800  xs:pt-20 "
 >
<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
<div className="flex flex-col justify-center h-full pt-20 ">
<h2 className="text-4xl sm:text-6xl font-bold md:pt-10 text-white xs:pt-30 ">
I am a Web Developer
</h2>
<p className="text-gray-500 py-4 max-w-md  mx-auto">
I have 3 years experience building and designing Websites & WebApps.
Currently, I love to work on web applications using technologies
like React, Tailwind, Node JS but also I using and other
technologies for development like Webflow, Wordpress, PHP. Ussualy
for design I using tools like Figma, AdobeXD, Ilustrator and
Photoshop.
</p>
<div>
<Link
           to="portfolio"
           smooth
           duration={500}
           className="group text-white w-fit px-6 py-2 my-2 flex mx-auto items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer"
         >
Portfolio
<span className="mx-3 group-hover:rotate-90 duration-300">
<RxDoubleArrowRight size={20} className="ml-1" />
</span>
</Link>
</div>
</div>
<div className=" ">
<img
         src={HeroImage}
         alt="my profile"
         className=" rounded-2xl mx-auto xs:pb-15 w-2/4 md:w-2/5"
       />
</div>
</div>
</div>
);
};

export default Home;