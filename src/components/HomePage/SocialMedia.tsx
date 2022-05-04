import React from 'react';
import CurveColor from '../../assets/images/SocialMedia.png'
import Youtube from '../../assets/images/youtube.png'
import Dove from '../../assets/images/Dove.png'

export default function SocialMedia() {
    return ( 
        <div style={{backgroundColor: '#28166F'}} className='w-full h-630px lg:rounded-lg relative flex items-center' >
            <div className='w-full h-full flex flex-col justify-center lg:items-center relative lg:pl-10 px-4 lg:px-0 lg:pr-4' >
                <p className=' text-3xl text-white font-Poppins-Bold' >Social Media</p>
                <div className=' w-full grid grid-cols-2 lg:grid-cols-3 gap-4 z-30 mt-14' >
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                    <div className='w-full p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                        <div className=' w-14 w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                            <img className='w-full' src={Youtube} alt='youtube' />
                        </div>
                        <div className='ml-4' >
                            <p className=' text-xs text-white font-Poppins-Regular' >YOUTUBE</p>
                            <p className=' text-xs text-white font-Poppins-Medium' >Africa-3</p>
                        </div>
                    </div>
                </div>
            <img className='absolute bottom-0 lg:px-20 right-1 lg:right-2' src={Dove} alt='dove' /> 
            </div> 
            <div className='w-full hidden lg:flex' />
            <img className='absolute hidden lg:flex pl-5 right-0 h-full' src={CurveColor} alt='curve' /> 
        </div>
    );
}
