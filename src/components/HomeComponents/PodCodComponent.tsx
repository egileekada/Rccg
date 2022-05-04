import React from 'react'
import Podcast from '../../assets/images/podcast.jpg'
import PodCastModal from '../../modals/PodCastModal'

export default function PodCodComponent() {

    const data = ['Holy Ghost Services', 'April Services', ]
    const [showModal, setShowModal] = React.useState(false) 

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
                    <p className='ml-2' >New PodCast</p>
                </button>
            </div> 
            <div className='mt-6 w-full grid grid-cols-4 gap-6' >
                {data.map((item: any)=> {
                    return(
                        <div className='w-full border border-gray-500 cursor-pointer p-4 rounded-lg flex items-center' style={{background: 'radial-gradient(280.81% 460.22% at -29.23% -170.93%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)'}} >
                            <div className=' w-14 lg:w-20 lg:h-20 p-3 rounded-full border border-white' >
                                <img className='w-full rounded-full object-cover' src={Podcast} alt='youtube' />
                            </div>
                            <div className='ml-4' >
                                <p className=' text-sm font-Poppins-Regular' >PodCast</p>
                                <p className=' text-xs font-Poppins-Medium' >{item}</p>
                            </div>
                        </div>
                    )})
                }
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <PodCastModal close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    ) 
} 