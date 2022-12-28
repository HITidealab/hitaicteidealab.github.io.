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

const Index = () => {

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
        <p className='text-[20px] -mt-5'>Haldia Institute Of Technology</p>
        <p className='text-[12px] -mt-5'>(An Autonomous Institute Under MAKAUT)</p>
        </div>
        <Image width={150} height={150} src={idea}/>
      </div>
      <div className='flex w-[95%] justify-evenly mb-10 items-center text-xl mt-2 bg-blue-800 uppercase'>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Home</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white' onClick={()=>{router.push("/aboutus")}}>About Us</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Labs</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Projects</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Industries</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Gallery</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Query</h1>
        <h1 className='hover:bg-white hover:text-blue-500 py-5 px-3 cursor-pointer text-white'>Form</h1>
      </div>
      <div>
      <Image  width={800} height={400} src={images[index]}/>
      </div>
      <Marquee speed={100} direction="left" className="w-[95%]  pt-[8px] bg-gray-300 rounded border border-gray-500 my-8 h-[40px]">WINTER INTERNSHIP</Marquee>
      <div className='w-2/3 flex justify-center items-center mt-5'>
        <div className='w-1/5 -ml-48 pr-10'>
          <h1 className='text-3xl -mt-[295px]'>Quick Links</h1>
          <div className='border-b border-black mb-8'></div>
          <a className='text-black' href={"https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/FACULTY%20DEVELOPMENT%20PROGRAM%20ON%20MICRO%20%26NANO%20TECHNOLOGY.pdf?alt=media&token=ca44dda2-cc8f-423a-90fa-dd213b149bb7"} target={"_blank"} rel={"noreferrer"}>FDP on Micro and Nano Technology</a>
          <p></p>
          <a className='text-black' href='https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/IDEATION%20WORKSHOP%20ON%20_%20AEROTHON_.pdf?alt=media&token=53c0ff6b-8cb4-4f57-a55b-cfc0ee94c9e0' target={"_blank"} rel={"noreferrer"}>Ideation Workshop: AEROTHRON</a>
          <p></p>
          <a className='text-black' href='https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/SKILLING%20PROGRAM%20FOR%20STUDENTS%20ON%20IOT.pdf?alt=media&token=b0eaaa75-c8b7-4eae-a490-36e206ea641b' target={"_blank"} rel={"noreferrer"}>Skilling Programme on IOT</a>
          <p></p>
          <a className='text-black' href='https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/OPEN%20DAY%20FOR%20SCHOOL%20STUDENTS%20PROGRAMME.pdf?alt=media&token=3e7a9bc3-05c7-46f0-9083-675a09025e10' target={"_blank"} rel={"noreferrer"}>Open Day for School</a>
          <p></p>
          <a className='text-black' href='https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/STAFF%20DEVELOPMENT%20PROGRAM%20ON%20PCB%20DESIGN%20AND%20CIRCUIT%20REALIZATION.pdf?alt=media&token=36b957a1-3fd3-4981-93b0-163282fe4726' target={"_blank"} rel={"noreferrer"}>SDP on PCB Design and Realization</a>
        </div>
        <div className='w-3/5'>
          <h1 className='text-3xl text-blue-900'>
            Welcome To HIT-AICTE IDEA LAB
          </h1>
          <div className='border-b border-black w-full mb-6'></div>
          <p>AICTE-IDEA (Idea Development, Evaluation & Application) Labs are being established across the country for encouraging students for application of science, technology engineering and mathematics (STEM) fundamentals towards enhanced hands-on experience, learning by doing and even product visualization. As a common facility embedded in the institution, the IDEA Lab will make engineering graduates more imaginative and creative, besides getting basic training in the 21st century skills like- critical thinking, problem solving, design thinking, collaboration, communication, lifelong learning etc. IDEA Lab can empower the students and faculty to “engage, explore, experience, express and excel”, addressing the need of new age learning. IDEA Lab would serve as an infrastructure for faculty to take up and promote multidisciplinary education and research. Accordingly, faculty would be encouraged to get trained in these Labs and strive for creating problems/ projects/ internships in their own subjects/ disciplines and mentor the students.
IDEA Lab will provide all facilities under one roof, for conversion of an idea into a prototype. The idea need not be always be new (which will always be encouraged) but the emphasis would be on graduating engineers working with their hands using equipment, tools and consumables (listed in the Scheme Document). With these facilities available 24x7 in the campus, more students and faculty will be encouraged to take up creative work and in the process, get training on creative thinking, problem solving, collaboration etc. which conventional labs are not focussing on. The focus will be on training students so that they become imaginative and creative and stay so at the workplaces they join. The ultimate objective is to transform engineering education with such a Lab in all colleges and for this they must proactively expose all students to the IDEA Lab, organize training sessions for interested students as well as support projects and by providing online learning materials.</p>
          <div className='bg-gray-200 h-32'>
            <Marquee speed={100} direction="up" className="h-full text-center px-10">SDP for Industry Personels<div className='border-b border-black mb-3'></div> SDP for Students <div className='border-b border-black mb-3'></div> Upcoming Events <div className='border-b border-black mb-3'></div></Marquee>
          </div>
        </div>
        <div className='w-1/5 pl-10'>
          <h1 className='text-3xl -mt-[190px]'>Gallery</h1>
          <div className='border-b border-black mb-10'></div>
          <Image src={c1} height={150} width={150}/>
          <Image src={c2} height={150} width={150}/>

        </div>
      </div>
      <footer className="text-gray-600 body-font w-screen">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Image src={idea} height={50} width={50} />
      <span className="ml-3 text-xl">HIT-AICTE IDEA LAB</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 HIT-AICTE IDEA LAB
    <br/><i className="fa-solid fa-envelope"></i> iipc_hit@hithaldi.in
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

export default Index