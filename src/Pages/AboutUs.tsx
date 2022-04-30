import React from 'react';
import HeaderImage from '../assets/images/HeaderImage2.png'
import MissionAndVision from '../components/AboutUs/MissionAndVision';
import OurBeliefs from '../components/AboutUs/OurBeliefs';
import OurHistory from '../components/AboutUs/OurHistory';
import OurStructure from '../components/AboutUs/OurStructure';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Mobile from '../assets/images/mobile2.png'
import BackToTheTopButton from '../components/BackToTheTopButton';

export default function AboutUs() {

    const [tab, setTab] = React.useState(localStorage.getItem('aboutus')+'')
    React.useEffect(() => {
       setTab(localStorage.getItem('aboutus')+'')
    },[])

    return(
        <div style={{backgroundColor: '#E5E5E5'}} className=' w-screen overflow-x-hidden lg:w-full h-full ' > 
            <div className='absolute top-0 w-full z-20 lg:flex hidden ' >
                <Menu />
            </div>
            <div className='absolute top-0 w-full z-20 lg:hidden overflow-hidden ' >
                <Menu />
            </div>
            <div className='w-full flex flex-col relative justify-center items-center h-760px bg-blue-300'>
                <img className='w-full h-760px absolute lg:flex hidden object-cover' src={HeaderImage} alt='HeaderImage' />
                <img className='w-full h-760px absolute object-cover lg:hidden' src={Mobile} alt='Mobile' />
                <p style={{color:'#fff'}} className=' text-4xl lg:text-7xl font-Poppins-Bold relative' >Who we are</p> 
            </div>     
            {tab === 'History' ?
                <OurHistory />
                    :tab === 'Mission' ?
                        <MissionAndVision />
                            :tab === 'Beliefs' ?
                                <OurBeliefs />
                                    :tab === 'Structure' ?
                                        <OurStructure />
            :null}
            
            {/* Floating Button For Mobile View  */} 
            <BackToTheTopButton /> 

            <div className='w-full' >
                <Footer />
            </div>
        </div>
    ) ;
}
