import React, { useState ,useEffect} from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loading from "../components/loading"

import Head from 'next/head'
import Image from 'next/image'

import a3 from "../assets/about/a3.jpg"
import a4 from "../assets/about/a4.jpg"
import a5 from "../assets/about/a5.jpg"
import a7 from "../assets/about/a7.jpg"
import a9 from "../assets/about/a9.jpg"
import a13 from "../assets/about/a13.jpg"
import a14 from "../assets/about/a14.jpg"
import a15 from "../assets/about/a15.jpg"
import a16 from "../assets/about/a16.jpg"
import a17 from "../assets/about/a17.jpg"
import a18 from "../assets/about/a18.jpg"
import a19 from "../assets/about/a19.jpg"
import a20 from "../assets/about/a20.jpg"
import a21 from "../assets/about/a21.jpg"
import a24 from "../assets/about/a24.jpg"
import a28 from "../assets/about/a28.jpg"
import a29 from "../assets/about/a29.jpg"
import a33 from "../assets/about/a33.jpg"
import a35 from "../assets/about/a35.jpg"
import a37 from "../assets/about/a37.jpg"
import a38 from "../assets/about/a38.jpg"
import a39 from "../assets/about/a39.jpg"
import a40 from "../assets/about/a40.jpg"
import a41 from "../assets/about/a41.jpg"
import a42 from "../assets/about/a42.jpg"
import a43 from "../assets/about/a43.jpg"
import a44 from "../assets/about/a44.jpg"
import a45 from "../assets/about/a45.jpg"
import a46 from "../assets/about/a46.jpg"
import a47 from "../assets/about/a47.jpg"

const Members2324 = () => {



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
    <div className='flex flex-col items-center overflow-x-hidden bg-yellow-50'>
        <Header />
        <Navbar />
        <div className='flex flex-col items-center justify-start pt-10 pb-20'>
            <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Committee
            </p>
        </div>
        <div className='md:flex justify-center'>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a37} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Subrata Mondal </p>
                <p className='text-center text-lg transform -translate-y-5'>Chief Mentor (Principal)</p>
            </div>
        </div>
        <div className='md:flex justify-center'>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a4} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Goutam Kr. Bose </p>
                <p className='text-center text-lg transform -translate-y-5'>Coordinator (HOD, ME)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a15} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Prof. Debadatta Ghosh</p>
                <p className='text-center text-lg transform -translate-y-5'>Co-coordinator (Associate Professor, AEIE)
                </p>
            </div>
        </div>
        <div className='md:flex justify-center'>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a17} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Sreerup Banerjee</p>
                <p className='text-center text-lg transform -translate-y-5'>Technical Guru (Associate Professor, ME)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a19} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Supriyo Roy</p>
                <p className='text-center text-lg transform -translate-y-5'>Technical Guru (Associate Professor, ME)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a3} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Ashim Halder</p>
                <p className='text-center text-lg transform -translate-y-5'>Technical Guru
                    (Assistant Professor, AEIE)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a16} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Prof. Dibyendu Chowdhury </p>
                <p className='text-center text-lg transform -translate-y-5'>Technical Guru
                    (Assistant Professor, ECE)</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-start pt-10 pb-20'>
            <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Faculty and
                Staff Sub Committee</p>
        </div>
        <div className='md:flex justify-center'>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a38} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr.Tarun Kanti Jana</p>
                <p className='text-center text-lg transform -translate-y-5'>Dean School of Engg.
                    (School of Engineerig)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a5} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Avishankar Roy</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Associate Professor, ECE)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a13} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Madhumita Das</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Assistant Professor, AEIE)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a35} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Prof. Sourav Kr. Das</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Assistant Professor, EE)</p>
            </div>
        </div>
        <div className='md:flex justify-center'>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a14} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Prof. Surajit Mukherjee</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Assistant Professor, ECE)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a9} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Dr. Soumya Roy</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Associate Professor, AEIE)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a7} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Prof. Shouvik Mondal</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Assistant Professor, EE)</p>
            </div>
            <div className='mx-8'>
                <div className='flex justify-center'>
                    <Image src={a18} height={250} width={250} alt='' />
                </div>
                <p className='text-center text-3xl font-semibold'>Prof. Pritam Pain</p>
                <p className='text-center text-lg transform -translate-y-5'>Member
                    (Assistant Professor, ME)</p>
            </div>
        </div>
        <div className='md:flex justify-center'>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a20} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Prof. Santanu Maity</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (Assistant Professor, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a21} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Mr. Soumen Roy</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (Instructor, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a33} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Mr. Mohan Patra</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (Asst. Public Relation Officer)</p>
        </div>
        </div>
    </div>
    <div className='flex flex-col items-center justify-start pt-10 pb-20 bg-yellow-50'>
        <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Student
            Ambassador</p>
    </div>
    <div className='md:flex justify-center bg-yellow-50'>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a29} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Partha Pratim Das</p>
            <p className='text-center text-lg transform -translate-y-5'>Student Ambassador
                (4th year, ME)
            </p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a24} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Priyanshu Mandal
            </p>
            <p className='text-center text-lg transform -translate-y-5'>Student Ambassador
                (4th year, ME)</p>
        </div>
    </div>
    <div className='flex flex-col items-center justify-start pt-10 pb-20 bg-yellow-50'>
        <p className='text-yellow-600 pt-12 text-4xl font-bold uppercase text-center'>HIT AICTE IDEA Lab Student Members
        </p>
    </div>
    <div className='md:flex justify-center bg-yellow-50'>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a44} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Adarsh Raj</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (4th year, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a45} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Harsh Singh Rajput</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (4th year, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a47} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Pradeep Kumar
            </p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (4th year, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a46} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Saurabh Chaudhary
            </p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (4th year, ME)</p>
        </div>
    </div>
    <div className='md:flex justify-center bg-yellow-50'>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a43} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Abhishek Kumar</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (3rd year, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a40} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Indrajeet Sen</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (3rd year, ME)</p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a41} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Rajnish Anand</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (3rd year, ME)
            </p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a42} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Sahej Tarnach</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (3rd year, ME)</p>
        </div>
        
    </div>
    <div className='md:flex justify-center bg-yellow-50'>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a39} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Sudeshnu Das</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (3rd year, ME)
            </p>
        </div>
        <div className='mx-8'>
            <div className='flex justify-center'>
                <Image src={a28} height={250} width={250} alt='' />
            </div>
            <p className='text-center text-3xl font-semibold'>Adi Nath Bhawani</p>
            <p className='text-center text-lg transform -translate-y-5'>Member
                (3rd year, CSE-AIML)</p>
        </div>
    </div>
    <div className='md:flex justify-center bg-yellow-50'>
        <div className='mx-8'>
            <div className='flex justify-center'>
            
            {/* <Button className='background-color: #3f51b5;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #283593;
  }' text = "Click to visit {'\n'} Batch of 2022-23"></Button> */}
            </div>
        </div>
    </div>
    <Footer />  
</>
)
}
else
{
return <Loading />
}
}

export default Members2324