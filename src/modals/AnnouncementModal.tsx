import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/react';
import * as axios from 'axios'   
import { useNavigate } from 'react-router-dom';

export default function AnnouncementModal(props: any) {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const loginSchema = yup.object({  
        name: yup.string().required('Required'),   
        announcement: yup.string().required('Required'), 
    }) 
 
    const formik = useFormik({
        initialValues: {name: '', announcement: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  
    
    const submit = async () => {

        setLoading(true)
       
        {props.value.name === undefined?
                NewEvent()
            :
                EditEvent()
        }  
        // setLoading(false)
    } 
 
    const NewEvent = async ()=> {

        if (!formik.dirty) {
            alert('You have to fill in th form to continue'); 
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue'); 
        } else {
            try { 

                // make request to server
                const request = await axios.default.post(`https://rccg-web-api.herokuapp.com/announcements`, formik.values, {
                        headers: { 'content-type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}` 
                    }
                })     
    
                if (request.status === 200) {    
                    // console.log(json)  
                    const t1 = setTimeout(() => { 
                        props.close(false)
                        navigate(0)
                        clearTimeout(t1);
                    }, 1000); 
                }else {
                    // alert(json.message);
                    // console.log(json)
                    // setLoading(false);
                } 
            } catch (error) {
                console.log(error)
            } 
        }
    } 

    const EditEvent = async ()=> {  
        
        try { 

            // make request to server
            const request = await axios.default.put(`https://rccg-web-api.herokuapp.com/announcements/${props.value._id}`, formik.values, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                }
            })     

            if (request.status === 200) {    
                // console.log(json)  
                const t1 = setTimeout(() => { 
                    props.close(false)
                    navigate(0)
                    clearTimeout(t1);
                }, 1000); 
            }else {
                // alert(json.message);
                // console.log(json)
                // setLoading(false);
            } 
        } catch (error) {
            console.log(error)
        } 
    }

    React.useEffect(() => {
      formik.setFieldValue('name', props.value.name)
      formik.setFieldValue('announcement', props.value.announcement) 
    }, []) 

    return (
        <div className='bg-white pb-20' style={{width: '900px'}} >
            <div style={{backgroundColor: '#28166F'}} className=' w-full flex items-center  px-12 h-28' >
                <p className='text-xl text-white font-Poppins-Medium ' >Annoucement</p>
                <div onClick={()=> props.close(false)} className='w-8 h-8 ml-auto rounded-full border border-white cursor-pointer flex justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99723 5.00002L8.56866 8.57145M1.42578 1.42859L4.99723 5.00002L1.42578 1.42859ZM4.99723 5.00002L8.56866 1.42859L4.99723 5.00002ZM4.99723 5.00002L1.42578 8.57145L4.99723 5.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div style={{width: '480px'}} className='mx-auto my-8' >
                <p className=' font-Poppins-Regular text-sm mb-2' >Announcement</p>
                <Textarea 
                    name="announcement"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("announcement", true, true)
                    }  
                    _placeholder={props.value.announcement === undefined ? {color: 'gray.500' } : {color: 'black' } } 
                    size='lg' placeholder={props.value.announcement === undefined? 'Write announcement': props.value.announcement} fontSize='sm' backgroundColor='white'borderWidth='1px' borderColor='#b8b8b8' /> 
                <div className="w-full h-auto pt-2">
                    {formik.touched.announcement && formik.errors.announcement && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.announcement}
                        </motion.p>
                    )}
                </div> 
                <p className=' font-Poppins-Regular text-sm mb-2 mt-4' >Name</p>
                <Input 
                    name="name"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("name", true, true)
                    }  
                    _placeholder={props.value.name === undefined ? {color: 'gray.500' } : {color: 'black' } } 
                    size='lg' fontSize='sm' placeholder={props.value.name === undefined? 'Your name': props.value.name} backgroundColor='white'borderWidth='1px' borderColor='#b8b8b8' />
                <div className="w-full h-auto pt-2">
                    {formik.touched.name && formik.errors.name && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.name}
                        </motion.p>
                    )}
                </div> 
                <div className='w-full flex' > 
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
                            Upload Announcement
                        </button>
                    }  
                    {/* <button style={{backgroundColor: '#28166F'}} className='rounded-md py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' >Upload Devotion</button> */}
                </div>
            </div>
        </div>
    )
}
