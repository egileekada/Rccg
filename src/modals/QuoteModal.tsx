import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { Textarea } from '@chakra-ui/react';
import * as axios from 'axios'   
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

export default function QuoteModal(props: any) {

    const presentDate = new Date()
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);  

    const loginSchema = yup.object({   
        description: yup.string().required('Required'), 
    }) 
 
    const formik = useFormik({
        initialValues: {description: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   
    
    const submit = async () => {

        setLoading(true) 
        {props.value.description === undefined?
                NewEvent()
            :
                EditEvent()
        }   
    } 

    const NewEvent = async ()=> {

        if (!formik.dirty) {
            setMessage('You have to fill in the form to continue')
            setModal(2)  
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form to continue')
            setModal(2)  
        } else {
            try { 

                // make request to server
                const request = await axios.default.post(`https://rccg-api-b43b21fd7c4c.herokuapp.com/quotes`, formik.values, {
                        headers: { 'content-type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}` 
                    }
                })   
    
            if (request.status === 200) {   
                setMessage('Data Added Successfully')
                setModal(1)  
                const t1 = setTimeout(() => { 
                    props.close(false)
                    navigate(0)
                    clearTimeout(t1);
                },2000); 
            }else {
                setMessage('Error Occured While Adding Data')
                setModal(2)    
            }
                    
            } catch (error) {
                setMessage('Error Occured While Adding Data')
                setModal(2)    
            } 
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);
        } 
        
    } 

    const EditEvent = async ()=> { 

        try { 
    
            // make request to server
            const request = await axios.default.put(`https://rccg-api-b43b21fd7c4c.herokuapp.com/quotes/${props.value._id}`, formik.values, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                }
            })   

            if (request.status === 200) {   
                setMessage('Data Added Successfully')
                setModal(1)  
                const t1 = setTimeout(() => { 
                    props.close(false)
                    navigate(0)
                    clearTimeout(t1);
                }, 2000); 
            }else {
                setMessage('Error Occured While Adding Data')
                setModal(2)   
            }
                
        } catch (error) {
            setMessage('Error Occured While Adding Data')
            setModal(2)   
        } 
        const t1 = setTimeout(() => {  
            setModal(0)       
            setLoading(false)  
            clearTimeout(t1); 
        }, 2000);
    }

    React.useEffect(() => {
      formik.setFieldValue('description', props.value.description) 
    }, []) 

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+'' 
        console.log()
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    }

    return (
        <div className='bg-white pb-20' style={{width: '900px'}} >
            <Modal message={message} modal={modal} />
            <div style={{backgroundColor: '#28166F'}} className=' w-full flex items-center  px-12 h-28' >
                <div> 
                    <p className='text-xl text-white font-Poppins-Medium ' >Manage C.O’s Quotes</p>
                    <p className='text-sm text-white font-Poppins-Regular mt-2 ' >{DateFormat(presentDate)}</p>
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

                    {/* <button onClick={()=> submit()} style={{backgroundColor: '#28166F'}} className='rounded-md flex items-center py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' > */}
                        {/* {loading ?
                            <>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 200 200"
                                    color="#FFF"
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
                                Loading
                            </>
                        :
                            'Add Quote'}
                    </button> */}

                    {loading ?
                        <button style={{backgroundColor: '#28166F'}} className='rounded-md flex items-center py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' >
                            
                                <>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 200 200"
                                        color="#FFF"
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
                                    Loading
                                </> 
                        </button>
                    :
                        <button onDoubleClick={()=> false} onClick={()=> submit()} style={{backgroundColor: '#28166F'}} className='rounded-md flex items-center py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' >
                            Add Quote
                        </button>
                    }
                    {/* <button style={{backgroundColor: '#28166F'}} className='rounded-md py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' >Add Quote</button> */}
                </div>
            </div>
        </div>
    )
}
