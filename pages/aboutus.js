import React, { useState ,useEffect} from 'react'
import Head from 'next/head'

import Image from 'next/image'

import a4 from "../assets/about/a4.jpg"
import a15 from "../assets/about/a15.jpg"
import a37 from "../assets/about/a37.jpg"

import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

const AboutUs = () => {


  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true)
    }, 1000)
  }, [])

  if (showPage)
  {
  return (
    <>
    <Head>
      <title>About Us</title>
    </Head>
    <div className='flex flex-col items-center overflow-x-hidden bg-yellow-50'>
     <Header/>
     <Navbar/>
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
  <ul className='text-lg md3:ml-20 ml-5 mt-10'>
  <li>• To provide all facilities under one roof for the conversion of an idea into a prototype.</li>
  <li>• Training in the 21st century skills- critical thinking, problem-solving, collaboration etc.</li>
  <li>• Making engineering students more curious, imaginative and creative; engineering education more
engaging.</li>
  <li>• IDEA lab will be centred around activities and events to promote multidisciplinary education and
research.</li>
</ul>
</p>

<div className='flex flex-col justify-center items-center w-[95%]'>

  

<div className='mx-auto mt-10 md3:text-left text-center'>
  <p className='text-green-600 text-xl font-bold'>CHIEF MENTOR</p>
  <div className='h-[200px] w-[200px] md3:mx-0 mx-auto'>
  <Image src={a37} alt="other" />
  </div>
  <p className='text-xl font-semibold -mb-1'>Prof. (Dr.) Subrata Mondal</p>
  <p className='text-xl -mb-1'>Principal, HIT</p>
  <p className='text-xl'>Mob: +916291046166</p>
</div>

<div className='flex md3:flex-row flex-col justify-between items-center'>
<div className='w-2/3 mx-20 mt-20 md3:text-left text-center'>
  <p className='text-green-600 text-xl font-bold'>COORDINATOR</p>
  <div className='h-[200px] w-[200px] mb-3 md3:mx-0 mx-auto'>
  <Image src={a4} alt="other" />
  </div>
  <p className='text-xl font-semibold -mb-1'>Prof. (Dr.) Goutam Bose</p>
  <p className='text-xl -mb-1'>HOD, Dept. of ME, HIT</p>
  <p className='text-xl -mb-1'>gkbose@yahoo.com</p>
  <p className='text-xl'>Mob: +919903313045</p>
</div>
<div className='w-2/3 mx-20 mt-20 md3:text-left text-center'>
  <p className='text-green-600 text-xl font-bold'>CO COORDINATOR</p>
  <div className='h-[200px] w-[200px] mb-3 md3:mx-0 mx-auto'>
  <Image src={a15} alt="other" />
  </div>
  <p className='text-xl font-semibold -mb-1'>Prof. Debadatta Ghosh</p>
  <p className='text-xl -mb-1'>Professor, Dept. of AEIE, HIT</p>
  <p className='text-xl -mb-1'>debadattaghosh@gmail.com</p>
  <p className='text-xl'>Mob: +917001999192</p>
</div>
</div>

</div>
<Footer/>
    </div>
    </>

  )
}
else
{
  return <Loading/>
}
}


export default AboutUs