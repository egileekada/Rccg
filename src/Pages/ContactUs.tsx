import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import { Textarea } from '@chakra-ui/textarea';
import HeaderImage from '../assets/images/HeaderImage5.png'
import React from 'react';
import Curve from '../assets/images/curve.png'
import Footer from '../components/Footer';
import GoogleMap from '../components/HomePage/GoogleMap';
import Mobile from '../assets/images/Mobile3.png'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import Menu from '../components/Menu';
import BackToTheTopButton from '../components/BackToTheTopButton';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

export default function ContactUs() {

    const [checked, setChecked] = React.useState(0)

    const ClickHandler =(item: any)=> {
        if(checked === item){
            setChecked(0)
        } else {
            setChecked(item)
        }
    }

//     curl --location --request POST 'http://localhost:3005/messages' \
// --data-raw '{
//     "fullName":"George, B Smith",
//     "email":"georgebsmith.tech@gmail.com",
//     "branch":"Choba",
//     "content":"This is the content",
//     "firstTimer":false
// }'
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()  
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);  
    const [selectedcountry, setSelectedCountry] = React.useState('')  
    const [selectedcountrycode, setSelectedCountrycode] = React.useState('')   

    const loginSchema = yup.object({  
        // email: yup.string().email('This email is not valid').required('Your email is required'),   
        location: yup.string().required('Required'), 
        fullName: yup.string().required('Required'),   
        phone: yup.string().required('Required'), 
        parish: yup.string().required('Required'), 
        message: yup.string().required('Required'),    
    })  

    // "location":"The location",
    // "message":"the message of two",
    // "fullName":"the name",
    // "phone":"20815466435",
    // "parish":"choba",
    // "firstTimer":true

    const formik = useFormik({
        initialValues: {location: '', fullName: '', message: '', phone: '', parish: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   


    const submit = async () => {

        if (!formik.dirty) {
            setMessage('You have to fill in the form to continue')
            setModal(2)    
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form to continue')
            setModal(2)   
        }else if (checked === 0) {
            alert('Are You a First Timer');
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://rccg-api-b43b21fd7c4c.herokuapp.com/messages`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: formik.values.location,
                    message: formik.values.message,
                    fullName: formik.values.fullName,
                    phone: formik.values.phone,
                    parish: formik.values.parish, 
                    firstTimer: checked === 1 ? true : false
                }),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {    
                setMessage('Message Sent Successfully')
                setModal(1)    
                const t1 = setTimeout(() => { 
                    navigate('/');  
                    clearTimeout(t1);
                }, 2000); 
            }else {
                setMessage('Error Occured While Sent Message')
                setModal(2)   
                console.log(json)
                setLoading(false);
            }
        }       
        const t1 = setTimeout(() => {  
            setModal(0)       
            setLoading(false)  
            clearTimeout(t1); 
        }, 2000);  
    }    

    return(
        <div style={{backgroundColor: '#E5E5E5'}} className=' w-screen overflow-x-hidden lg:w-full h-full ' > 
            <Modal message={message} modal={modal} />
            <div className='absolute top-0 w-full z-20 lg:flex hidden ' >
                <Menu />
            </div>
            <div className='absolute top-0 w-full z-20 lg:hidden overflow-hidden ' >
                <Menu />
            </div>
            
            {/* Floating Button For Mobile View  */} 
            <BackToTheTopButton /> 

            <div className='w-full flex flex-col relative justify-center items-center h-760px bg-blue-300'>
                <img className='w-full h-760px absolute lg:flex hidden object-cover' src={HeaderImage} alt='HeaderImage' />
                <img className='w-full h-760px absolute object-cover lg:hidden' src={Mobile} alt='Mobile' />
                <p style={{color:'#fff'}} className=' text-4xl lg:text-7xl font-Poppins-Bold relative' >Speak with us</p>
                <p style={{color:'#fff'}} className=' text-lg mt-2 font-Poppins-Regular relative ' >We are happpy to hear from you</p>
            </div>  
            <div className='w-full lg:py-14 lg:px-10 relative' > 
                <div className='w-full flex flex-col relative items-center justify-center bg-white py-20 lg:px-0 px-6 lg:p-12 lg:rounded-lg' > 
                    <img className='absolute h-630px lg:flex hidden my-auto right-0 ' src={Curve} alt='curve' />
                    <p style={{color:'rgba(71, 71, 71, 0.8)'}} className=' text-2xl text-center font-Poppins-SemiBold' >Send us a message</p>
                    <div className='w-full lg:w-100 font-Poppins-Regular' >
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Full Name</p>
                            <Input  
                                name="fullName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("fullName", true, true)
                                }  
                                fontSize='sm' placeholder='Your name' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.fullName && formik.errors.fullName && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.fullName}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Phone Number</p>
                            <Input  
                                name="phone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("phone", true, true)
                                }  
                                fontSize='sm' placeholder='Your email' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.phone && formik.errors.phone && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.phone}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Location/Branch</p>
                            <Input  
                                name="location"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("location", true, true)
                                }  
                                fontSize='sm' placeholder='Location/Branch' />
                                {/* <option>more options</option>
                            </Select> */}
                            <div className="w-full h-auto pt-2">
                                {formik.touched.location && formik.errors.location && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.location}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Parish</p>
                            <Input  
                                name="parish"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("parish", true, true)
                                }  
                                fontSize='sm' placeholder='Location/Branch' />
                                {/* <option>more options</option>
                            </Select> */}
                            <div className="w-full h-auto pt-2">
                                {formik.touched.parish && formik.errors.parish && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.parish}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div style={{color:'rgba(71, 71, 71, 0.8)'}} className='w-full my-6' >
                            <p className='text-sm mb-2' >Message</p>
                            <Textarea  
                                name="message"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("message", true, true)
                                }  
                                fontSize='sm' height='120px' placeholder='Your message' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.message && formik.errors.message && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.message}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <p className='text-sm my-2 ' >Are you a first time member?</p>
                        <div className='flex items-center my-6' >
                            <div onClick={()=> ClickHandler(1)} style={checked === 1 ? {backgroundColor: '#28166F'}: {}} className='border w-6 h-6 rounded-md cursor-pointer mr-2'  />
                            <p className='text-sm ' >YES</p>
                            <div onClick={()=> ClickHandler(2)} style={checked === 2 ? {backgroundColor: '#28166F'}: {}} className='border w-6 h-6 rounded-md cursor-pointer ml-8 mr-2'  />
                            <p className='text-sm ' >NO</p>
                        </div>
                    <button onClick={()=> submit()} style={{backgroundColor: '#28166F'}} className='rounded-lg py-3 text-white flex justify-center my-4 w-full' > 
                        {!loading ? 
                                <div className='py-1' >
                                    Send Message
                                </div>:
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
                                    LOADING
                                </>
                            } 
                        </button>
                        {/* <button style={{backgroundColor: '#28166F'}} className='rounded-lg py-3 text-white my-4 w-full' >Send Message</button> */}
                    </div>
                </div>
            </div>
            {/* Google Map */}
            {/* <div className='w-full lg:mt-4' >
                <GoogleMap />
            </div> */}
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
}
