import React from 'react'; 
import Logo from '../../assets/images/BigLogo.png'

export default function MissionAndVision() {
    return( 
        <div className='w-full lg:py-14 lg:px-10' >
            <div className='w-full bg-white lg:p-12 lg:px-12 lg:py-12 py-12 px-6 lg:rounded-lg' >
                <div className='w-full flex items-center lg:hidden py-8 justify-center' > 
                    <img className='w-36 h-36' src={Logo} alt='logo' />
                </div>
                <p style={{color: '#28166F'}} className='font-Poppins-Bold text-2xl text-center lg:text-left lg:text-4xl' >Mission & Vision</p>
                <div className='w-full flex items-center mt-8' >
                    <ul className='w-full' >
                        <ul className='my-6' >
                            {/* <div style={{backgroundColor: 'rgba(40, 22, 111, 0.08)'}} className='w-5 flex justify-center items-center h-5 rounded-full'>
                                <div style={{backgroundColor: '#28166F'}} className='w-2 h-2 rounded-full' />
                            </div> */}
                            <li style={{color: 'rgba(71, 71, 71, 0.8)'}} className='font-Poppins-Regular text-sm text-justify ml-6' >To make heaven.</li>
                        </ul>
                        <div className='flex my-6' >
                            {/* <div style={{backgroundColor: 'rgba(40, 22, 111, 0.08)'}} className='w-5 flex justify-center items-center h-5 rounded-full'>
                                <div style={{backgroundColor: '#28166F'}} className='w-2 h-2 rounded-full' />
                            </div> */}
                            <p style={{color: 'rgba(71, 71, 71, 0.8)'}} className='font-Poppins-Regular text-sm text-justify ml-6' >To take as many people with us.</p>
                        </div>
                        <div className='flex my-6' >
                            {/* <div style={{backgroundColor: 'rgba(40, 22, 111, 0.08)'}} className='w-5 flex justify-center items-center h-5 rounded-full'>
                                <div style={{backgroundColor: '#28166F'}} className='w-2 h-2 rounded-full' />
                            </div> */}
                            <p style={{color: 'rgba(71, 71, 71, 0.8)'}} className='font-Poppins-Regular text-sm text-justify ml-6' >To have a member of RCCG in every family of all nations.</p>
                        </div>
                        <div className='flex my-6' >
                            {/* <div style={{backgroundColor: 'rgba(40, 22, 111, 0.08)'}} className='w-5 flex justify-center items-center h-5 rounded-full'>
                                <div style={{backgroundColor: '#28166F'}} className='w-2 h-2 rounded-full' />
                            </div> */}
                            <p style={{color: 'rgba(71, 71, 71, 0.8)'}} className='font-Poppins-Regular ml-6 text-sm text-justify' >To accomplish No. 1 above, holiness will be our lifestyle.</p>
                        </div>
                        <div className='flex my-6' >
                            {/* <div style={{backgroundColor: 'rgba(40, 22, 111, 0.08)'}} className='w-5 flex justify-center items-center h-5 rounded-full  '>
                                <div style={{backgroundColor: '#28166F'}} className='w-2 h-2 rounded-full' />
                            </div> */}
                            <p style={{color: 'rgba(71, 71, 71, 0.8)'}} className='font-Poppins-Regular w-full ml-6 text-sm text-justify' >To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.</p>
                        </div>
                        <div className='flex my-6' >
                            {/* <div style={{backgroundColor: 'rgba(40, 22, 111, 0.08)' }} className='w-5 flex justify-center items-center h-5 rounded-full'>
                                <div style={{backgroundColor: '#28166F'}} className='w-2 h-2 rounded-full' />
                            </div> */}
                            <p style={{color: 'rgba(71, 71, 71, 0.8)'}} className='font-Poppins-Regular w-full ml-6 text-sm text-justify' >We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ </p>
                        </div> 
                    </ul>
                    <div className='w-full hidden lg:flex items-center justify-center' > 
                        <img src={Logo} alt='logo' />
                    </div>
                </div>   
            </div>
        </div> 
    )
}
