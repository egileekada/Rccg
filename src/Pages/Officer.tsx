import React from 'react';
import HeaderImage from '../assets/images/HeaderImage2.png'
import Pic from '../assets/images/1.png'
import Pic2 from '../assets/images/2.png'
import Curve from '../assets/images/curve.png'
import Footer from '../components/Footer';
import GoogleMap from '../components/HomePage/GoogleMap';
import Mobile from '../assets/images/Mobile3.png' 
import Menu from '../components/Menu';
import BackToTheTopButton from '../components/BackToTheTopButton';

export default function Officer() {

    const Officers = [
        {
            image: Pic,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
        },
        {
            image: Pic,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
        },
        {
            image: Pic,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
        },
        {
            image: Pic,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
        },
        {
            image: Pic,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
        },
        {
            image: Pic,
            title: 'Pst.',
            name: 'Boniface Okenwa',
            postion: 'ACO/PICR'
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
            <div className='w-full lg:py-14 lg:px-10 relative' >
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
                                    <div className='h-auto bg-yellow-200 rounded-md' >
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
                                <img src={Pic} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>J.F. Odesola</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >Continental Overseer (CO)</p>
                        </div>
                        <div className='w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic2} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>J.F. Odesola</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >Continental Overseer (CO)</p>
                        </div>
                        <div className=' w-full lg:w-40' >
                            <div className='h-auto bg-yellow-200 rounded-md' >
                                <img src={Pic2} alt='pst' className='rounded-md' />
                            </div>
                            <p style={{color: '#28166F'}} className='font-Poppins-Medium my-1 text-sm' >Pst. <br/>J.F. Odesola</p>
                            <p style={{color: 'rgba(40, 22, 111, 0.6)'}} className='font-Poppins-Regular text-xs' >Continental Overseer (CO)</p>
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
