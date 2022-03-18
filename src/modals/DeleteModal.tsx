import React from 'react'
import { useNavigate } from 'react-router'
import icon from '../assets/images/deleteicon.png'

export default function DeleteModal(props: any) {

    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()

    const Delete =()=> {
        setShow(true)
        props.delete() 
        const t1 = setTimeout(() => { 
            props.close(false)  
            navigate(0)
            clearTimeout(t1);
        }, 2000); 
    }

    return (
        <div className='bg-white rounded-lg py-5 px-4 flex flex-col items-center justify-center' style={{width: '350px'}}>
            <img src={icon} className='w-20' alt='delete' />
            <p style={{color: '#121212'}} className='font-Poppins-Bold mt-4 text-xl' >Are you sure?</p>
            <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm text-center' >Do you really want to delete this record?<br/>this process can not be undone.</p>
            <div className='flex flex-row mt-5' >
                {show ?
                    <svg
                        width="40"
                        height="40"
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
                :
                    <>
                        <button onClick={()=> props.close(false)} className='py-3 font-Poppins-SemiBold text-sm w-24 rounded-lg bg-[#c1c1c1] text-white mr-2'>Cancel</button>
                        <button onClick={()=> Delete()} className='py-3 font-Poppins-SemiBold text-sm w-24 rounded-lg bg-[#F15E5E] text-white ml-2'>Delete</button>
                    </>}
            </div>
        </div>
    )
} 