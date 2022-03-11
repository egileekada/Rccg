import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import React from 'react';
import Flag from '../assets/images/flag.png'

const Information = [
    {
        church: 'The Vine Parish',
        country: 'Nigeria', 
        location: 'Port Harcourt, Rivers', 
        male: '128',
        female: '128',
        children: '128',
        date: '12, Jun 2021', 
        mode: 'Onsite'
    },
    {
        church: 'The Vine Parish',
        country: 'Nigeria', 
        location: 'Port Harcourt, Rivers', 
        male: '128',
        female: '128',
        children: '128',
        date: '12, Jun 2021', 
        mode: 'Onsite'
    },
    {
        church: 'The Vine Parish',
        country: 'Nigeria', 
        location: 'Port Harcourt, Rivers', 
        male: '128',
        female: '128',
        children: '128',
        date: '12, Jun 2021', 
        mode: 'Onsite'
    },
    {
        church: 'The Vine Parish',
        country: 'Nigeria', 
        location: 'Port Harcourt, Rivers', 
        male: '128',
        female: '128',
        children: '128',
        date: '12, Jun 2021', 
        mode: 'Onsite'
    },
]


export default function ManageData() {
    return(
        <div className='w-full px-8  ' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Data Mangement</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Manage Data from every church</p>
                </div> 
            </div>
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
                        {Information.map((item, index)=> {
                            return(
                                <Tr className='font-Poppins-Regular text-sm' key={index} > 
                                    <Td>{item.church}</Td>
                                    <Td >
                                        <div className='flex items-center'>
                                            <img src={Flag} className='rounded-full mr-3' alt='nig' />{item.country}
                                        </div> 
                                    </Td> 
                                    <Td>{item.location}</Td>
                                    <Td>
                                        <div className='flex items-center'>
                                            <div className='mx-3' >
                                                <p>{item.male}</p>
                                                <p style={{color: '#727272'}} className='mt-1 text-center'>ML</p>
                                            </div>
                                            <div className='mx-3' >
                                                <p>{item.female}</p>
                                                <p style={{color: '#727272'}} className='mt-1 text-center'>FM</p>
                                            </div>
                                            <div className='mx-3' >
                                                <p>{item.children}</p>
                                                <p style={{color: '#727272'}} className='mt-1 text-center'>CH</p>
                                            </div>
                                        </div>
                                    </Td>
                                    <Td>{item.date}</Td> 
                                    <Td>{item.mode}</Td> 
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table>
            </div>
        </div>
    )
}
