import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useNavigate } from 'react-router-dom'

export default function LoginScreen(props:any) {

 
    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [tokenvalue, setToken] = React.useState(null); 

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(6, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    React.useEffect(() => {  
        if(tokenvalue === null){ 
        } else { 
            sessionStorage.setItem('token', tokenvalue); 
            localStorage.setItem('token', tokenvalue); 
        }
        // if(token === '' ){
        //     navigate('/dashboard')
        // }
    });  

    React.useEffect(() => {
        props.hide(true)
    }, [props])

    const submit = async () => {

        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://rccg-web-api.herokuapp.com/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();
            console.log(request.status)
            console.log(json)
    
            if (request.status === 200) {    
                setToken(json.token)    
                sessionStorage.setItem('token',json.token)
                localStorage.setItem('token',json.token)
                const t1 = setTimeout(() => { 
                    navigate('/dashboard');  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    }   

    const navigate = useNavigate()

    return (
        <div className='w-full  flex flex-col justify-center pt-10 items-center' > 
            <div style={{width: '500px'}} >
                <p className='text-lg font-Poppins-Bold'>Login</p>
                {/* <p className='text-base font-Graphik-Regular mt-4 mb-6'>Manage 9Jawarehouse SEAMLESSLY</p>  */}
                <div className='my-4 pt-4 w-full' >
                    <p className='text-sm mb-1 font-Poppins-Medium '>Email Address</p> 
                        <Input 
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            }  
                            placeholder="Email" size="lg" className=' mt-2 bg-gray_bg border-gray_bg text-primary '  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/>
                    
                        <div className="w-full h-auto pt-2">
                            {formik.touched.email && formik.errors.email && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.email}
                                </motion.p>
                            )}
                        </div>
                </div> 
                <div className='my-4 pt-2 w-full' >
                    <p className='text-sm mb-1 font-Poppins-Medium '>Password</p>  
                    <InputGroup >
                        <InputRightElement 
                        children={
                            <svg onClick={()=> handleShowpassword()} className='mr-4 mt-1 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3747 2.00024C14.6307 2.00024 16.6447 3.43324 17.3837 5.56724C17.5197 5.95824 17.3117 6.38524 16.9197 6.52124C16.5287 6.65824 16.1017 6.44924 15.9657 6.05724C15.4367 4.52824 13.9917 3.50024 12.3717 3.50024H12.3577C10.2657 3.50024 8.5617 5.19424 8.5527 7.28424L8.552 8.62625L16.184 8.62695C18.688 8.62695 20.726 10.6649 20.726 13.1699V17.4579C20.726 19.9629 18.688 22.0009 16.184 22.0009H8.542C6.037 22.0009 4 19.9629 4 17.4579V13.1699C4 11.1866 5.277 9.49593 7.05221 8.87786L7.0527 7.30124C7.0657 4.36324 9.4417 2.00024 12.3547 2.00024H12.3747ZM16.184 10.1269H8.542C6.864 10.1269 5.5 11.4919 5.5 13.1699V17.4579C5.5 19.1359 6.864 20.5009 8.542 20.5009H16.184C17.861 20.5009 19.226 19.1359 19.226 17.4579V13.1699C19.226 11.4919 17.861 10.1269 16.184 10.1269ZM12.3633 13.4527C12.7773 13.4527 13.1133 13.7887 13.1133 14.2027V16.4247C13.1133 16.8387 12.7773 17.1747 12.3633 17.1747C11.9493 17.1747 11.6133 16.8387 11.6133 16.4247V14.2027C11.6133 13.7887 11.9493 13.4527 12.3633 13.4527Z" fill="#727272"/>
                            </svg>
                        }
                        />
                        <Input 
                            name="password"
                            onChange={formik.handleChange}
                            onFocus={() => 
                                formik.setFieldTouched("password", true, true)
                            } 
                            type={showpassword ? "text" : "password"} placeholder="Password" size="lg" className=' bg-gray_bg  border-gray_bg text-primary'  bg="#F6F6F6" focusBorderColor='white' fontSize='sm' borderColor="#F6F6F6" color="#200E32"/> 
                    </InputGroup>
                    <div className="w-full h-auto pt-2">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                </div>   
                <p className='text-base cursor-pointer my-2 text-right font-Poppins-Regular '>Forgot Password?</p> 
                <button onClick={()=> submit()} style={{ width: '200px' ,backgroundColor:'#28166F'}} className='text-base text-white  rounded flex justify-center items-center py-3 font-Poppins-SemiBold'>
                    {!loading ? 
                        <div className='py-1' >
                            SIGN IN
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
            </div>
        </div>
    )
}
