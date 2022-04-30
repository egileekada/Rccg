import React from 'react';
import GeneralOverSeer from '../../assets/images/Gos.png'

export default function PodCast() {
    return(
        <div style={{background: 'linear-gradient(180deg, #0F0050 0%, #2A1876 100%)'}} className='py-8 px-8 rounded-lg lg:flex-row flex-col flex items-centers' >
            <div className=' w-full flex lg:flex-row flex-col flex lg:items-center' >
                <img src={GeneralOverSeer} alt='Gos' className=' w-24 h-24 rounded-full' />
                <div className='lg:ml-4' >
                    <p style={{color: 'rgba(255, 255, 255, 0.6)'}} className='font-Poppins-Regular text-sm' >G.O’s PODCAST</p>
                    <p className='font-Poppins-Bold text-xl text-white mt-1' >Pastor E.A. Adeboye's Podcasts</p>
                </div> 
            </div>
            <div style={{borderColor: 'rgba(255, 255, 255, 0.5)'}} className=' w-full flex flex-col justify-center lg:border-l lg:pl-6 ' > 
                <div className='w-full flex lg:flex-col flex-col-reverse' >
                    <div className='lg:ml-auto flex items-center' >
                        <button style={{fontSize: '10px'}} className='w-14 h-6 flex justify-center items-center rounded-lg border text-white ' >PREV</button>
                        <button style={{fontSize: '10px'}} className='w-14 h-6 flex justify-center items-center rounded-lg border text-white ml-6 ' >NEXT</button>
                    </div>
                        <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className='font-Poppins-Regular text-sm my-4 lg:my-0' >Podcast Title...</p> 
                </div>
            </div>
        </div>
    );
}
