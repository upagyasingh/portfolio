import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

function SectionWrapper(Comp , id) {
  return (
    function HOC(){
        return(<>
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0.5}}
            className={`${styles.padding} mac-w-7xl mx-auto relative z-0`}
        >
            <span  className='hash-span' id={id}></span>
            <Comp/>
        </motion.section>
        </>)
    }
  )
}

export default SectionWrapper
