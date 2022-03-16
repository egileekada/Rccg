import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import Flag from '../assets/images/flag.png'
import { useNavigate } from 'react-router-dom'

export default function ManageData() {

    const { isLoading, data } = useQuery('attendance', () =>
        fetch(`https://rccg-web-api.herokuapp.com/attendance`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',  Authorization : `Bearer ${localStorage.getItem('token')}`  
            }
        }).then(res =>
            res.json()
        )
    )
 
    const navigate = useNavigate() 

    React.useEffect(() => {    
        if(!sessionStorage.getItem('token')){
            navigate('/')
        }
    },[]);     

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+''  
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    }
    return(
        <div className='w-full px-8  ' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Data Mangement</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Manage Data from every church</p>
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
                <div className='bg-white w-full py-6' > 
                    <Table variant='unstyled' >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr style={{color: '#727272'}} className='font-Poppins-Medium text-sm' >
                                <Th>Parish Name</Th>
                                <Th>Country</Th> 
                                <Th>Location</Th> 
                                <Th>Church Attendance</Th> 
                                <Th>Date</Th>  
                                <Th>Mode</Th>  
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item: any)=> {
                                return(
                                    <Tr className='font-Poppins-Regular text-sm' key={item._id} > 
                                        <Td>{item.parishName}</Td>
                                        <Td >
                                            <div className='flex items-center'>
                                                <img src={Flag} className='rounded-full mr-3' alt='nig' />{item.country}
                                            </div> 
                                        </Td> 
                                        <Td>{item.location}</Td>
                                        <Td>
                                            <div className='flex items-center'>
                                                <div className='mx-3' >
                                                    <p>{item.attendance.male}</p>
                                                    <p style={{color: '#727272'}} className='mt-1 text-center'>ML</p>
                                                </div>
                                                <div className='mx-3' >
                                                    <p>{item.attendance.female}</p>
                                                    <p style={{color: '#727272'}} className='mt-1 text-center'>FM</p>
                                                </div>
                                                <div className='mx-3' >
                                                    <p>{item.attendance.children}</p>
                                                    <p style={{color: '#727272'}} className='mt-1 text-center'>CH</p>
                                                </div>
                                            </div>
                                        </Td>
                                        <Td>{DateFormat(item.date)}</Td> 
                                        <Td>{item.serviceType}</Td> 
                                    </Tr> 
                                )
                            })}
                        </Tbody> 
                    </Table>
                </div>
            }
        </div>
    )
}
