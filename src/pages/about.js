import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import profilePic1 from '../../public/images/profile/passport photo.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Transition from '@/components/Transition'

const AnimatedNumbers = ({value})=>{
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration:3000});
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on("change",(latest)=>{
      if (ref.current && latest.toFixed(0)<=value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  },[springValue,value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Priyanshu | About Page</title>
        <meta name='description'content='any description'></meta>
      </Head>
      <Transition></Transition>
      <main className=' flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className=' pt-16'>
        <AnimatedText text='Passion Fuels Purpose! ' className=' mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className=' grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className=' col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className=' mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                <p className=' font-medium'>Aspiring machine learning engineer and frontend web developer with a passion for building intelligent systems and interactive web applications. Skilled in Python programming, data analysis, and machine learning model development. Experience optimizing models for classification and prediction problems achieving high accuracy.</p>
                <p className=' font-medium my-4'>Proficient in web development using ReactJs and NextJs. Developed smooth scrolling, responsive navbars, image sliders and modals to enhance UI/UX. Collaborated with teams to build responsive websites for fictional companies during hackathon events.</p>
            </div>
            <div className=' col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8'>
                <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light xl:col-span-4' />
                <Image priority src={profilePic1} alt='image' className=' w-full h-auto rounded-2xl' sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'></Image>
            </div>
            <div className=' col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className=' flex flex-col items-end justify-center xl:items-center'>
                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={40} />+</span>
                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
              </div>
              <div className=' flex flex-col items-end justify-center xl:items-center'>
                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={30} />+</span>
                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
              </div>
              <div className=' flex flex-col items-end justify-center xl:items-center'>
                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={1} />+</span>
                <h2 className=' text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
              </div>
            </div>
        </div>
        <Skills></Skills>
        <Experience></Experience>
        <Education></Education>
        </Layout>
      </main>
    </>
  )
}

export default about
