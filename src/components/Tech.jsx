import React from 'react'
import {fadeIn, textVariant} from "../utils/motion"
import {motion} from "framer-motion";
import {styles} from '../styles'
import SectionWrapper from '../hoc/SectionWrapper';
import {BallCanvas} from './canvas'
import {technologies} from "../constants"
const Tech = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have learnt so far</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-24 '>
        {technologies.map((tech,i)=>{return <div className='w-36 h-36  flex flex-col justify-center items-center gap-4' key={i}>
          <BallCanvas icon={tech.icon} />
          <h2>{tech.name}</h2>
        </div>})}
      </div>
    </>
  )
}

export default SectionWrapper(Tech,"tech")