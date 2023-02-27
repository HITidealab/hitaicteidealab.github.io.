import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Head from 'next/head'

const Registration = () => {
  return (
    <>
    <Head>
      Query
    </Head>
    <div className='flex flex-col items-center overflow-x-hidden'>
   <Header/>
   <Navbar/>
   <Footer/>
   </div>
   </>
  )
}

export default Registration