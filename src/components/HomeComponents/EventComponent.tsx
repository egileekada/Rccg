import React from 'react';
import { useQuery } from 'react-query'; 
import DeleteModal from '../../modals/DeleteModal';
import EventModal from '../../modals/EventModal';

export default function EventComponent() {

    const [show, setShow] = React.useState('')
    const [index, setIndex] = React.useState('')
    const [value, setValue] = React.useState({} as any)
    
    const [deleteModal, setDeleteModal] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)
 
    const { isLoading, data } = useQuery('events', () =>
        fetch(`https://rccg-api-b43b21fd7c4c.herokuapp.com/events`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res =>
            res.json()
        )
    ) 

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+''  
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    } 

    const DeleteHandler =()=>{
        fetch(`https://rccg-api-b43b21fd7c4c.herokuapp.com/events/${index}`, {
            method: 'DELETE', // or ''PUT
            headers: {
                'Content-Type': 'application/json' ,  Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    }

    const TimeFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date.toLocaleTimeString()+''  
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.replace(':00', '') }</p>
        )
    }

    const ClickHandler =(id: any)=> {
        setDeleteModal(true)
        setIndex(id)
    }

    const EditHandler =(data: any)=> {
        setShowModal(true)
        setValue(data)
    }

    const OpenModal =()=> {
        setShowModal(true)
        setValue({}as any)
    }

    return(
        <div className='w-full pb-10' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Manage Events</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Manage all exiting events and upload upcoming events</p>
                </div>
                <button onClick={()=> OpenModal()} style={{border:'1px solid #28166F'}} className='w-32 text-active text-sm py-3 ml-auto font-Poppins-Regular justify-center rounded-md flex items-center' >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6V11.25M6 0.75V6V0.75ZM6 6H11.25H6ZM6 6H0.75H6Z" stroke="#28166F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='ml-2' >New Event</p>
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
                            <div key={item._id} style={{backgroundColor: '#F4F4F4'}} className='w-full relative' >
                                <img src={item.imageURL} alt={item.imageURL} className='object-cover w-full h-56' />
                                <div className='absolute top-4 right-4 bg-white w-6 h-6 flex justify-center items-center rounded-full ' >
                                    {show !== item._id  ? 
                                        <svg onClick={()=> setShow(item._id)} className='cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99935 4.66667C8.73573 4.66667 9.33268 4.06971 9.33268 3.33333C9.33268 2.59695 8.73573 2 7.99935 2C7.26297 2 6.66602 2.59695 6.66602 3.33333C6.66602 4.06971 7.26297 4.66667 7.99935 4.66667Z" fill="#28166F"/>
                                            <path d="M7.99935 9.33333C8.73573 9.33333 9.33268 8.73638 9.33268 8C9.33268 7.26362 8.73573 6.66666 7.99935 6.66666C7.26297 6.66666 6.66602 7.26362 6.66602 8C6.66602 8.73638 7.26297 9.33333 7.99935 9.33333Z" fill="#28166F"/>
                                            <path d="M7.99935 14C8.73573 14 9.33268 13.403 9.33268 12.6667C9.33268 11.9303 8.73573 11.3333 7.99935 11.3333C7.26297 11.3333 6.66602 11.9303 6.66602 12.6667C6.66602 13.403 7.26297 14 7.99935 14Z" fill="#28166F"/>
                                        </svg>
                                    :
                                        <svg onClick={()=> setShow('')} className='cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#28166F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    }
                                </div>
                                {show === item._id ? 
                                    <div className='absolute top-12 right-4 bg-white w-24 p-3 rounded '>
                                        <div onClick={()=> EditHandler(item)} className='flex items-center cursor-pointer' >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6607 10.0561C10.9857 10.0561 11.25 10.3238 11.25 10.653C11.25 10.9829 10.9857 11.25 10.6607 11.25H7.32982C7.00484 11.25 6.74052 10.9829 6.74052 10.653C6.74052 10.3238 7.00484 10.0561 7.32982 10.0561H10.6607ZM8.35075 1.15779L9.21117 1.84129C9.56401 2.1172 9.79923 2.4809 9.8797 2.86341C9.97255 3.28417 9.87351 3.69741 9.59496 4.05484L4.46957 10.6829C4.23434 10.9839 3.8877 11.1532 3.51629 11.1595L1.47356 11.1846C1.36214 11.1846 1.26929 11.1093 1.24453 11.0027L0.780274 8.98986C0.699803 8.61989 0.780274 8.23738 1.0155 7.94266L4.64908 3.23965C4.71098 3.1644 4.8224 3.15249 4.89668 3.2083L6.42563 4.42481C6.52467 4.50633 6.66086 4.55022 6.80323 4.53141C7.10654 4.49379 7.31081 4.21788 7.27986 3.92315C7.26129 3.77266 7.18701 3.64724 7.08797 3.55318C7.05702 3.5281 5.60235 2.36176 5.60235 2.36176C5.5095 2.28651 5.49093 2.14855 5.56521 2.05512L6.14089 1.30828C6.67324 0.62478 7.60175 0.562073 8.35075 1.15779Z" fill="#28166F"/>
                                            </svg>
                                            <p style={{color: '#28166F'}} className='font-Poppins-Regular text-xs ml-4' >Edit</p>
                                        </div>
                                        <div onClick={()=> ClickHandler(item._id)} className='flex items-center mt-2 cursor-pointer' >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0478 4.07333C10.1641 4.07333 10.2696 4.12408 10.353 4.20983C10.4307 4.30141 10.4699 4.41516 10.4585 4.53532C10.4585 4.57499 10.1476 8.50662 9.97006 10.1615C9.85887 11.1771 9.20418 11.7937 8.22214 11.8106C7.46704 11.8275 6.72895 11.8333 6.00221 11.8333C5.23065 11.8333 4.47612 11.8275 3.7437 11.8106C2.79457 11.7878 2.13932 11.1602 2.03379 10.1615C1.85112 8.50079 1.5459 4.57499 1.54022 4.53532C1.53455 4.41516 1.57313 4.30141 1.65142 4.20983C1.72857 4.12408 1.83977 4.07333 1.95664 4.07333H10.0478ZM7.20442 0.166668C7.72012 0.166668 8.18079 0.526581 8.31411 1.03991L8.40942 1.46574C8.48657 1.81282 8.78725 2.0584 9.13332 2.0584H10.8342C11.0611 2.0584 11.25 2.24681 11.25 2.48656V2.70823C11.25 2.94214 11.0611 3.13639 10.8342 3.13639H1.16641C0.938918 3.13639 0.75 2.94214 0.75 2.70823V2.48656C0.75 2.24681 0.938918 2.0584 1.16641 2.0584H2.86725C3.21275 2.0584 3.51343 1.81282 3.59115 1.46632L3.68022 1.06849C3.81865 0.526581 4.27421 0.166668 4.79557 0.166668H7.20442Z" fill="#28166F"/>
                                            </svg>
                                            <p style={{color: '#28166F'}} className='font-Poppins-Regular text-xs ml-4' >Delete</p>
                                        </div>
                                    </div>
                                :null}
                                <div className='my-4 px-4 w-full' >
                                    <p style={{color: '#28166F'}} className='font-Poppins-Bold' >{item.title}</p>
                                    <p style={{color: '#3E4E5C'}} className='font-Poppins-Regular text-xs mt-1' >{item.description}</p>
                                    <div className='flex items-center mt-4 ' >
                                        <div className='flex items-center' >
                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52965 0.666672C9.80565 0.666672 10.0297 0.890672 10.0297 1.16667L10.03 1.73188C11.0034 1.79862 11.8118 2.13204 12.384 2.7054C13.0087 3.33274 13.3373 4.23474 13.334 5.31674V11.3987C13.334 13.6201 11.9233 15.0001 9.65332 15.0001H4.01465C1.74465 15.0001 0.333984 13.6007 0.333984 11.3481V5.3154C0.333984 3.2202 1.59202 1.8753 3.64378 1.73211L3.64418 1.16667C3.64418 0.890672 3.86818 0.666672 4.14418 0.666672C4.42018 0.666672 4.64418 0.890672 4.64418 1.16667L4.64398 1.71934H9.02932L9.02965 1.16667C9.02965 0.890672 9.25365 0.666672 9.52965 0.666672ZM12.334 6.60267H1.33398V11.3481C1.33398 13.0587 2.28598 14.0001 4.01465 14.0001H9.65332C11.382 14.0001 12.334 13.0761 12.334 11.3987L12.334 6.60267ZM9.80145 10.7975C10.0775 10.7975 10.3015 11.0215 10.3015 11.2975C10.3015 11.5735 10.0775 11.7975 9.80145 11.7975C9.52545 11.7975 9.29878 11.5735 9.29878 11.2975C9.29878 11.0215 9.51945 10.7975 9.79545 10.7975H9.80145ZM6.84312 10.7975C7.11912 10.7975 7.34312 11.0215 7.34312 11.2975C7.34312 11.5735 7.11912 11.7975 6.84312 11.7975C6.56712 11.7975 6.34045 11.5735 6.34045 11.2975C6.34045 11.0215 6.56112 10.7975 6.83712 10.7975H6.84312ZM3.87858 10.7975C4.15458 10.7975 4.37858 11.0215 4.37858 11.2975C4.37858 11.5735 4.15458 11.7975 3.87858 11.7975C3.60258 11.7975 3.37525 11.5735 3.37525 11.2975C3.37525 11.0215 3.59658 10.7975 3.87258 10.7975H3.87858ZM9.80145 8.2064C10.0775 8.2064 10.3015 8.4304 10.3015 8.7064C10.3015 8.9824 10.0775 9.2064 9.80145 9.2064C9.52545 9.2064 9.29878 8.9824 9.29878 8.7064C9.29878 8.4304 9.51945 8.2064 9.79545 8.2064H9.80145ZM6.84312 8.2064C7.11912 8.2064 7.34312 8.4304 7.34312 8.7064C7.34312 8.9824 7.11912 9.2064 6.84312 9.2064C6.56712 9.2064 6.34045 8.9824 6.34045 8.7064C6.34045 8.4304 6.56112 8.2064 6.83712 8.2064H6.84312ZM3.87858 8.2064C4.15458 8.2064 4.37858 8.4304 4.37858 8.7064C4.37858 8.9824 4.15458 9.2064 3.87858 9.2064C3.60258 9.2064 3.37525 8.9824 3.37525 8.7064C3.37525 8.4304 3.59658 8.2064 3.87258 8.2064H3.87858ZM9.02932 2.71934H4.64398L4.64418 3.36067C4.64418 3.63667 4.42018 3.86067 4.14418 3.86067C3.86818 3.86067 3.64418 3.63667 3.64418 3.36067L3.64383 2.73447C2.15034 2.85993 1.33398 3.76524 1.33398 5.3154V5.60267H12.334L12.334 5.3154C12.3367 4.49207 12.1153 3.85207 11.676 3.41207C11.2903 3.02528 10.7266 2.79427 10.0302 2.73479L10.0297 3.36067C10.0297 3.63667 9.80565 3.86067 9.52965 3.86067C9.25365 3.86067 9.02965 3.63667 9.02965 3.36067L9.02932 2.71934Z" fill="black"/>
                                            </svg>
                                            <p style={{color: '#3E4E5C'}} className='ml-2 font-Poppins-Regular text-xs mt-1' >{DateFormat(item.date)}</p>
                                        </div>
                                        <div className='flex items-center ml-8' >
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00065 0.333328C10.6767 0.333328 13.6673 3.324 13.6673 7C13.6673 10.676 10.6767 13.6667 7.00065 13.6667C3.32465 13.6667 0.333984 10.676 0.333984 7C0.333984 3.324 3.32465 0.333328 7.00065 0.333328ZM7.00065 1.33333C3.87598 1.33333 1.33398 3.87533 1.33398 7C1.33398 10.1247 3.87598 12.6667 7.00065 12.6667C10.1253 12.6667 12.6673 10.1247 12.6673 7C12.6673 3.87533 10.1253 1.33333 7.00065 1.33333ZM6.77479 3.73026C7.05145 3.73026 7.27479 3.95426 7.27479 4.23026V7.17826L9.54479 8.5316C9.78145 8.6736 9.85945 8.98026 9.71812 9.2176C9.62412 9.37426 9.45812 9.4616 9.28812 9.4616C9.20079 9.4616 9.11279 9.43893 9.03212 9.3916L6.51878 7.89226C6.36812 7.8016 6.27478 7.63826 6.27478 7.46226V4.23026C6.27478 3.95426 6.49879 3.73026 6.77479 3.73026Z" fill="black"/>
                                            </svg>
                                            <p style={{color: '#3E4E5C'}} className='ml-2 font-Poppins-Regular text-xs mt-1' >{TimeFormat(item.date)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {deleteModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <DeleteModal close={setDeleteModal} delete={DeleteHandler} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <EventModal value={value} close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
