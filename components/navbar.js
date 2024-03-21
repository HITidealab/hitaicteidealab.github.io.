import React from 'react'
import { useRouter } from 'next/router'
import { Dropdown, Space } from 'antd';

const Navbar = () => {

    const router=useRouter()


  return (
    <>
    {/* onClick={()=>{router.push("/industries")}} */}
    <div className='flex xs:w-[95%] justify-evenly mb-10 items-center md2:text-xl xs:text-[12px] text-[8px] mt-2 bg-blue-800 uppercase'>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white' onClick={()=>{router.push("/")}}>Home</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white' onClick={()=>{router.push("/aboutus")}}>About Us</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/members2324")}}>Members</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/labs")}}>Labs</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/events")}}>Events</h1>
    <a className='text-white' href={"https://firebasestorage.googleapis.com/v0/b/idea-lab-1d103.appspot.com/o/industry%20connect%20AICTE%20HIT%20Idea%20Lab.pdf?alt=media&token=61457dcb-e824-417c-89c9-605a2efcbd1e"} target={"_blank"} rel={"noreferrer"}><h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  >Industry Connect</h1></a>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/gallery")}}>Gallery</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/Registration")}}>Registration</h1>
    {/* <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/query")}}>Form</h1> */}
  </div>
 
  </>
  )
}

export default Navbar