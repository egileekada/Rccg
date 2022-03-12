import React from 'react';
import { useQuery } from 'react-query';
import TestimonyModal from '../modals/TestimonyModal';

export default function TestimonyScreen() {
    
    const { isLoading, data } = useQuery('Testimonies', () =>
        fetch(`https://rccg-web-api.herokuapp.com/testimonies`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',  
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            }
        }).then(res =>
            res.json()
        )
    ) 

    console.log(data) 
    const [value, setValue] = React.useState({} as any)

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+''  
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    } 

    const [showModal, setShowModal] = React.useState(false)
    
    const ClickHandler =(item: any)=> {
        setValue(item)
        setShowModal(true)
    }

    return(
        <div className='w-full px-8  ' > 
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Shared Testimonies</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >View Shared testimonies</p>
                </div> 
            </div>
            {isLoading ?
                <div className='w-full flex justify-center items-center h-20 mt-10' > 
                    <svg
                        width="70"
                        height="70"
                        viewBox="0 0 200 200"
                        color="#28166F"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='mr-4'>
                        <defs>
                            <linearGradient id="spinner-secondHalf">
                            <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
                            <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
                            </linearGradient>
                            <linearGradient id="spinner-firstHalf">
                            <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
                            <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
                            </linearGradient>
                        </defs>

                        <g stroke-width="8">
                            <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
                            <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
                        
                            <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            d="M 4 100 A 96 96 0 0 1 4 98"
                            />
                        </g>

                        <animateTransform
                            from="0 0 0"
                            to="360 0 0"
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="1300ms"
                        />
                    </svg>
                </div>
            :  
                <div className='mt-6 w-full grid grid-cols-4 gap-6' >
                    {data.map((item: any)=> {
                        return(
                            // <div className='mt-6 w-full grid grid-cols-4 gap-6' >
                                <div  onClick={()=> ClickHandler(item)} style={{backgroundColor: '#F4F4F4'}} className='py-4 px-6 rounded-md relative cursor-pointer' > 
                                    <p style={{color: '#727272'}} className='text-xs font-Poppins-Regular' >{item.message}</p>
                                    
                                    <div className='w-full flex items-center mt-4 ' >
                                        <p style={{color: '#28166F'}} className='text-sm font-Poppins-Regular' >{item.fullName}</p>
                                        <p style={{color: '#727272'}} className='text-sm ml-auto font-Poppins-Regular' >{DateFormat(item.updatedAt)}</p>
                                    </div>
                                </div>
                            // </div>
                        )
                    })}
                </div> 
            }
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <TestimonyModal value={value} close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
