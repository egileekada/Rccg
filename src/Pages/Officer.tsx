import React from 'react';
import HeaderImage from '../assets/images/HeaderImage2.png'
import Pic from '../assets/images/1.png'
import Pic2 from '../assets/images/2.png'
import Pic3 from '../assets/images/3.png'
import Pic4 from '../assets/images/4.png'
import Pic5 from '../assets/images/5.png'
import Pic6 from '../assets/images/6.png'
import Pic7 from '../assets/images/7.png'
import Pic8 from '../assets/images/8.png'
import Pic9 from '../assets/images/9.png'
import Pic10 from '../assets/images/10.png'
import Pic11 from '../assets/images/11.png'
import Pic12 from '../assets/images/12.png'
import Pic13 from '../assets/images/13.png'
import Pic14 from '../assets/images/14.png'
import Pic15 from '../assets/images/15.png'
import Pic16 from '../assets/images/16.png'
import Pic17 from '../assets/images/17.png'
import Pic18 from '../assets/images/18.png'
import Pic19 from '../assets/images/19.png'
import Pic20 from '../assets/images/20.png'
import Pic21 from '../assets/images/21.png'
import Pic22 from '../assets/images/22.png'
import Pic23 from '../assets/images/23.png'
import Pic24 from '../assets/images/24.png'
import Pic25 from '../assets/images/25.png'
import Pic26 from '../assets/images/26.png'
import Pic27 from '../assets/images/27.png'
import Curve from '../assets/images/curve.png'
import Footer from '../components/Footer';
import GoogleMap from '../components/HomePage/GoogleMap';
import Mobile from '../assets/images/Mobile3.png' 
import Menu from '../components/Menu';
import BackToTheTopButton from '../components/BackToTheTopButton';

export default function Officer() {

    const Officers = [
        {
            image: Pic3,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
        }, 
        {
            image: Pic4,
            title: 'Pst.',
            name: 'Olujimi Ajibade ',
            postion: 'ACO/PICR'
        },
        {
            image: Pic5,
            title: 'Pst.',
            name: 'Richard Adeboye',
            postion: 'PICR'
        },
        {
            image: Pic6,
            title: 'Pst. ',
            name: '(Mrs.) Sola Balogun ',
            postion: 'ACO (Junior Church)'
        },
        {
            image: Pic7,
            title: 'Pst.',
            name: '(Mrs.) Deola Mensah ',
            postion: 'ACO (Protocols)'
        },
        {
            image: Pic8,
            title: 'Pst.',
            name: 'Okey Mofunnanya ',
            postion: 'ACO'
        }, 
        {
            image: Pic9,
            title: 'Pst.',
            name: 'Efema Akioya ',
            postion: 'SATCO'
        },
        {
            image: Pic10,
            title: 'Pst.',
            name: 'Goke AjayI',
            postion: 'SATCO'
        },
        {
            image: Pic11,
            title: 'Pst.',
            name: 'Johnson Adediran ',
            postion: 'PICR'
        },
        {
            image: Pic12,
            title: 'Pst.',
            name: 'Charles Kpandei',
            postion: 'PICR'
        },
        {
            image: Pic13,
            title: 'Pst.',
            name: 'Tunde Abdulahi ',
            postion: 'PICR'
        },
        {
            image: Pic14,
            title: 'Pst.',
            name: 'Charles Adegboyega Obasa',
            postion: 'PICR'
        },
        {
            image: Pic15,
            title: 'Pst.',
            name: 'Goke Kuti ',
            postion: 'PICR'
        },
        {
            image: Pic16,
            title: 'Pst.',
            name: 'Nat Adejuwon',
            postion: 'PICR'
        },
        {
            image: Pic17,
            title: 'Pst.',
            name: 'Bisi Akande',
            postion: 'SENIOR PERSONAL ASSISTANT TO CO'
        }, 
        {
            image: Pic18,
            title: 'Pst.',
            name: 'Toyin Olugbemi',
            postion: 'PERSONAL ASSISTANT TO CO ON CRFI'
        },
        {
            image: Pic8,
            title: 'Pst.',
            name: 'Precious Akingbade',
            postion: 'PERSONAL ASSISTANT TO CO'
        },
        {
            image: Pic19,
            title: 'Pst.',
            name: 'Sola Owoeye',
            postion: 'PERSONAL ASSISTANT TO CO'
        },
        {
            image: Pic20,
            title: 'Pst.',
            name: 'Olooluwa Abioye',
            postion: 'PERSONAL ASSISTANT TO CO '
        },
        {
            image: Pic8,
            title: 'Pst.',
            name: 'Sunday Olasoju',
            postion: 'PERSONAL ASSISTANT TO CO'
        }, 
        {
            image: Pic21,
            title: 'Pst.',
            name: 'Amos Emovon',
            postion: 'PERSONAL ASSISTANT TO CO '
        },
        {
            image: Pic22,
            title: 'Pst.',
            name: 'Seun Adebayo',
            postion: 'CONTINENTAL ADMINISTRATOR'
        },
        {
            image: Pic8,
            title: 'Pst.',
            name: '...',
            postion: 'CONTINENTAL MUSIC DIRECTOR'
        },
        {
            image: Pic23,
            title: 'Pst.',
            name: 'Adetola Akinremi',
            postion: 'CONTINENTAL CSR COORDINATOR'
        }, 
        {
            image: Pic24,
            title: 'Pst.',
            name: 'Joseph Adeyokunnu',
            postion: 'CONTINENTAL FINANCE COORDINATOR '
        },
    ]

    return(
        <div style={{backgroundColor: '#E5E5E5'}} className=' w-screen overflow-x-hidden lg:bg-transparent bg-white lg:w-full h-full ' > 
            <div className='absolute top-0 w-full z-20 lg:flex hidden ' >
                <Menu />
            </div>
            <div className='absolute top-0 w-full z-20 lg:hidden overflow-hidden ' >
                <Menu />
            </div>
            
            {/* Floating Button For Mobile View  */} 
            <BackToTheTopButton /> 

            <div className='w-full flex flex-col relative justify-center items-center h-760px bg-blue-300'>
                <img className='w-full h-760px absolute lg:flex hidden object-cover' src={HeaderImage} alt='HeaderImage' />
                <img className='w-full h-760px absolute object-cover lg:hidden' src={Mobile} alt='Mobile' />
                <p style={{color:'#fff'}} className=' text-5xl text-center lg:text-left lg:text-7xl font-Poppins-Bold relative' >Officers</p>
                <p style={{color:'#fff'}} className=' lg:text-lg mt-2 font-Poppins-Regular relative ' >CONTINENTAL / REGIONAL & PROVINCIAL</p>
            </div>  
            <div className='w-full lg:py-14 lg:px-10 px-6 relative' >
                <div className='w-full flex flex-col relative items-center lg:pt-0 pt-12 justify-center bg-white lg:p-12 lg:rounded-lg' > 
                    <img className='absolute hidden lg:flex h-630px my-auto right-0 ' src={Curve} alt='curve' />
                    <p style={{color:'#140457'}} className=' text-lg lg:text-2xl text-center lg:w-100 mx-auto font-Poppins-SemiBold' >RCCG AFRICA CONTINENT 3 (SOUTHWEST,NIGERIA/MIDDLE EAST)</p>
                    <div className='flex items-center py-10 ' >
                        <div className='mx-6 w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>J.F. Odesola</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >Continental Overseer (CO)</p>
                        </div>
                        <div className='mx-6 w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic2} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>J.F. Odesola</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >Continental Overseer (CO)</p>
                        </div>
                    </div> 
                    <div className=' grid grid-cols-2 lg:grid-cols-5 gap-4 relative' > 
                        {Officers.map((item: any, index: any) => {
                            return( 
                                <div key={index} className=' w-full lg:w-40' >
                                    <div className='h-auto rounded-md' >
                                        <img src={item.image} alt='pst' className='rounded-md' />
                                    </div>
                                    <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >{item.title} <br/>{item.name}</p>
                                    <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >{item.postion}</p>
                                </div>
                            )
                        })}
                    </div> 
                    <p style={{color:'#140457'}} className=' text-lg lg:text-2xl text-center mt-20 lg:w-100 mx-auto font-Poppins-SemiBold' >INTERCONTINENTAL OFFICERS WITHIN AFRICA 3</p>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 py-10 pb-16 ' >
                        <div className='w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic25} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>Joseph Adeyokunnu</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >INTERCONTINENTAL OFFICER</p>
                        </div>
                        <div className='w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic26} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>Brown Oyitso</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >INTERCONTINENTAL OFFICER</p>
                        </div>
                        <div className=' w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic27} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>Idowu Iluyomade</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >INTERCONTINENTAL OFFICER</p>
                        </div>
                    </div> 
                </div> 
            </div> 
            {/* Google Map */}
            <div className='w-full lg:mt-4' >
                <GoogleMap />
            </div>
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    );
}
