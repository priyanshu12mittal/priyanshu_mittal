import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import {TwitterIcon,GithubIcon,LinkedInIcon,PinterestIcon,DribbbleIcon, SunIcon, MoonIcon, LeetCode, Coursera} from './icons'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'
import useThemeSwticher from './hooks/useThemeSwticher'


const CustomLink = ({href,title,className=""})=>{
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href,title,className="",toggle})=>{
  const router = useRouter();
  const handleClick = ()=>{
    toggle();
    router.push(href)
  }
  return (
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
          {title}
          <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'w-0'} dark:bg-dark`}>&nbsp;</span>
      </button>
  )
}

const NavBar = () => {

  const [mode,setMode] = useThemeSwticher();
  const [isOpen,setIsOpen] = useState(false);

  const handleClick = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className=' z-10 lg:px-16 md:px-12 sm:px-8 w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'>
      <button className=' flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
        <span className={` bg-dark  transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen?'rotate-45 translate-y-1':'-trnaslate-y-0.5'}`}></span>
        <span className={` bg-dark  transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen?'opacity-0':'opacity-100'}`}></span>
        <span className={` bg-dark  transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${isOpen?'-rotate-45 -translate-y-1':'trnaslate-y-0.5'}`}></span>
      </button>
      <div className=' w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href='/'title="Home" className=' mr-4 '/>
          <CustomLink href='/about'title="About" className=' mx-4'/>
          <CustomLink href='/projects'title="Projects" className=' mx-4'/>
          <CustomLink href='/articles'title="Articles" className=' ml-4'/>
        </nav>
        <nav className=' flex items-center justify-center flex-wrap'>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://github.com/priyanshu12mittal' className=' w-6 mx-3' target={"_blank"}><GithubIcon /></motion.a>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://www.linkedin.com/in/priyanshu-mittal-/' className=' w-6 mx-3' target={"_blank"}><LinkedInIcon /></motion.a>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://leetcode.com/priyanshu_mittal/' className=' w-6 mx-3 ' target={"_blank"}><LeetCode /></motion.a>
          <button onClick={()=>setMode(mode === 'light'?"dark":'light')} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light'?'bg-dark text-light':' bg-light text-dark'}`}>
            {
              mode === 'dark'?<SunIcon className="fill-dark" />:<MoonIcon className="fill-dark" />
            }
          </button>
        </nav>
      </div>


      {/* mobile menu */}
      {isOpen && (<motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1,x:'-50%',y:'-50%'}} className=' min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
        <nav className=' flex flex-col items-center justify-center'>
          <CustomMobileLink href='/'title="Home" className=' ' toggle={handleClick}/>
          <CustomMobileLink href='/about'title="About" className='' toggle={handleClick}/>
          <CustomMobileLink href='/projects'title="Projects" className='' toggle={handleClick}/>
          <CustomMobileLink href='/articles'title="Articles" className='' toggle={handleClick}/>
        </nav>
        <nav className=' flex items-center justify-center flex-wrap mt-2'>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className=' w-6 mr-3 sm:mx-1' href='https://twitter.com' target={"_blank"}><TwitterIcon /></motion.a>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://github.com/priyanshu12mittal' className=' w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark' target={"_blank"}><GithubIcon /></motion.a>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://www.linkedin.com/in/priyanshu-mittal-/' className=' w-6 mx-3' target={"_blank"}><LinkedInIcon /></motion.a>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://twitter.com' className=' w-6 mx-3 sm:mx-1 bg-light rounded-full' target={"_blank"}><PinterestIcon /></motion.a>
          <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} href='https://twitter.com' className=' w-6 ml-3 sm:mx-1' target={"_blank"}><DribbbleIcon /></motion.a>
          <button onClick={()=>setMode(mode === 'light'?"dark":'light')} className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${mode === 'light'?'bg-dark text-light':' bg-light text-dark'}`}>
            {
              mode === 'dark'?<SunIcon className="fill-dark" />:<MoonIcon className="fill-dark" />
            }
          </button>
        </nav>
      </motion.div>)}
      <div className=' absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo></Logo>
      </div>
    </header>
  )
}

export default NavBar
