import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from "framer-motion";

import {styles} from '../styles'
import {github} from '../assets'
import { projects } from '../constants';
import {fadeIn, textVariant} from "../utils/motion"
import SectionWrapper from '../hoc/SectionWrapper';


const ProjectCard =({index , name , description,tags,image,source_code_link})=>{
  return <>
      <motion.div 
          variants={fadeIn("right", "spring", 0.5 * index, 1)}
          initial="hidden"
          animate="show"
          className="w-full rounded-md sm:w-[360px] mt-5 "
      >
        <Tilt
          option={{
            max : 50,
            scale : 1.5,
            speed : 460
          }}
          className=' bg-tertiary rounded-2xl p-3 sm:w-[360px] w-full flex justify-evenly items-center flex-col  green-pink-gradient '
        >
          <div className='relative w-full h-[230px]'>
            <img src={image} className='w-full h-full rounded-2xl'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          </div>
          <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] white`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
      </motion.div>
  </>
}


const Works = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have made so far</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      
      <motion.p 
        variants={fadeIn("","",0.1,1)}
        initial="hidden"
          animate="show" 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
          </motion.p>

          <div className='nt-20 flex flex-wrap gap-12'>
      {projects.map((pro , i)=>{
        return <ProjectCard key={`project-${i}`} index={i} {...pro}></ProjectCard>
      })}
      </div>

    </>
  )
}

export default SectionWrapper(Works,"work")