import React from 'react';
import HeaderImage from '../assets/images/HeaderImage5.png'
import Curve from '../assets/images/curve.png'
import Logo from '../assets/images/transparentLogo.png'
import Footer from '../components/Footer';
import GoogleMap from '../components/HomePage/GoogleMap';
import SocialMedia from '../components/HomePage/SocialMedia';
import Mobile from '../assets/images/Mobile3.png'
import Menu from '../components/Menu';
import BackToTheTopButton from '../components/BackToTheTopButton';
import DateFormat from '../components/DateFormat';
import { addDays } from 'date-fns/esm';

export default function Devotion() {

    const NewDate = new Date()  

    return(
        <div style={{backgroundColor: '#E5E5E5'}} className=' w-screen overflow-x-hidden lg:w-full h-full ' > 
            <div className='absolute top-0 w-full z-20 lg:flex hidden ' >
                <Menu />
            </div>
            <div className='absolute top-0 w-full z-20 lg:hidden overflow-hidden ' >
                <Menu />
            </div>
                
            {/* Floating Button For Mobile View  */} 
            <BackToTheTopButton /> 

            <div className='w-auto lg:w-full flex flex-col relative justify-center items-center h-760px bg-blue-300'>
                    <img className='w-full h-760px absolute lg:flex hidden object-cover' src={HeaderImage} alt='HeaderImage' />
                    <img className='w-full h-760px absolute object-cover lg:hidden' src={Mobile} alt='Mobile' />
                <p style={{color:'#fff'}} className=' text-5xl lg:text-7xl font-Poppins-Bold relative' >Devotions</p> 
            </div>   
            <div className='w-auto lg:w-full lg:py-14 lg:px-10 ' >
                <div className='w-auto lg:w-full bg-white items-center relative justify-center lg:px-0 px-3 lg:p-12 lg:rounded-lg' > 
                    <img className='absolute h-full hidden lg:flex top-0 right-0 ' src={Curve} alt='curve' />
                    <img className='absolute bottom-0 hidden lg:flex left-0 ' src={Logo} alt='curve' />
                    <div className='lg:w-700px w-auto relative mx-auto ' > 
                        <div className=' flex items-center pt-10 justify-center' >
                            {/* <div style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className='w-12 lg:flex cursor-pointer flex items-center justify-center mr-8 h-12 rounded-full ' >
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1L1 8L8 15" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> */}
                            <div className='lg:px-6 px-2 border-r ' >
                                <p style={{color: "#BDBDBD"}} className='font-Poppins-Bold text-2xl text-center lg:text-5xl' >{addDays(NewDate, -2).getDate()}</p>
                                <p style={{color: "#3E4E5C"}} className='font-Poppins-Regular text-lg text-center'>{DateFormat(addDays(NewDate, -2))}</p>
                            </div>
                            <div className='lg:px-6 px-2 border-r ' >
                                <p style={{color: "#BDBDBD"}} className='font-Poppins-Bold text-2xl text-center lg:text-5xl' >{addDays(NewDate, -1).getDate()}</p>
                                <p style={{color: "#3E4E5C"}} className='font-Poppins-Regular lg:text-lg text-center'>{DateFormat(addDays(NewDate, -1))}</p>
                            </div>
                            <div className='lg:px-6 px-2 h-28 flex flex-col justify-center items-center ' >
                                <p style={{color: "rgba(255, 0, 0, 0.8)" }} className='font-Poppins-Bold text-center text-4xl lg:text-7xl  pt-4 border-t' >{NewDate.getDate()}</p>
                                <p style={{color: "rgba(12, 143, 59, 0.8)" }} className='font-Poppins-Regular lg:text-2xl text-center w-full pb-4 border-b'>{DateFormat(NewDate)}</p>
                            </div>
                            <div className='lg:px-6 px-2 border-r border-l ' >
                                <p style={{color: "#BDBDBD"}} className='font-Poppins-Bold text-2xl text-center lg:text-5xl' >{addDays(NewDate, +1).getDate()}</p>
                                <p style={{color: "#3E4E5C"}} className='font-Poppins-Regular lg:text-lg text-center'>{DateFormat(addDays(NewDate, +1))}</p>
                            </div>
                            <div className='lg:px-6 px-2 border-r ' >
                                <p style={{color: "#BDBDBD" }} className='font-Poppins-Bold text-2xl text-center lg:text-5xl' >{addDays(NewDate, +2).getDate()}</p>
                                <p style={{color: "#3E4E5C" }} className='font-Poppins-Regular lg:text-lg text-center'>{DateFormat(addDays(NewDate, +2))}</p>
                            </div>
                            {/* <div style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className='w-12 lg:flex ml-8 cursor-pointer h-12 rounded-full flex items-center justify-center' >
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 15L8 8L1 0.999999" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> */}
                        </div>
                        <div className='w-auto lg:w-full py-8' >
                            <p style={{fontSize: "24px"}} className='font-Poppins-Bold'>Jesus Loves You</p>
                            <p style={{color: 'rgba(71, 71, 71, 0.9)'}} className='font-Poppins-Regular mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse </p>
                            <p style={{color: 'rgba(71, 71, 71, 0.9)'}} className='font-Poppins-Regular mt-4'>consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.</p> 
                            <p style={{color: 'rgba(71, 71, 71, 0.9)'}} className='font-Poppins-Regular mt-4 z-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam,</p>
                            <p style={{color: 'rgba(71, 71, 71, 0.9)'}} className='font-Poppins-Medium mt-4'>Non hac dolor felis orci pretium.</p> 
                            <p style={{color: 'rgba(71, 71, 71, 0.9)'}} className='font-Poppins-Medium mt-4'>Non hac dolor felis orci pretium.</p> 
                        </div>
                    </div> 
                </div>
            </div> 
            {/* Social Media */}
            <div className='w-auto lg:w-full mt-8 lg:px-10' >
                <SocialMedia />
            </div> 
            {/* Google Map */}
            <div className='w-auto lg:w-full mt-14 ' >
                <GoogleMap />
            </div>
            <div className='w-auto lg:w-full' >
                <Footer />
            </div>
        </div>
    );
}
