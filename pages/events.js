import React, { useState ,useEffect} from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

import event from "../assets/events.png"

import Image from 'next/image'

import Head from 'next/head'
import e1 from "../assets/event_banners/1.jpg"
import e2 from "../assets/event_banners/2.jpg"
import e3 from "../assets/event_banners/3.jpg"
import e4 from "../assets/event_banners/4.jpg"
import e5 from "../assets/event_banners/5.jpg"
import e6 from "../assets/event_banners/6.jpg"
import e7 from "../assets/event_banners/7.jpg"
import e8 from "../assets/event_banners/8.jpg"
import e9 from "../assets/event_banners/9.jpg"
import e10 from "../assets/event_banners/10.jpg"
import e11 from "../assets/event_banners/11.jpg"
import e12 from "../assets/event_banners/12.jpg"
import e13 from "../assets/event_banners/13.jpg"
import e14 from "../assets/event_banners/14.jpg"
import e15 from "../assets/event_banners/15.jpg"
import e16 from "../assets/event_banners/16.jpg"
import e17 from "../assets/event_banners/17.jpg"
import e18 from "../assets/event_banners/18.jpg"
import e19 from "../assets/event_banners/19.jpg"
import e20 from "../assets/event_banners/20.jpg"
import e21 from "../assets/event_banners/21.jpg"
import e22 from "../assets/event_banners/22.jpg"
import e23 from "../assets/event_banners/23.jpg"
import e24 from "../assets/event_banners/24.jpg"
import e25 from "../assets/event_banners/25.jpg"
import e26 from "../assets/event_banners/26.jpg"
import e27 from "../assets/event_banners/27.jpg"
import e28 from "../assets/event_banners/28.jpg"
import e29 from "../assets/event_banners/29.jpg"


const EventComponent=({im,s,e,t})=>{
  return(
    <div className='flex flex-col justify-between items-center shadow-lg p-5'>
      <div className='h-auto w-auto'>
      <Image src={im} alt="event"/>
      </div>
      <div className='flex justify-between'>
        <p className='px-10 border-r-[2px] border-gray-600  text-gray-500'><span className='font-bold'>Start Date :</span><br/>{s}</p>
        <p className='px-10 text-gray-500'><span className='font-bold'>End Date :</span><br/>{e}</p>
      </div>
      <p className='font-bold text-xl'>
        {t}
      </p>
    </div>
  )
}

const Events = () => {

  const EventsJSON=[{
    "imag":e2,
    "startYear":"2022-05-17",
    "endYear":"2022-05-24",
    "title":"Faculty Development Programme on Additive Manufacturing & Embedded System"
  },
  {
    "imag":e16,
    "startYear":"2022-05-30",
    "endYear":"2022-06-04",
    "title":"Skilling Programme for students on CNC machining with 3D Printinting"
  },
  {
    "imag":e3,
    "startYear":"2022-07-04",
    "endYear":"2022-07-09",
    "title":"Faculty Development Programme on Manufacturing and Fabrication of Polymer Composite Boards"
  },
  {
    "imag":e17,
    "startYear":"2022-07-25",
    "endYear":"2022-07-29",
    "title":"Skilling Programme on PCB Design and Circuit Realisation",
  },
  {
    "imag":e12,
    "startYear":"2022-08-17",
    "endYear":"2022-08-17",
    "title":"Awareness Workshop for Additive Manufacturing & Embedded System",
  },
  {
    "imag":e4,
    "startYear":"2022-08-25",
    "endYear":"2022-08-30",
    "title":"Faculty Development Programme on 3D Printing",
  },
  {
    "imag":e18,
    "startYear":"2022-08-26",
    "endYear":"2022-08-31",
    "title":"Skill Development Programme on Freeform Fabrication",
  },
  {
    "imag":e13,
    "startYear":"2022-08-31",
    "endYear":"2022-08-31",
    "title":"Open day Awareness programme",
  },
  {
    "imag":e19,
    "startYear":"2022-09-07",
    "endYear":"2022-09-12",
    "title":"Skilling Programme on 3D Printing",
  },
  {
    "startYear":"2022-09-13",
    "endYear":"2022-09-18",
    "title":"Skilling Programme on CO2 Laser Cutter",
  },
  {
    "startYear":"2022-09-19",
    "endYear":"2022-09-23",
    "title":"Ideation Workshop",
  },
  {
    "startYear":"2022-09-26",
    "endYear":"2022-10-01",
    "title":"FDP on Introduction to Additive Manufacturing",
  },
  {
    "startYear":"2022-10-10",
    "endYear":"2022-10-15",
    "title":"Faculty Development Programme on Internet of Things",
  },
  {
    "startYear":"2022-11-21",
    "endYear":"2022-11-26",
    "title":"Faculty Development Programme on Micro & Nano Technogies",
  },
  {
    "startYear":"2023-01-05",
    "endYear":"2023-01-10",
    "title":"Skilling Programme for Students on Layered freeform manufacturing",
  },
  {
    "startYear":"2023-01-16",
    "endYear":"2023-03-16",
    "title":"Internship on Additive Manufacturing",
  },
]


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
    <title>Events</title>
    </Head>
   <div className='flex flex-col items-center overflow-x-hidden bg-yellow-50'>
   <Header/>
   <Navbar/>
   <div className='grid lg:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto'>
    {EventsJSON.map((item,index)=>{
      return(
        <EventComponent key={index} im={item.imag} s={item.startYear} e={item.endYear} t={item.title}/>
      )
    })}
  
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

export default Events