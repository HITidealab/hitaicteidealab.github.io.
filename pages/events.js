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
// import e15 from "../assets/event_banners/15.jpg"
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
import e30 from "../assets/event_banners/30.png"

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
    "title":"Skilling Programme for students on CNC machining with 3D Printing"
  },
  {
    "imag":e14,
    "startYear":"2022-06-06",
    "endYear":"2022-06-11",
    "title":"Staff Development Programme on PCB Design and Circuit Realization"
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
    "imag":e20,
    "startYear":"2022-09-13",
    "endYear":"2022-09-18",
    "title":"Skilling Programme on CO2 Laser Cutter",
  },
  {
    "imag":e9,
    "startYear":"2022-09-19",
    "endYear":"2022-09-23",
    "title":"Ideation Workshop",
  },
  {
    "imag":e5,
    "startYear":"2022-09-26",
    "endYear":"2022-10-01",
    "title":"FDP on Introduction to Additive Manufacturing",
  },
  {
    "imag":e6,
    "startYear":"2022-10-10",
    "endYear":"2022-10-15",
    "title":"Faculty Development Programme on Internet of Things",
  },
  {
    "imag":e21,
    "startYear":"2022-10-17",
    "endYear":"2022-10-22",
    "title":"Skill Development Programme for students on Internet of Things",
  },
  {
    "imag":e10,
    "startYear":"2022-11-07",
    "endYear":"2022-11-12",
    "title":"Ideation Workshop 'Aerothon' (Drone Making)",
  },
  {
    "imag":e7,
    "startYear":"2022-11-21",
    "endYear":"2022-11-26",
    "title":"Faculty Development Programme on Micro & Nano Technogies",
  },
  {
    "imag":e22,
    "startYear":"2023-01-05",
    "endYear":"2023-01-10",
    "title":"Skilling Programme for Students on Layered freeform manufacturing",
  },
  {
    "imag":e1,
    "startYear":"2023-02-21",
    "endYear":"2023-02-27",
    "title":"Skilling Programme on Designing to Prototyping",
  },
  {
    "imag":e24,
    "startYear":"2023-03-25",
    "endYear":"2023-03-31",
    "title":"Skill Development Programme for Students on Design and Development of Drone with AI",
  },
  {
    "imag":e11,
    "startYear":"2023-01-16",
    "endYear":"2023-03-16",
    "title":"Internship on Additive Manufacturing",
  },
  {
    "imag":e25,
    "startYear":"2023-05-02",
    "endYear":"2023-05-06",
    "title":"Skill Development Programme for Students on Building with 3D printing",
  },
  {
    "imag":e23,
    "startYear":"2023-06-05",
    "endYear":"2023-06-10",
    "title":"Skill Development Programme for Students on Building with 3D printing",
  },
  {
    "imag":e8,
    "startYear":"2023-06-12",
    "endYear":"2023-06-17",
    "title":"Faculty Development Programme on Electronic Application Design",
  },
  {
    "imag":e26,
    "startYear":"2023-06-19",
    "endYear":"2023-06-24",
    "title":"Skill Development Programme for Students on Designing of PCB for Product Development",
  },
  {
    "imag":e29,
    "startYear":"2023-06-12",
    "endYear":"2023-06-24",
    "title":"Professional Skilling Programme for ITI Students",
  },
  {
    "imag":e27,
    "startYear":"2023-07-31",
    "endYear":"2023-08-05",
    "title":"Skill Development Programme for Students on 3D Printing & 3D Scanning",
  },
  {
    "imag":e28,
    "startYear":"2023-08-16",
    "endYear":"2023-08-22",
    "title":"Skill Development Programme for Students on 3D Printing & 3D Scanning",
  },
  {
    "imag":e30,
    "startYear":"2024-02-03",
    "endYear":"2024-01-29",
    "title":"Faculty Development Program on Application Developments in the Lab on a Chip Technology for Fluid and Thermal Sciences",
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