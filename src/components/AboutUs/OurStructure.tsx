import React from 'react';
import Struture from '../../assets/images/structure.png'
import Logo from '../../assets/images/BigLogo.png'

export default function OurStructure() {
    return(
        <div className='w-full lg:bg-transparent bg-white lg:py-14' >
            <div className='w-full lg:p-12 lg:px-12 lg:py-12 py-12 px-6 ' >
                <div className='w-full flex items-center lg:hidden py-8 justify-center' > 
                    <img className='w-36 h-36' src={Logo} alt='logo' />
                </div>
                <p style={{color: '#28166F'}} className='font-Poppins-Bold lg:px-10 text-2xl text-center lg:text-left lg:text-4xl' >OUR STRUCTURE</p> 
            </div>
            <div className='w-full mt-8' > 
                <img src={Struture} alt='logo' /> 
            </div> 
        </div>
    );
}
