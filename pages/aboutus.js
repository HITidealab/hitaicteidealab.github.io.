import React, { useState ,useEffect} from 'react'
import Image from 'next/image'
import idea from "../assets/idea_lab.jpg"
import hit from "../assets/hit_logo.jpg"

import c1 from "../assets/c1.jpeg"
import c2 from "../assets/c2.jpeg"
import c3 from "../assets/c3.jpeg"
import c4 from "../assets/c4.jpeg"
import c5 from "../assets/c5.jpeg"
import c6 from "../assets/c6.jpeg"

import Head from 'next/head'
import { useRouter } from 'next/router'
import Marquee from 'react-fast-marquee'

const AboutUs = () => {

  const router=useRouter()

  const [images,setImages]=useState([c1,c2,c3,c4,c5,c6])
  const [index,setIndex]=useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      if(index==5)
      setIndex(0)
      else
      setIndex(index+1)
    },2000)
  },[index])

  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className='flex flex-col items-center'>
      <div className='flex justify-evenly items-center mt-5 w-screen'>
        <Image width={150} height={150} src={hit}/>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl text-orange-700 font-bold'>HIT-AICTE IDEA LAB</h1>
        <p className='text-[20px] -mt-5'>Haldia Institute of Technology</p>
        <p className='text-[12px] -mt-5'>(An Autonomous Institute Under MAKAUT)</p>
        </div>
        <Image width={150} height={150} src={idea}/>
      </div>
      <div className='flex w-[95%] justify-evenly mb-10 items-center text-xl mt-2 bg-blue-800 uppercase'>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Home</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>About Us</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Labs</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Projects</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Industries</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Gallery</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Query</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Form</h1>
      </div>
      <p className='w-2/3 mx-auto text-xl'>Vision of the IDEA Lab is to build a robust eco-system for nurturing innovation and start-ups which will in
turn drive sustainable technical and economic growth and generate large scale employment opportunities
throughout the nation.<br/><br/>
Further, an Idea Lab would be set up to pool the innovative ideas of students and to test their feasibility
using various equipments, tools, consumables available under one roof for the conversions of an idea into a
prototype. Furthermore, the Idea Lab would extend and go beyond the academic campus or a nearby
region and collectively it could be the Nations Idea Lab.
</p>
<p className='w-2/3 mx-auto text-3xl font-semibold'>
  Objectives
  <br/>
  <ul className='text-lg ml-20 mt-10'>
  <li>• To provide all facilities under one roof for the conversion of an idea into a prototype.</li>
  <li>• Training in the 21st century skills- critical thinking, problem-solving, collaboration etc.</li>
  <li>• Making engineering students more curious, imaginative and creative; engineering education more
engaging.</li>
  <li>• IDEA lab will be centred around activities and events to promote multidisciplinary education and
research.</li>
</ul>
</p>

<div className='w-2/3 mx-auto mt-10'>
  <p className='text-green-600 text-xl font-bold'>COORDINATORS</p>
  <p className='text-xl font-semibold'>Prof. (Dr.) Goutam Kumar Bose,</p>
  <p className='text-xl'>Professor, Dept. of ME, HIT</p>
  <p className='text-xl'>gkbose@yahoo.com</p>
  <p className='text-xl'>Mob: +919903313045</p>
</div>

<div className='w-2/3 mx-auto mt-20'>
  <p className='text-green-600 text-xl font-bold'>CO COORDINATORS</p>
  <p className='text-xl font-semibold'>Prof. Debadatta Ghosh,</p>
  <p className='text-xl'>Professor, Dept. of AEIE, HIT</p>
  <p className='text-xl'>debadattaghosh@gmail.com</p>
  <p className='text-xl'>Mob: +917001999192</p>
</div>




      <footer className="text-gray-600 body-font w-screen">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Image src={idea} height={50} width={50} />
      <span className="ml-3 text-xl">HIT-AICTE IDEA LAB</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 HIT-AICTE IDEA LAB
    <br/><i className="fa-solid fa-envelope"></i> iipc_hit@hithaldia.in
    <br/><i className="fa-solid fa-phone"></i> +91 81700 30555
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100082574844795' target={"_blank"}>
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" rel="noreferrer" href='https://instagram.com/hitaicteidealab?igshid=YmMyMTA2M2Y=' target={"_blank"}>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </span>
  </div>
</footer>

    </div>
    </>

  )
}

export default AboutUs