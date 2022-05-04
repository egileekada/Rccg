import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import GoogleMap from '../components/HomePage/GoogleMap';
import Mobile from '../assets/images/GivingHeader.png'
import Desktop from '../assets/images/forest.jpg'

export default function OnlineGiving() {

    const navigate = useNavigate() 
    
    return(
        <div className='w-full bg-white relative' >
            <div className='w-full h-100 bg-blue-200  relative ' >
                <div className='w-12 absolute z-30 h-12 p-7 lg:p-16' > 
                    <div onClick={()=> navigate('/')} style={{backgroundColor: '#FFFFFF'}} className='w-12 h-12   rounded-full cursor-pointer flex justify-center items-center' >
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>   
                </div>
                <div className='w-full h-full flex justify-center items-center relative z-20' >
                    <p  className=' text-2xl text-center text-white font-Poppins-SemiBold' >Give Online</p>
                </div>
                <img className='w-screen h-100 absolute z-10 object-cover top-0 lg:flex hidden' src={Desktop} alt='Mobile' />
                <img className='w-screen h-100 absolute z-10 object-cover top-0 lg:hidden' src={Mobile} alt='Mobile' />
            </div>
            <div className='w-full flex flex-col py-12 p-7 lg:p-16 lg:py-6 relative items-center justify-center bg-white lg:px-12 rounded-lg' >   
                <div className='font-Poppins-Regular text-lg lg:w-104 pt-8' >
                    <p style={{fontStyle: 'italic'}}>In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: ‘It is more blessed to give than to receive.’”</p>
                    <div className='flex items-center pl-2 py-6' >
                        <div style={{backgroundColor: '#28166F'}} className='w-2 mr-4 h-2 rounded-full' />
                        <p style={{color: '#28166F', fontStyle: 'italic'}}>Acts 20:35</p>
                    </div> 
                    <p style={{color: '#28166F'}} className='text-xl font-Poppins-SemiBold mt-10' >Bank Transfer</p>
                    <p style={{color: '#262F56'}} className='text-sm font-Poppins-Regular mt-2'>Give by direct transfer to any of our accounts below:</p>
                </div>
            </div>
            {/* Google Map */}
            <div className=' w-auto lg:w-full mt-14 ' >
                <GoogleMap />
            </div>
            <div className=' w-auto lg:w-full' >
                <Footer />
            </div>
        </div>
    )
}
