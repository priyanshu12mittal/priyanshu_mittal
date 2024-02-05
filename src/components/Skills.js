import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y})=>{
    return (
        <motion.div initial={{x:0,y:0}} whileInView={{x:x,y:y,transition:{duration:1.5}}} whileHover={{scale:1.05}} viewport={{once:true}} className=' flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'>{name}</motion.div>
    )
}

const Skills = () => {
  return (
    <>
      <h2 className=' font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 '>Skills</h2>
      <div className=' w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div whileHover={{scale:1.05}} className=' flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'>Web</motion.div>
        <Skill name='HTML' x='-23vw' y='2vw'></Skill>
        <Skill name='CSS' x='-5vw' y='-8vw'></Skill>
        <Skill name='JavaScript' x='20vw' y='6vw'></Skill>
        <Skill name='ReactJs' x='0vw' y='12vw'></Skill>
        <Skill name='NextJs' x='-20vw' y='-12vw'></Skill>
        <Skill name='Web Design' x='15vw' y='-12vw'></Skill>
        <Skill name='Figma' x='30vw' y='-5vw'></Skill>
        <Skill name='Tailwind Css' x='0vw' y='-22vw'></Skill>
        <Skill name='Machine Learning' x='-30vw' y='-18vw'></Skill>
        <Skill name='Backend Dev' x='18vw' y='18vw'></Skill>

      </div>
    </>
  )
}

export default Skills
