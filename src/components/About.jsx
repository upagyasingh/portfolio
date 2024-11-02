import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from "framer-motion";

import {styles} from '../styles'
import { services } from '../constants';
import {fadeIn, textVariant} from "../utils/motion"
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard =({index , title , icon})=>{
  return <>
    <Tilt className='xs:w-[250px] w-full my-10'>
      <motion.div 
          variants={fadeIn("right", "spring", 0.5 * index, 1)}
          initial="hidden"
          animate="show"
          className="w-full green-pink-gradient p-[1px] rounded-lg shadow-card"
      >
        <div
          option={{
            max : 50,
            scale : 1.5,
            speed : 460
          }}
          className=' bg-tertiary rounded-lg py-5 px-12  min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} className='w-20 h-20'/>
          <h3 className='text-slate-300 hover:text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  </>
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        initial="hidden"
          animate="show" 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
         I'm a skilled software developer with experience in
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='nt-20 flex flex-wrap gap-12'>
      {services.map((service , i)=>{
        return <ServiceCard key={service.title} index={i} {...service}></ServiceCard>
      })}
      </div>
    </>
  )
}

export default SectionWrapper(About , "about")
