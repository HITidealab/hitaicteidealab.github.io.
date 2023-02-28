import React, { useState ,useEffect} from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

import Image from 'next/image'

import print from "../assets/labs/print.jpg"
import wood from "../assets/labs/wood.jpg"
import pcb from "../assets/labs/pcb.jpg"
import laser from "../assets/labs/laser.jpg"
import iot from "../assets/labs/iot.jpg"
import embedded from "../assets/labs/embedded.jpg"

import Head from 'next/head'

const Labs = () => {



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
    <title>Labs</title>
    </Head>
    <div className='flex flex-col items-center overflow-x-hidden bg-yellow-50'>
   <Header/>
   <Navbar/>
   <div className='md:flex justify-center pb-20'>
      <div className='md:w-[23%] animate__animated animate__bounceInRight'>
          <p className='text-2xl font-bold uppercase text-center'>3D Printing and Scanning Lab</p>
          <div className='mx-auto w-52 my-5'>
              <Image src={print} alt='' height={500} width={500} />
                        </div>
                        <p className='md:text-left text-center text-lg'>3D printing or additive
manufacturing is the construction
of a three dimensional object from a
CAD model or a digital 3D model.
3D printers are additive
manufacturing machines that
specialize in making custom parts
with accuracy.</p>
                    </div>
                    <div className='md:w-[23%] md:mx-20 animate__animated animate__bounceIn'>
                        <p className='text-2xl font-bold uppercase text-center'>Embedded Systems Lab</p>
                        <div className='mx-auto w-52 my-5'>
                            <Image src={embedded} alt='' height={500} width={500} />
                        </div>
                        <p className='md:text-left text-center text-lg'>An embedded system is a computer
system, a combination of a computer
processor, computer memory, and
input/output peripheral devices that
has a dedicated function within a
larger mechanical or electronic
system. It is embedded as part of a
complete device often including
electrical or electronic hardware and
mechanical parts.</p>
                    </div>
                    <div className='md:w-[23%] animate__animated animate__bounceInLeft'>
                        <p className='text-2xl font-bold uppercase text-center'>IOT Lab</p>
                        <div className='mx-auto w-52 my-5'>
                            <Image src={iot} alt='' height={500} width={500} />
                        </div>
                        <p className='md:text-left text-center text-lg'>Because an embedded system typically
controls physical operations of the
machine that it is embedded within, it
often has real-time computing
constraints. Embedded systems control
many devices in common use today. In
2009, it was estimated that 98% of all
microprocessors manufactured were
used in embedded systems.
</p>
                    </div>
    </div>
    <div className='md:flex justify-center pb-20'>
      <div className='md:w-[23%] animate__animated animate__bounceInRight'>
          <p className='text-2xl font-bold uppercase text-center'>Wood Cutting CNC Lab</p>
          <div className='mx-auto w-52 my-5'>
              <Image src={wood} alt='' height={500} width={500} />
                        </div>
                        <p className='md:text-left text-center text-lg'>A CNC wood router is a CNC router tool
that creates objects from wood. The
Computer Numerical Control works on
the Cartesian coordinate system for 3D
motion control. Parts of projects can be
designed in the computer with CAD/CAM
program, and then cut automatically
using a router or other cutters to produce
a finished part. The CNC router is ideal for
engineering prototyping, product
development and production work.
</p>
                    </div>
                    <div className='md:w-[23%] md:mx-20 animate__animated animate__bounceIn'>
                        <p className='text-2xl font-bold uppercase text-center'>PCB Milling Lab</p>
                        <div className='mx-auto w-52 my-5'>
                            <Image src={pcb} alt='' height={500} width={500} />
                        </div>
                        <p className='md:text-left text-center text-lg'>A printed circuit board (PCB) is a medium used
in electrical and electronic engineering to
connect electronic components to one another
in a controlled manner. It takes the form of a
laminated sandwich structure of conductive
and insulating layers. each of the conductive
layers is designed with an artwork pattern of
traces, planes and other features etched from
one or more sheet layers.</p>
                    </div>
                    <div className='md:w-[23%] animate__animated animate__bounceInLeft'>
                        <p className='text-2xl font-bold uppercase text-center'>CO₂ Laser Cutting Lab</p>
                        <div className='mx-auto w-52 my-5'>
                            <Image src={laser} alt='' height={500} width={500} />
                        </div>
                        <p className='md:text-left text-center text-lg'>CO₂ laser cutting is a sheet metal processing technique that uses an
electrically driven gas laser. The laser cuts contours into metal sheet
material such as steel, stainless steel or aluminum. CO₂ cutting
technology is highly accurate and offers a lot of shaping freedom. This
even makes it easy to cut complex shapes.
In a CO₂ Laser Cutting Machine, the mirrors form a resonator that
builds up the light energy in the beam. On its way, it goes through a
focusing lens that concentrates the beam. The cutting head has a nozzle
in it which channels the beam onto the working piece. The focused laser
beam melts the metal</p>
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

export default Labs