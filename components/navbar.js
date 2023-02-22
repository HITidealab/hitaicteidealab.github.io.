import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {

    const router=useRouter()


  return (
    <>
    <div className='flex xs:w-[95%] justify-evenly mb-10 items-center md2:text-xl xs:text-[12px] text-[8px] mt-2 bg-blue-800 uppercase'>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white' onClick={()=>{router.push("/")}}>Home</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white' onClick={()=>{router.push("/aboutus")}}>About Us</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/members")}}>Members</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/labs")}}>Labs</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/events")}}>Events</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/industries")}}>Industry Connect</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/gallery")}}>Gallery</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/gallery")}}>Registration</h1>
    <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/form")}}>Query</h1> 
    {/* <h1 className='hover:bg-white hover:text-blue-500 xs:py-5 py-2 xs:px-3 px-2 cursor-pointer text-center text-white'  onClick={()=>{router.push("/query")}}>Form</h1> */}
  </div>
  </>
  )
}

export default Navbar