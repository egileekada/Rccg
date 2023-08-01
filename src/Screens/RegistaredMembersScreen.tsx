import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import Flag from '../assets/images/flag.png' 
import { useNavigate } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag';

const Information = [
    {
      name: 'Ejike Chinaka Blessing',
      phone: '09034567867',
      email: 'chinakableble@hotmail.com',
      church: 'The Vine Parish',
      location: 'Port Harcourt, Rivers', 
    },
    {
      name: 'Ejike Chinaka Blessing',
      phone: '09034567867',
      email: 'chinakableble@hotmail.com',
      church: 'The Vine Parish',
      location: 'Port Harcourt, Rivers', 
    },
    {
      name: 'Ejike Chinaka Blessing',
      phone: '09034567867',
      email: 'chinakableble@hotmail.com',
      church: 'The Vine Parish',
      location: 'Port Harcourt, Rivers', 
    },
    {
      name: 'Ejike Chinaka Blessing',
      phone: '09034567867',
      email: 'chinakableble@hotmail.com',
      church: 'The Vine Parish',
      location: 'Port Harcourt, Rivers', 
    },
    {
      name: 'Ejike Chinaka Blessing',
      phone: '09034567867',
      email: 'chinakableble@hotmail.com',
      church: 'The Vine Parish',
      location: 'Port Harcourt, Rivers', 
    },
]

export default function RegistaredMembersScreen() { 

    const { isLoading, data } = useQuery('Registered', () =>
        fetch(`https://rccg-api-b43b21fd7c4c.herokuapp.com/first-timers`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',  
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

    return(
        <div className='w-full px-8  ' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Manage First Timers</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Manage first timers</p>
                </div> 
            </div>
            <div className='bg-white w-full py-6' > 

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
                    <Table variant='unstyled' >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr style={{color: '#727272'}} className='font-Poppins-Medium text-sm' >
                                <Th>Full Name</Th>
                                <Th>Phone</Th> 
                                <Th>Email Address</Th> 
                                <Th>Parish Name</Th> 
                                <Th>Location</Th>  
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item: any)=> {
                                return(
                                    <Tr className='font-Poppins-Regular text-sm' > 
                                        <Td>{item.fullName}</Td>
                                        <Td>{item.phone}</Td>
                                        <Td>{item.email}</Td>
                                        <Td>{item.parish}</Td> 
                                        <Td className='flex items-center' >
                                            <ReactCountryFlag style={{width: '32px', height: '32px'}}  className='rounded-full mr-3'
                                                svg
                                                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                                cdnSuffix="svg" countryCode={item.countryCode} />{item.location}
                                        </Td> 
                                    </Tr> 
                                )
                            })}
                        </Tbody> 
                    </Table>
                    // <img src={Flag} className='rounded-full mr-3' alt='nig' />
                }
            </div>
        </div>
    )
} 

