import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import { Textarea } from '@chakra-ui/textarea';
import HeaderImage from '../assets/images/HeaderImage5.png'
import React from 'react';
import Curve from '../assets/images/curve.png'
import Footer from '../components/Footer';
import GoogleMap from '../components/HomePage/GoogleMap';
import Mobile from '../assets/images/Mobile3.png'
import Menu from '../components/Menu';
import BackToTheTopButton from '../components/BackToTheTopButton';

export default function ContactUs() {

    const [checked, setChecked] = React.useState(0)

    const ClickHandler =(item: any)=> {
        if(checked === item){
            setChecked(0)
        } else {
            setChecked(item)
        }
    }

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

            <div className='w-full flex flex-col relative justify-center items-center h-760px bg-blue-300'>
                <img className='w-full h-760px absolute lg:flex hidden object-cover' src={HeaderImage} alt='HeaderImage' />
                <img className='w-full h-760px absolute object-cover lg:hidden' src={Mobile} alt='Mobile' />
                <p style={{color:'#fff'}} className=' text-4xl lg:text-7xl font-Poppins-Bold relative' >Speak with us</p>
                <p style={{color:'#fff'}} className=' text-lg mt-2 font-Poppins-Regular relative ' >We are happpy to hear from you</p>
            </div>  
            <div className='w-full lg:py-14 lg:px-10 relative' > 
                <div className='w-full flex flex-col relative items-center justify-center bg-white py-20 lg:px-0 px-6 lg:p-12 lg:rounded-lg' > 
                    <img className='absolute h-630px lg:flex hidden my-auto right-0 ' src={Curve} alt='curve' />
                    <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' text-2xl text-center font-Poppins-SemiBold' >Send us a message</p>
                    <div className='w-full lg:w-100 font-Poppins-Regular' >
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Full Name</p>
                            <Input fontSize='sm' placeholder='Your name' />
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Email address</p>
                            <Input fontSize='sm' placeholder='Your email' />
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Location/Branch</p>
                            <Select fontSize='sm' placeholder='Location/Branch' >
                                <option>more options</option>
                            </Select>
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Message</p>
                            <Textarea fontSize='sm' height='120px' placeholder='Your message' />
                        </div>
                        <p className='text-sm my-2 ' >Are you a first time member?</p>
                        <div className='flex items-center my-6' >
                            <div onClick={()=> ClickHandler(1)} style={checked === 1 ? {backgroundColor: '#28166F'}: {}} className='border w-6 h-6 rounded-md cursor-pointer mr-2'  />
                            <p className='text-sm ' >YES</p>
                            <div onClick={()=> ClickHandler(2)} style={checked === 2 ? {backgroundColor: '#28166F'}: {}} className='border w-6 h-6 rounded-md cursor-pointer ml-8 mr-2'  />
                            <p className='text-sm ' >NO</p>
                        </div>
                        <button style={{backgroundColor: '#28166F'}} className='rounded-lg py-3 text-white my-4 w-full' >Send Message</button>
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
    )
}
