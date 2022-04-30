import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function COQuote() {

    const navigate = useNavigate()  

    return(
        <div className='w-full bg-white p-7 lg:p-16 ' >
            <div onClick={()=> navigate('/')} style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className='w-12 h-12 rounded-full cursor-pointer flex justify-center items-center' >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>   
            <div className='w-full flex flex-col py-12 lg:py-0 relative items-center justify-center bg-white lg:px-12 rounded-lg' >  
                <p style={{color:'#28166F'}} className=' text-2xl text-center font-Poppins-SemiBold' >C.O Quotes</p>
                <div className='font-Poppins-Regular text-lg lg:w-104 pt-8' >
                    <p style={{fontStyle: 'italic'}}>In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: ‘It is more blessed to give than to receive.’”</p>
                    <div className='flex items-center pl-2 py-6' >
                        <div style={{backgroundColor: '#28166F'}} className='w-2 mr-4 h-2 rounded-full' />
                        <p style={{color: '#28166F', fontStyle: 'italic'}}>Acts 20:35</p>
                    </div>
                    <p style={{fontStyle: 'italic'}}>In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: ‘It is more blessed to give than to receive.’”</p>
                    <div className='flex items-center pl-2 py-6' >
                        <div style={{backgroundColor: '#28166F'}} className='w-2 mr-4 h-2 rounded-full' />
                        <p style={{color: '#28166F', fontStyle: 'italic'}}>Acts 20:35</p>
                    </div>
                    <p style={{fontStyle: 'italic'}}>In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: ‘It is more blessed to give than to receive.’”</p>
                    <div className='flex items-center pl-2 py-6' >
                        <div style={{backgroundColor: '#28166F'}} className='w-2 mr-4 h-2 rounded-full' />
                        <p style={{color: '#28166F', fontStyle: 'italic'}}>Acts 20:35</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}
