import React from 'react'; 
import Photo from '../assets/images/Pastor.png'
import SideImage from '../assets/images/sideImage.png'
import HeaderImage from '../assets/images/HeaderImage.png'
import Mobile from '../assets/images/mobile.png'
import Curve from '../assets/images/curve.png'
import SocialMedia from '../components/HomePage/SocialMedia';
import GoogleMap from '../components/HomePage/GoogleMap';
import Announcement from '../components/HomePage/Announcement';
import Activties from '../components/HomePage/Activities';
import Footer from '../components/Footer'; 
import PodCast from '../components/HomePage/PodCast';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu'; 
import BackToTheTopButton from '../components/BackToTheTopButton';

export default function HomePage() {

    const navigate = useNavigate()  

    return (
        <div style={{backgroundColor: '#E5E5E5'}} className=' w-full overflow-x-hidden lg:w-full h-full ' > 
            <div className='absolute top-0 w-full z-20 lg:flex hidden ' >
                <Menu />
            </div>
            <div className='absolute top-0 w-full z-20 lg:hidden overflow-hidden ' >
                <Menu />
            </div>
            <div className=' w-auto lg:w-full flex flex-col relative justify-center items-center h-760px bg-blue-300'>
                <img className='w-full h-760px absolute lg:flex hidden object-cover' src={HeaderImage} alt='HeaderImage' />
                <img className='w-full h-760px absolute object-cover lg:hidden' src={Mobile} alt='Mobile' />
                <p style={{color:'#fff'}} className=' text-5xl text-center font-Poppins-Bold relative leading-tight' >Love as always in our time</p>
                <p style={{color:'#fff'}} className=' text-lg mt-5 lg:mt-2 font-Poppins-Regular relative ' >Ministers Annual Convention</p>
            </div>  
            <div className='w-full lg:pt-6' >

                {/* Welcome Speech */}
                <div className='w-auto flex-col lg:flex-row flex items-center lg:mx-10 bg-white lg:my-14 lg:rounded-lg' >
                    <div className='flex flex-col justify-center pt-14 lg:pt-0 p-2 lg:p-10 items-center' >
                        <img className=' w-36 h-36 lg:w-56 lg:h-56 rounded-full' src={Photo} alt='pastor' />
                        <p style={{color:'#140457'}} className=' text-xl font-Poppins-SemiBold mt-4 text-center' >Pst. Johnson Funso Odesola</p>
                        <p style={{color:'rgba(40, 22, 111, 0.6)'}} className=' font-Poppins-Regular text-center' >Continental Overseer</p>
                    </div>
                    <div className='flex relative flex-col flex-1 p-4 lg:p-10 lg:ml-12' >
                        <img className='absolute h-full top-0 hidden lg:flex right-0' src={Curve} alt='pastor' />
                        <p style={{color:'#140457'}} className=' text-2xl z-30 font-Poppins-SemiBold' >Welcome Speech</p>
                        <p style={{color:'rgba(71, 71, 71, 0.8)'}} className='z-30  font-Poppins-Regular mt-2 text-justify' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.</p>
                        <p style={{color:'rgba(71, 71, 71, 0.8)'}} className='z-30  font-Poppins-Regular mt-2 text-justify' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.</p>
                        <p style={{color:'rgba(71, 71, 71, 0.8)'}} className='z-30  font-Poppins-Regular mt-2 text-justify' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.</p>
                    </div>
                </div>

                {/* Floating Button For Mobile View  */} 
                <BackToTheTopButton /> 
                
                {/* PodCast */}
                <div className=' w-auto lg:w-full my-14 px-6 lg:px-40' >
                    <PodCast />
                </div> 

                {/* First Timer, Testimony and etc  */}
                <div className=' w-auto lg:w-full my-14 px-2 lg:px-10' >
                    <Activties />
                </div> 

                {/* Announcement */}
                <div className=' w-auto lg:w-full my-14 lg:px-10' >
                    <Announcement />
                </div> 
                
                {/* Contact Us  */}
                <div className=' w-auto lg:w-full flex items-center bg-white py-10 relative my-14 ' >
                    <img className='w-full h-full  absolute hidden lg:flex top-0' src={SideImage} alt='pastor' />
                    <div className='flex relative flex-col flex-1 p-5 lg:py-0 py-14 lg:p-10 lg:ml-12' >  
                        <p style={{color:'#140457'}} className=' text-3xl z-30 lg:text-left text-center font-Poppins-SemiBold' >You Can Talk to Someone no matter what the challenge is.</p> 
                        <p style={{color:'rgba(71, 71, 71, 0.8)'}} className='z-30  font-Poppins-Regular my-4 text-justify' >There are competent & Spirit filled Counsellors, Pastors & Ministers willing to speak with you at any time. Don't keep it all in, speak to someone now.</p> 
                        <button onClick={()=> navigate('/aboutus')} style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-44 rounded-md'>Speak with us</button>
                    </div>
                    <div className=' hidden lg:flex w-100 h-full flex bg-blue-200 justify-center items-center' > 
                        
                    </div>
                </div>

                {/* Social Media */}
                <div className=' w-auto lg:w-full my-14 lg:px-10' >
                    <SocialMedia />
                </div>

                {/* Google Map */}
                <div className=' w-auto lg:w-full mt-14 ' >
                    <GoogleMap />
                </div>
                <div className=' w-auto lg:w-full' >
                    <Footer />
                </div>
            </div>
        </div>
    );
}
