import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from "../styles"
import {experiences} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import SectionWrapper from "../hoc/SectionWrapper"
import { div } from 'framer-motion/client'

const ExperienceCard = ({exp }) => {
 return  <VerticalTimelineElement 
    contentStyle={{background :"#1d1836", border:"2px solid white", color :"#fff"}}
    contentArrowStyle={{borderRight :" 7px solid white"}}
    date={exp.date}
    iconStyle={{background:exp.iconBg}}
    icon={ 
      <div className='w-full h-full flex justify-center items-center'>
        <img src={exp.icon} alt={exp.company_name} className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
    <div>
    <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {exp.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {exp.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
}

const Experience = () => {
  return (
    <>
        <motion.div variants={textVariant()}  initial="hidden" animate="show">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp,i)=> <ExperienceCard  key={i} exp={exp}/>)}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper( Experience , "work")