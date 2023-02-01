import React, { useState ,useEffect} from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

import event from "../assets/events.png"

import Image from 'next/image'

import Head from 'next/head'

const EventComponent=({s,e,t})=>{
  return(
    <div className='flex flex-col justify-between items-center shadow-lg p-5'>
      <div className='h-[180px] w-[180px]'>
      <Image src={event}/>
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
    "startYear":"2022-05-17",
    "endYear":"2022-05-24",
    "title":"Faculty Development Programme on Additive Manufacturing & Embedded System"
  },
  {
    "startYear":"2022-05-30",
    "endYear":"2022-06-04",
    "title":"Skilling Programme for students on CNC machining with 3D Printinting"
  },
  {
    "startYear":"2022-07-04",
    "endYear":"2022-07-09",
    "title":"Faculty Development Programme on Manufacturing and Fabrication of Polymer Composite Boards"
  },
  {
    "startYear":"2022-07-25",
    "endYear":"2022-07-29",
    "title":"Skilling Programme on PCB Design and Circuit Realisation",
  },
  {
    "startYear":"2022-08-17",
    "endYear":"2022-08-17",
    "title":"Awareness Workshop for Additive Manufacturing & Embedded System",
  },
  {
    "startYear":"2022-08-25",
    "endYear":"2022-08-30",
    "title":"Faculty Development Programme on 3D Printing",
  },
  {
    "startYear":"2022-08-26",
    "endYear":"2022-08-31",
    "title":"Skill Development Programme on Freeform Fabrication",
  },
  {
    "startYear":"2022-09-01",
    "endYear":"2022-09-01",
    "title":"Open day Awareness programme",
  },
  {
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
   <div className='flex flex-col items-center overflow-x-hidden'>
   <Header/>
   <Navbar/>
   <div className='grid lg:grid-cols-3 md3:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto'>
    {EventsJSON.map((item,index)=>{
      return(
        <EventComponent key={index} s={item.startYear} e={item.endYear} t={item.title}/>
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