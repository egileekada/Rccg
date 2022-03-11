import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import React from 'react';
import Flag from '../assets/images/flag.png'

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
    return(
        <div className='w-full px-8  ' >
            <div className='w-full flex items-center' >
                <div className='' >
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Manage First Timers</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Manage first timers</p>
                </div> 
            </div>
            <div className='bg-white w-full py-6' > 
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
                        {Information.map((item, index)=> {
                            return(
                                <Tr className='font-Poppins-Regular text-sm' key={index} > 
                                    <Td>{item.name}</Td>
                                    <Td>{item.phone}</Td>
                                    <Td>{item.email}</Td>
                                    <Td>{item.church}</Td> 
                                    <Td className='flex items-center' ><img src={Flag} className='rounded-full mr-3' alt='nig' />{item.location}</Td> 
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table>
            </div>
        </div>
    )
}
