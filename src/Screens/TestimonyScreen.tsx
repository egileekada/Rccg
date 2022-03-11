import React from 'react';
import TestimonyModal from '../modals/TestimonyModal';

export default function TestimonyScreen() {
    const [showModal, setShowModal] = React.useState(false)
    return(
        <div className='w-full px-8  ' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Shared Testimonies</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >View Shared testimonies</p>
                </div> 
            </div>
            <div onClick={()=> setShowModal(true)} className='mt-6 w-full grid grid-cols-4 gap-6' >
                <div style={{backgroundColor: '#F4F4F4'}} className='py-4 px-6 rounded-md relative' > 
                    <p style={{color: '#727272'}} className='text-xs font-Poppins-Regular' >In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: ‘It is more blessed ...</p>
                    
                    <div className='w-full flex items-center mt-4 ' >
                        <p style={{color: '#28166F'}} className='text-sm font-Poppins-Regular' >Pst. Mbaka Mathew</p>
                        <p style={{color: '#727272'}} className='text-sm ml-auto font-Poppins-Regular' >1, Jan 2021</p>
                    </div>
                </div>
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <TestimonyModal close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
