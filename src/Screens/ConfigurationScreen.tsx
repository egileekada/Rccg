import { Input } from '@chakra-ui/input';
import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function ConfigurationScreen() {
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
                    <p style={{color: '#121212'}} className='font-Poppins-Bold text-2xl' >Confirguration</p>
                    <p style={{color: '#727272'}} className='font-Poppins-Regular mt-1 text-sm' >Manage all configuration on here</p>
                </div> 
            </div>
            <div style={{width:'450px'}} className='mx-auto mt-20 font-Poppins-Regular' >
                <p className='text-xl font-Poppins-Medium' >Update Password</p>
                <p className=' mt-6 mb-3' >Old Password</p>
                <Input fontSize='sm' size='lg' />
                <p className=' mt-4 mb-3' >New Password</p>
                <Input fontSize='sm' size='lg' />
                <p className=' mt-4 mb-3' >Confirm New Password</p>
                <Input fontSize='sm' size='lg' />
            </div>
        </div>
    )
}
