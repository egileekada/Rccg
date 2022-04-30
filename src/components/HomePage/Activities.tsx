import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Activties() { 
    
    const navigate = useNavigate() 

    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6' >
            <div className='w-full py-12 px-6 bg-white rounded-lg' > 
                <p style={{color:'#28166F'}} className=' text-xl font-Poppins-SemiBold' >First Timers</p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' font-Poppins-Regular mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu qua</p>
                <button onClick={()=> navigate('/firsttimer')} style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-32 rounded-md'>Register</button>
            </div>
            <div className='w-full py-12 px-6 bg-white rounded-lg' > 
                <p style={{color:'#28166F'}} className=' text-xl font-Poppins-SemiBold' >Share Testimony</p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' font-Poppins-Regular mt-2' >To share the testimony of what God did for you during any of our programs, kindly click here so it can be added to the Online Testimonies during the next Holyghost Service.</p>
                <button onClick={()=> navigate('/sharetestimony')} style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-32 rounded-md'>Share</button>
            </div>
            <div className='w-full py-12 px-6 bg-white rounded-lg' > 
                <p style={{color:'#28166F'}} className=' text-xl font-Poppins-SemiBold' >Continental Oficers</p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' font-Poppins-Regular mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu qua</p>
                <button style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-32 rounded-md'>View Officers</button>
            </div>
            <div className='w-full py-12 px-6 bg-white rounded-lg' > 
                <p style={{color:'#28166F'}} className=' text-xl font-Poppins-SemiBold' >C.O Quotes</p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' font-Poppins-Regular mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu qua</p>
                <button onClick={()=> navigate('/quotes')} style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-32 rounded-md'>View Quotes</button>
            </div>
            <div className='w-full py-12 px-6 bg-white rounded-lg' > 
                <p style={{color:'#28166F'}} className=' text-xl font-Poppins-SemiBold' >Continental Devotions</p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' font-Poppins-Regular mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu qua</p>
                <button style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-32 rounded-md'>Devotions</button>
            </div>
            <div className='w-full py-12 px-6 bg-white rounded-lg' > 
                <p style={{color:'#28166F'}} className=' text-xl font-Poppins-SemiBold' >Upcoming Programs</p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' font-Poppins-Regular mt-2' >To share the testimony of what God did for you during any of our programs, kindly click here so it can be added to the Online Testimonies during the next Holyghost Service.</p>
                <button onClick={()=> navigate('/upcomingprogram')} style={{color:'#28166F', border: '1px solid #28166F'}} className='py-3 mt-7 text-sm w-32 rounded-md'>View</button>
            </div>
        </div>
    );
}
