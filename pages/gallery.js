import React, { useState ,useEffect} from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

import g1 from "../assets/gallery/g1.jpg"
import g2 from "../assets/gallery/g2.jpg"
import g3 from "../assets/gallery/g3.jpg"
import g4 from "../assets/gallery/g4.jpg"
import g5 from "../assets/gallery/g5.jpg"
import g6 from "../assets/gallery/g6.jpg"
import g7 from "../assets/gallery/g7.jpg"
import g8 from "../assets/gallery/g8.jpg"
import g9 from "../assets/gallery/g9.jpg"
import g10 from "../assets/gallery/g10.jpg"
import g11 from "../assets/gallery/g11.JPG"
import g12 from "../assets/gallery/g12.JPG"
import g13 from "../assets/gallery/g13.JPG"
import g14 from "../assets/gallery/g14.JPG"
import g15 from "../assets/gallery/g15.jpg"
import g16 from "../assets/gallery/g16.jpg"
import g17 from "../assets/gallery/g17.JPG"
import g18 from "../assets/gallery/g18.JPG"


import c1 from "../assets/c1.jpeg"
import c2 from "../assets/c2.jpeg"
import c3 from "../assets/c3.jpeg"
import c4 from "../assets/c4.jpeg"
import c5 from "../assets/c5.jpeg"
import c6 from "../assets/c6.jpeg"

import Image from 'next/image'


import Head from 'next/head'

const Gallery = () => {


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
    <title>Gallery</title>
    </Head>
  <div className='flex flex-col items-center overflow-x-hidden bg-yellow-50'>
   <Header/>
   <Navbar/>
   <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g2}/>
        </div>
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={g3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={g4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g5}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g6}/>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 mt-2">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g7}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g8}/>
        </div>
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={g9}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={g10}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g11}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g12}/>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 mt-2">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g13}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g14}/>
        </div>
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={g15}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={g16}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g17}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={g18}/>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 mt-2">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={c1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={c2}/>
        </div>
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={c5}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" src={c3}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={c6}/>
        </div>
        <div className="md:p-2 p-1 w-1/2 scale-100 hover:scale-125 transition-all duration-500 z-10">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" src={c4}/>
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

export default Gallery