import { Item } from 'framer-motion/types/components/Reorder/Item';
import React from 'react';
import { useQuery } from 'react-query';
import QuoteModal from '../../modals/QuoteModal';

export default function QuoteComponent() {

    const [show, setShow] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    const { isLoading, data } = useQuery('quotes', () =>
        fetch(`https://rccg-web-api.herokuapp.com/quotes`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',  
            }
        }).then(res =>
            res.json()
        )
    ) 

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+'' 
        console.log()
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    }

    return(
        <div className='w-full pb-10' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Manage C.O’s Quotes</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Add and manage quotes</p>
                </div>
                <button onClick={()=> setShowModal(true)} style={{border:'1px solid #28166F'}} className='w-32 text-active text-sm py-3 ml-auto font-Poppins-Regular justify-center rounded-md flex items-center' >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6V11.25M6 0.75V6V0.75ZM6 6H11.25H6ZM6 6H0.75H6Z" stroke="#28166F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='ml-2' >New Quotes</p>
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
                            <div style={{backgroundColor: '#F4F4F4'}} className='py-4 px-6 rounded-md relative' >
                                <div className='absolute top-2 right-2 w-6 h-6 flex justify-center z-20 items-center rounded-full ' >
                                    {!show ? 
                                        <svg onClick={()=> setShow(true)} className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99935 4.66667C8.73573 4.66667 9.33268 4.06971 9.33268 3.33333C9.33268 2.59695 8.73573 2 7.99935 2C7.26297 2 6.66602 2.59695 6.66602 3.33333C6.66602 4.06971 7.26297 4.66667 7.99935 4.66667Z" fill="#28166F"/>
                                            <path d="M7.99935 9.33333C8.73573 9.33333 9.33268 8.73638 9.33268 8C9.33268 7.26362 8.73573 6.66666 7.99935 6.66666C7.26297 6.66666 6.66602 7.26362 6.66602 8C6.66602 8.73638 7.26297 9.33333 7.99935 9.33333Z" fill="#28166F"/>
                                            <path d="M7.99935 14C8.73573 14 9.33268 13.403 9.33268 12.6667C9.33268 11.9303 8.73573 11.3333 7.99935 11.3333C7.26297 11.3333 6.66602 11.9303 6.66602 12.6667C6.66602 13.403 7.26297 14 7.99935 14Z" fill="#28166F"/>
                                        </svg>
                                    :
                                        <svg onClick={()=> setShow(false)} className='cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#28166F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    }
                                </div>
                                {show ? 
                                    <div className='absolute top-8 right-4 bg-white w-24 p-3 rounded '>
                                        <div className='flex items-center cursor-pointer' >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6607 10.0561C10.9857 10.0561 11.25 10.3238 11.25 10.653C11.25 10.9829 10.9857 11.25 10.6607 11.25H7.32982C7.00484 11.25 6.74052 10.9829 6.74052 10.653C6.74052 10.3238 7.00484 10.0561 7.32982 10.0561H10.6607ZM8.35075 1.15779L9.21117 1.84129C9.56401 2.1172 9.79923 2.4809 9.8797 2.86341C9.97255 3.28417 9.87351 3.69741 9.59496 4.05484L4.46957 10.6829C4.23434 10.9839 3.8877 11.1532 3.51629 11.1595L1.47356 11.1846C1.36214 11.1846 1.26929 11.1093 1.24453 11.0027L0.780274 8.98986C0.699803 8.61989 0.780274 8.23738 1.0155 7.94266L4.64908 3.23965C4.71098 3.1644 4.8224 3.15249 4.89668 3.2083L6.42563 4.42481C6.52467 4.50633 6.66086 4.55022 6.80323 4.53141C7.10654 4.49379 7.31081 4.21788 7.27986 3.92315C7.26129 3.77266 7.18701 3.64724 7.08797 3.55318C7.05702 3.5281 5.60235 2.36176 5.60235 2.36176C5.5095 2.28651 5.49093 2.14855 5.56521 2.05512L6.14089 1.30828C6.67324 0.62478 7.60175 0.562073 8.35075 1.15779Z" fill="#28166F"/>
                                            </svg>
                                            <p style={{color: '#28166F'}} className='font-Poppins-Regular text-xs ml-4' >Edit</p>
                                        </div>
                                        <div className='flex items-center mt-2 cursor-pointer' >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0478 4.07333C10.1641 4.07333 10.2696 4.12408 10.353 4.20983C10.4307 4.30141 10.4699 4.41516 10.4585 4.53532C10.4585 4.57499 10.1476 8.50662 9.97006 10.1615C9.85887 11.1771 9.20418 11.7937 8.22214 11.8106C7.46704 11.8275 6.72895 11.8333 6.00221 11.8333C5.23065 11.8333 4.47612 11.8275 3.7437 11.8106C2.79457 11.7878 2.13932 11.1602 2.03379 10.1615C1.85112 8.50079 1.5459 4.57499 1.54022 4.53532C1.53455 4.41516 1.57313 4.30141 1.65142 4.20983C1.72857 4.12408 1.83977 4.07333 1.95664 4.07333H10.0478ZM7.20442 0.166668C7.72012 0.166668 8.18079 0.526581 8.31411 1.03991L8.40942 1.46574C8.48657 1.81282 8.78725 2.0584 9.13332 2.0584H10.8342C11.0611 2.0584 11.25 2.24681 11.25 2.48656V2.70823C11.25 2.94214 11.0611 3.13639 10.8342 3.13639H1.16641C0.938918 3.13639 0.75 2.94214 0.75 2.70823V2.48656C0.75 2.24681 0.938918 2.0584 1.16641 2.0584H2.86725C3.21275 2.0584 3.51343 1.81282 3.59115 1.46632L3.68022 1.06849C3.81865 0.526581 4.27421 0.166668 4.79557 0.166668H7.20442Z" fill="#28166F"/>
                                            </svg>
                                            <p style={{color: '#28166F'}} className='font-Poppins-Regular text-xs ml-4' >Delete</p>
                                        </div>
                                    </div>
                                :null}
                                <p style={{color: '#727272'}} className='text-xs font-Poppins-Regular' >{item.description}</p>
                                <p style={{color: '#727272'}} className='text-sm mt-4 font-Poppins-Regular' >1, Jan 2021</p>
                            </div>
                        )
                    })}
                </div> 
            }
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <QuoteModal close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
