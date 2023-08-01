import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import ProgramImage from '../assets/images/program.png'

export default function UpComingProgram() {

    const navigate = useNavigate()  
    const Array = [1, 2, 3, 4, 5, 6] 

    const { isLoading, data } = useQuery('event', () =>
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

    const TimeFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date.toLocaleTimeString()+''  
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.replace(':00', '') }</p>
        )
    }

    return(
        <div style={{backgroundColor: '#F4F4F4'}} className=' flex flex-1' > 
            <div className='w-full h-full p-7 lg:p-16 ' >
                <div onClick={()=> navigate('/')} style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className='w-12 h-12 rounded-full cursor-pointer flex justify-center items-center' >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>   
                <div className='w-full flex flex-col relative items-center justify-center lg:px-12 rounded-lg' >  
                    <p style={{color:'#28166F'}} className=' text-2xl text-center font-Poppins-SemiBold' >Upcoming Programs</p>
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
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-14' >
                            {data.map((item: any) => {
                                return( 
                                    <div  key={item._id} className='w-full rounded-lg bg-white' > 
                                        <img  src={item.imageURL} alt={item.imageURL} className='rounded-t-lg w-full h-48 object-cover' />
                                        <div className='p-4' >
                                            <p style={{color:'#28166F'}} className=' font-Poppins-Bold'>{item.title}</p>
                                            <p style={{color:'#3E4E5C'}} className=' font-Poppins-Regular text-xs my-2'>{item.description}</p>
                                            <div className='w-full flex items-center' >
                                                <div className=' my-2' >
                                                    <div className='flex items-center' >
                                                        <svg width="16" height="17" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52965 0.666668C9.80565 0.666668 10.0297 0.890668 10.0297 1.16667L10.03 1.73187C11.0034 1.79861 11.8118 2.13203 12.384 2.7054C13.0087 3.33273 13.3373 4.23473 13.334 5.31673V11.3987C13.334 13.6201 11.9233 15.0001 9.65332 15.0001H4.01465C1.74465 15.0001 0.333984 13.6007 0.333984 11.3481V5.3154C0.333984 3.2202 1.59202 1.87529 3.64378 1.7321L3.64418 1.16667C3.64418 0.890668 3.86818 0.666668 4.14418 0.666668C4.42018 0.666668 4.64418 0.890668 4.64418 1.16667L4.64398 1.71933H9.02932L9.02965 1.16667C9.02965 0.890668 9.25365 0.666668 9.52965 0.666668ZM12.334 6.60267H1.33398V11.3481C1.33398 13.0587 2.28598 14.0001 4.01465 14.0001H9.65332C11.382 14.0001 12.334 13.0761 12.334 11.3987L12.334 6.60267ZM9.80145 10.7975C10.0775 10.7975 10.3015 11.0215 10.3015 11.2975C10.3015 11.5735 10.0775 11.7975 9.80145 11.7975C9.52545 11.7975 9.29878 11.5735 9.29878 11.2975C9.29878 11.0215 9.51945 10.7975 9.79545 10.7975H9.80145ZM6.84312 10.7975C7.11912 10.7975 7.34312 11.0215 7.34312 11.2975C7.34312 11.5735 7.11912 11.7975 6.84312 11.7975C6.56712 11.7975 6.34045 11.5735 6.34045 11.2975C6.34045 11.0215 6.56112 10.7975 6.83712 10.7975H6.84312ZM3.87858 10.7975C4.15458 10.7975 4.37858 11.0215 4.37858 11.2975C4.37858 11.5735 4.15458 11.7975 3.87858 11.7975C3.60258 11.7975 3.37525 11.5735 3.37525 11.2975C3.37525 11.0215 3.59658 10.7975 3.87258 10.7975H3.87858ZM9.80145 8.2064C10.0775 8.2064 10.3015 8.4304 10.3015 8.7064C10.3015 8.9824 10.0775 9.2064 9.80145 9.2064C9.52545 9.2064 9.29878 8.9824 9.29878 8.7064C9.29878 8.4304 9.51945 8.2064 9.79545 8.2064H9.80145ZM6.84312 8.2064C7.11912 8.2064 7.34312 8.4304 7.34312 8.7064C7.34312 8.9824 7.11912 9.2064 6.84312 9.2064C6.56712 9.2064 6.34045 8.9824 6.34045 8.7064C6.34045 8.4304 6.56112 8.2064 6.83712 8.2064H6.84312ZM3.87858 8.2064C4.15458 8.2064 4.37858 8.4304 4.37858 8.7064C4.37858 8.9824 4.15458 9.2064 3.87858 9.2064C3.60258 9.2064 3.37525 8.9824 3.37525 8.7064C3.37525 8.4304 3.59658 8.2064 3.87258 8.2064H3.87858ZM9.02932 2.71933H4.64398L4.64418 3.36067C4.64418 3.63667 4.42018 3.86067 4.14418 3.86067C3.86818 3.86067 3.64418 3.63667 3.64418 3.36067L3.64383 2.73447C2.15034 2.85993 1.33398 3.76524 1.33398 5.3154V5.60267H12.334L12.334 5.3154C12.3367 4.49207 12.1153 3.85207 11.676 3.41207C11.2903 3.02527 10.7266 2.79427 10.0302 2.73479L10.0297 3.36067C10.0297 3.63667 9.80565 3.86067 9.52965 3.86067C9.25365 3.86067 9.02965 3.63667 9.02965 3.36067L9.02932 2.71933Z" fill="black"/>
                                                        </svg>
                                                        <p style={{color:'#3E4E5C'}} className=' font-Poppins-Regular ml-2 text-xs '>{DateFormat(item.date)}</p>
                                                    </div>
                                                    <div className='flex items-center mt-3' >
                                                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00065 0.333336C10.6767 0.333336 13.6673 3.324 13.6673 7C13.6673 10.676 10.6767 13.6667 7.00065 13.6667C3.32465 13.6667 0.333984 10.676 0.333984 7C0.333984 3.324 3.32465 0.333336 7.00065 0.333336ZM7.00065 1.33334C3.87598 1.33334 1.33398 3.87534 1.33398 7C1.33398 10.1247 3.87598 12.6667 7.00065 12.6667C10.1253 12.6667 12.6673 10.1247 12.6673 7C12.6673 3.87534 10.1253 1.33334 7.00065 1.33334ZM6.77479 3.73027C7.05145 3.73027 7.27479 3.95427 7.27479 4.23027V7.17827L9.54479 8.5316C9.78145 8.6736 9.85945 8.98027 9.71812 9.2176C9.62412 9.37427 9.45812 9.4616 9.28812 9.4616C9.20079 9.4616 9.11279 9.43894 9.03212 9.3916L6.51878 7.89227C6.36812 7.8016 6.27478 7.63827 6.27478 7.46227V4.23027C6.27478 3.95427 6.49879 3.73027 6.77479 3.73027Z" fill="black"/>
                                                        </svg>
                                                        <p style={{color:'#3E4E5C'}} className=' font-Poppins-Regular ml-2 text-xs '>{TimeFormat(item.date)}</p>
                                                    </div>
                                                </div>
                                                <button style={{backgroundColor:'#28166F'}} className='w-24 ml-auto rounded-md py-2 text-white text-xs font-Poppins-SemiBold' >See more</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}  

