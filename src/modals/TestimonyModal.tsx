import React from 'react'
import Flag from '../assets/images/flag.png'

export default function TestimonyModal(props: any) { 

    const presentDate = new Date().toJSON()


    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+''  
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    } 
    
    return (
        <div className='bg-white' style={{width: '900px'}} >
            <div style={{backgroundColor: '#28166F'}} className=' w-full flex items-center  px-12 h-28' >
                <div> 
                    <p className='text-xl text-white font-Poppins-Medium ' >Shared Testimonies</p>
                    <p className='text-sm text-white font-Poppins-Regular mt-2 ' >{DateFormat(presentDate)}</p>
                </div>
                <div onClick={()=> props.close(false)} className='w-8 h-8 ml-auto rounded-full border border-white cursor-pointer flex justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99723 5.00002L8.56866 8.57145M1.42578 1.42859L4.99723 5.00002L1.42578 1.42859ZM4.99723 5.00002L8.56866 1.42859L4.99723 5.00002ZM4.99723 5.00002L1.42578 8.57145L4.99723 5.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div style={{width: '480px'}} className='mx-auto my-14' >
                <p style={{color: '#727272'}} className='font-Poppins-Regular' >TESTIMONY</p>
                <p className='font-Poppins-Regular mt-2 text-sm' >{props.value.message}</p>
                <div className='w-full flex mt-4' >
                    <div className='w-full mr-2' > 
                        <p style={{color: '#727272'}} className='font-Poppins-Regular' >NAME</p>
                        <p className='font-Poppins-Regular mt-2 text-sm' >{props.value.fullName}</p>
                        <p style={{color: '#727272'}} className='font-Poppins-Regular mt-4' >PARISH NAME</p>
                        <p className='font-Poppins-Regular mt-2 text-sm' >{props.value.parishName}Praise Land</p>
                    </div>
                    <div className='w-full ml-2' > 
                        <p style={{color: '#727272'}} className='font-Poppins-Regular' >PHONE</p>
                        <p className='font-Poppins-Regular mt-2 text-sm' >{props.value.phone}</p>
                        <p style={{color: '#727272'}} className='font-Poppins-Regular mt-4' >LOCATION</p>
                        <div className='flex items-center mt-4'>
                            <img src={Flag} className='rounded-full' alt='nig' />
                            <p className='font-Poppins-Regular ml-3 text-sm' >{props.value.location}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
