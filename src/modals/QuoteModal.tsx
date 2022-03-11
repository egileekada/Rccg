import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/react';

export default function QuoteModal(props: any) {

    const presentDate = new Date()

    const loginSchema = yup.object({  
        title: yup.string().required('Required'),   
        description: yup.string().required('Required'), 
    }) 
 
    const formik = useFormik({
        initialValues: {title: '', description: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    return (
        <div className='bg-white pb-20' style={{width: '900px'}} >
            <div style={{backgroundColor: '#28166F'}} className=' w-full flex items-center  px-12 h-28' >
                <div> 
                    <p className='text-xl text-white font-Poppins-Medium ' >Manage C.O’s Quotes</p>
                    <p className='text-sm text-white font-Poppins-Regular mt-2 ' >{presentDate.toLocaleDateString()}</p>
                </div>
                <div onClick={()=> props.close(false)} className='w-8 h-8 ml-auto rounded-full border border-white cursor-pointer flex justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99723 5.00002L8.56866 8.57145M1.42578 1.42859L4.99723 5.00002L1.42578 1.42859ZM4.99723 5.00002L8.56866 1.42859L4.99723 5.00002ZM4.99723 5.00002L1.42578 8.57145L4.99723 5.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div style={{width: '480px'}} className='mx-auto my-8' >
                <p className=' font-Poppins-Regular text-sm mb-2' >Description</p>
                <Textarea 
                    name="description"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("description", true, true)
                    }  
                    size='lg' placeholder='description' fontSize='sm' backgroundColor='white'borderWidth='1px' borderColor='#b8b8b8' /> 
                <div className="w-full h-auto pt-2">
                    {formik.touched.description && formik.errors.description && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.description}
                        </motion.p>
                    )}
                </div>  
                <div className='w-full flex' >
                    <button style={{backgroundColor: '#28166F'}} className='rounded-md py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' >Add Quote</button>
                </div>
            </div>
        </div>
    )
}
