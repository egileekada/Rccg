import React from 'react'
import { useQuery } from 'react-query'
import YoutubeImage from '../../assets/images/youtube.png'
import YoutubeModal from '../../modals/YoutubeModal'


export default function Youtube() {

    // const data = ['Holy Ghost Services', 'April Services', ]
    const [showModal, setShowModal] = React.useState(false) 

    const { isLoading, data } = useQuery('youtube', () =>
        fetch(`https://rccg-api-b43b21fd7c4c.herokuapp.com/youtube`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res =>
            res.json()
        )
    ) 
 
    return (
        <div className='w-full pb-10' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Manage Youtube Links</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Add and manage Youtube Links</p>
                </div>
                <button onClick={()=> setShowModal(true)} style={{border:'1px solid #28166F'}} className='w-48 text-active text-sm py-3 ml-auto font-Poppins-Regular justify-center rounded-md flex items-center' >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6V11.25M6 0.75V6V0.75ZM6 6H11.25H6ZM6 6H0.75H6Z" stroke="#28166F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='ml-2' >New Youtube Link</p>
                </button>
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
                            <a href={item.link} target="_blank" className='w-full border border-gray-500 cursor-pointer p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                                <div className=' w-14 lg:w-16 lg:h-16 p-3 rounded-full border border-white' >
                                    <img className='w-full' src={YoutubeImage} alt='youtube' />
                                </div>
                                <div className='ml-4' >
                                    <p className=' text-sm font-Poppins-Regular' >YOUTUBE</p>
                                    <p className=' text-xs font-Poppins-Medium' >{item.title}</p>
                                </div>
                            </a>
                        )})
                    }
                </div>
            }
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <YoutubeModal close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 
