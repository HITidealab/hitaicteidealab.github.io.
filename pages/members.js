import React, { useState ,useEffect} from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

import Head from 'next/head'
import Image from 'next/image'

import a1 from "../assets/about/a1.jpg"
import a2 from "../assets/about/a2.jpg"
import a3 from "../assets/about/a3.jpg"
import a4 from "../assets/about/a4.jpg"
import a5 from "../assets/about/a5.jpg"
import a7 from "../assets/about/a7.jpg"
import a9 from "../assets/about/a9.jpg"
import a10 from "../assets/about/a10.jpg"
import a11 from "../assets/about/a11.jpg"
import a12 from "../assets/about/a12.jpg"
import a13 from "../assets/about/a13.jpg"
import a14 from "../assets/about/a14.jpg"
import a15 from "../assets/about/a15.jpg"
import a16 from "../assets/about/a16.jpg"
import a17 from "../assets/about/a17.jpg"
import a18 from "../assets/about/a18.jpg"
import a19 from "../assets/about/a19.jpg"
import a20 from "../assets/about/a20.jpg"
import a21 from "../assets/about/a21.jpg"
import a23 from "../assets/about/a23.jpg"
import a24 from "../assets/about/a24.jpg"
import a25 from "../assets/about/a25.jpg"
import a26 from "../assets/about/a26.jpg"
import a27 from "../assets/about/a27.jpg"
import a28 from "../assets/about/a28.jpg"
import a29 from "../assets/about/a29.jpg"
import a30 from "../assets/about/a30.jpg"
import a31 from "../assets/about/a31.jpg"
import a33 from "../assets/about/a33.jpg"
import a34 from "../assets/about/a34.jpg"
import a35 from "../assets/about/a35.jpg"
import a36 from "../assets/about/a36.jpg"
import a37 from "../assets/about/a37.jpg"


const Members = () => {



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
      <title>Members</title>
    </Head>
    <div className='flex flex-col items-center overflow-x-hidden'>
   <Header/>
   <Navbar/>
                <div className='flex flex-col items-center justify-start pt-10 pb-20'>
                    <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Committee</p>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a37} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Subrata Mondal </p>
                        <p className='text-center text-lg transform -translate-y-5'>Chief Mentor (Principal)</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a4} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Goutam Kr. Bose </p>
                        <p className='text-center text-lg transform -translate-y-5'>Coordinator (HOD, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a15} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Debadatta Ghosh</p>
                        <p className='text-center text-lg transform -translate-y-5'>Co-coordinator (Associate Professor, AEIE)</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a17} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Sreerup Banerjee</p>
                        <p className='text-center text-lg transform -translate-y-5'>Technical Guru (Associate Professor, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a19} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Supriyo Roy</p>
                        <p className='text-center text-lg transform -translate-y-5'>Technical Guru (Associate Professor, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a3} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Ashim Halder</p>
                        <p className='text-center text-lg transform -translate-y-5'>Technical Guru
(Assistant Professor, AEIE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a16} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Dibyendu Chowdhury </p>
                        <p className='text-center text-lg transform -translate-y-5'>Technical Guru
(Assistant Professor, ECE)</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a5} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Avishankar Roy</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Associate Professor, ECE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a13} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Madhumita Das</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Assistant Professor, AEIE)
</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a35} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Sourav Kr. Das</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Assistant Professor, EE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a14} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Surajit Mukherjee</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Assistant Professor, ECE)
</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a9} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Dr. Soumya Roy </p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Associate Professor, AEIE)
</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a7} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Shouvik Mondal</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Assistant Professor, EE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a18} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Pritam Pain</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Assistant Professor, ME)
</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a20} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Prof. Santanu Maity</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Assistant Professor, ME)</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a21} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Mr. Soumen Roy</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Instructor, ME)
</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a33} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Mr. Mohan Patra</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(Asst. Public Relation Officer)</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-start pt-10 pb-20'>
                    <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Student Ambassador</p>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a12} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Souparna Majumdar</p>
                        <p className='text-center text-lg transform -translate-y-5'>Student Ambassador
(4th year, ME)
</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a11} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Suhrit Panda
</p>
                        <p className='text-center text-lg transform -translate-y-5'>Student Ambassador
(4th year, ME)</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-start pt-10 pb-20'>
                    <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Student Members</p>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a34} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Gourab Sinha Mahapatra </p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(4th year, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a10} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Himanshu Das</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(4th year, ME)
</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a1} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Kaustav Ghosh</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(4th year, ECE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a2} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Monishita Chakraborty</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(4th year, EE)
</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a23} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Susmit De </p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(4th year, AEIE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a36} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Rajarshi Mukherjee</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(4th year, ECE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a29} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Partha Pratim Das</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(3rd year, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a24} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Priyanshu Mondal
</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(3rd year, ME)</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a26} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Soumyadip Samanta</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(3rd year, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a27} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Soumava Bhanja</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(3rd year, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a25} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Sreejit Paul</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(3rd year, ME)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a31} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Sohan Adak</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(3rd year, EE)</p>
                    </div>
                </div>
                <div className='md:flex justify-center'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a28} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>Adi Nath Bhawani</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(2nd year, ECE)</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image  src={a30} height={250} width={250} alt='' />
                        </div>
                        <p className='text-center text-3xl font-semibold'>DiΠakar Nath
</p>
                        <p className='text-center text-lg transform -translate-y-5'>Member
(2nd year, EE)</p>
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

export default Members