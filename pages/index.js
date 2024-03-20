import React, { useState ,useEffect} from 'react'

import Head from 'next/head'
import Marquee from 'react-fast-marquee'

import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

const Index = () => {

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
      <title>Home</title>
    </Head>
    <div className='flex flex-col items-center justify-start overflow-x-hidden bg-yellow-50'>
      <Header/>
      <Navbar/>
      <div>
      <iframe width="1600" height="880" src="https://www.youtube.com/embed/-ITqDmQ3u7k?autoplay=1&loop=1&playlist=-ITqDmQ3u7k&controls=0&mute=1" allow="autoplay; encrypted-media"  allowfullscreen></iframe>
      </div>
      <Marquee speed={100} direction="left" className="w-[95%] pt-[8px] bg-gray-300 rounded border border-gray-500 my-8 h-[40px]"><a className='text-black font-bold text-2xl' href={"https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/IDEA%20Lab%20Newsletter%20Final%20Draft.pdf?alt=media&token=8451387b-43b2-48ed-b5b8-920b83d005b5"} target={"_blank"} rel={"noreferrer"}>NEWS LETTER - 1ST EDITION </a><a className='text-black font-bold text-2xl ml-[604px]' href={"https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/nwes%20lette4r%202nd%20ed.pdf?alt=media&token=cf48768d-61b1-4c41-81e3-cab829b64d5a"} target={"_blank"} rel={"noreferrer"}>NEWS LETTER - 2ND EDITION </a><a className='text-black font-bold text-2xl ml-[604px]' href={"https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/AICTE%20HIT%20IDEA%20Lab%20Newsletter%203rd%20ed.pdf?alt=media&token=1f4b2eb7-c1cd-4d47-8e20-7102a6405ed4"} target={"_blank"} rel={"noreferrer"}>NEWS LETTER - 3RD EDITION </a></Marquee>
      <div className='flex justify-between items-start mt-5 3xl:mx-60 lg2:mx-20 mx-5'>
        <div className='lg2:w-[20%] w-[22%] pr-10'>
          <h1 className='lg2:text-3xl md3:text-xl text-[10px] font-extrabold'>Quick Links</h1>
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
        <div className='3xl:w-[40%] w-[52%]'>
          <h1 className='lg2:text-3xl md3:text-xl text-[12px] text-blue-900 font-extrabold'>
            Welcome To HIT-AICTE IDEA LAB
          </h1>
          <div className='border-b border-black w-full mb-6'></div>
          <p>AICTE-IDEA (Idea Development, Evaluation & Application) Labs are being established across the country for encouraging students for application of science, technology engineering and mathematics (STEM) fundamentals towards enhanced hands-on experience, learning by doing and even product visualization. As a common facility embedded in the institution, the IDEA Lab will make engineering graduates more imaginative and creative, besides getting basic training in the 21st century skills like- critical thinking, problem solving, design thinking, collaboration, communication, lifelong learning etc. IDEA Lab can empower the students and faculty to “engage, explore, experience, express and excel”, addressing the need of new age learning. IDEA Lab would serve as an infrastructure for faculty to take up and promote multidisciplinary education and research. Accordingly, faculty would be encouraged to get trained in these Labs and strive for creating problems/ projects/ internships in their own subjects/ disciplines and mentor the students.<br/>
IDEA Lab will provide all facilities under one roof, for conversion of an idea into a prototype. The idea need not be always be new (which will always be encouraged) but the emphasis would be on graduating engineers working with their hands using equipment, tools and consumables (listed in the Scheme Document). With these facilities available 24x7 in the campus, more students and faculty will be encouraged to take up creative work and in the process, get training on creative thinking, problem solving, collaboration etc. which conventional labs are not focussing on.<br/> The focus will be on training students so that they become imaginative and creative and stay so at the workplaces they join. The ultimate objective is to transform engineering education with such a Lab in all colleges and for this they must proactively expose all students to the IDEA Lab, organize training sessions for interested students as well as support projects and by providing online learning materials.</p>
          <div className='bg-gray-200 h-32'>
            <Marquee speed={100} direction="up" className="h-full text-center px-10 font-bold">SDP for Industry Personels<br/>SDP for Students<br/>Upcoming Events</Marquee>
          </div>
        </div>
        <div className='lg2:w-[20%] w-[22%]'>
          <h1 className='lg2:text-3xl md3:text-xl text-[10px] font-extrabold'>Notice</h1>
          <div className='border-b border-black mb-10'></div>
          <p>02/02/2023 - Inauguration of news letter and official website</p>
          <p>16/01/2023 - Winter Internship </p>
        </div>
      </div>
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden mx-auto p-2 flex items-end justify-start relative mt-5 h-[600px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.4801527541637!2d88.07153477477623!3d22.052632165465308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f1bd905363a7%3A0x83a7ec4e6dd85f8e!2sJAGADISH%20CHANDRA%20BOSE%20INNOVATION%20AND%20RESEARCH%20CENTRE%26%20HIT%20AICTE%20IDEA%20LAB!5e0!3m2!1sen!2sin!4v1675260235450!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

export default Index