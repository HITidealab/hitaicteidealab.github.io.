import React from 'react'
import Image from "next/image"
import loading from "../assets/updatess.gif"
// className='animate__animated animate__wobble' for div
const Loading = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center bg-yellow-50'>
            <div>
                <Image src={loading} alt="Loading" width={250} height={250} />
            </div>
        </div>
    )
}

export default Loading