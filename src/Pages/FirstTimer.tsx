import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select'; 
import React from 'react';
import { useNavigate } from 'react-router'; 
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 

export default function FirstTimer() {

    const navigate = useNavigate()  
    const [loading, setLoading] = React.useState(false);
    const [country, setCountry] = React.useState([] as any)
    const [selectedcountry, setSelectedCountry] = React.useState('')   
    const [selectedcountrycode, setSelectedCountrycode] = React.useState('')   
    // const [checked, setChecked] = React.useState(0) 

    
    const loginSchema = yup.object({  
        email: yup.string().email('This email is not valid').required('Your email is required'),   
        location: yup.string().required('Required'), 
        fullName: yup.string().required('Required'),   
        phone: yup.string().required('Required'), 
        parish: yup.string().required('Required'),    
    })  

    // "country":"Nigeria",
    // "countryCode":"234"

    const formik = useFormik({
        initialValues: {location: '', fullName: '', phone: '', parish: '', email: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   

    React.useEffect(() => {
     
        fetch(`https://www.universal-tutorial.com/api/countries/`, {
            method: 'GET', // or 'PUT'
            headers: { 
                Authorization : `Bearer ${localStorage.getItem('country-token')}`,
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {    
            setCountry(data)
            // console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  
    },)

    // console.log(selectedcountrycode)
    // console.log(selectedcountry)

    const submit = async () => { 

        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://rccg-web-api.herokuapp.com/first-timers`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: formik.values.location, fullName: formik.values.fullName, phone: formik.values.phone, parish: formik.values.parish, email: formik.values.email, country: selectedcountry, countryCode: selectedcountrycode
                }),
            });
    
            const json = await request.json();
            console.log(request.status)
            console.log(json)
    
            if (request.status === 200) {     
                const t1 = setTimeout(() => { 
                    navigate('/');  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        } 
    }    

    const CountryHandler =(event: any )=> { 
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id'); 
        setSelectedCountry(event.target.value)
        setSelectedCountrycode(optionElementId)
    }  

    return(
        <div className='w-full bg-white p-7 lg:p-16' >
            <div onClick={()=> navigate('/')} style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className='w-12 h-12 rounded-full cursor-pointer flex justify-center items-center' >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>   
            <div className='w-full flex flex-col relative items-center justify-center bg-white lg:py-0 py-12 lg:px-12 rounded-lg' >  
                <p style={{color:'#28166F'}} className=' text-2xl text-center font-Poppins-SemiBold' >First Timers</p>
                <div className=' w-full lg:w-100 font-Poppins-Regular mt-8' >
                    <div style={{color:'#28166F'}} className='w-full my-6' >
                        <p className='text-sm mb-2' >Full Name</p>
                        <Input
                            name="fullName"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("fullName", true, true)
                            }  
                            fontSize='sm' placeholder='What is your name' />
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
                    <div className='w-full flex lg:flex-row flex-col items-center my-6' > 
                        <div style={{color:'#28166F'}} className='w-full lg:mt-0 mt-3 lg:pr-3' >
                            <p className='text-sm mb-2' >Contact</p>
                            <Input 
                                name="phone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("phone", true, true)
                                }  
                                fontSize='sm' placeholder='Phone number' />
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
                        <div style={{color:'#28166F'}} className='w-full lg:mt-0 mt-3 lg:pl-3' >
                            <p className='text-sm mb-2' >Email Address</p>
                            <Input 
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            }  
                            fontSize='sm' placeholder='Email address' />
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
                    </div>
                    <div style={{color:'#28166F'}} className='w-full lg:mt-0 mt-3' >
                        <p className='text-sm mb-2' >Parish</p>
                        <Input 
                        name="parish"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("parish", true, true)
                        }  
                        fontSize='sm' placeholder='Enter parish' />
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
                    <div style={{color:'#28166F'}} className='w-full lg:mb-0 mb-3 lg:pr-3' >
                        <p className='text-sm mb-2' >Country</p>
                        <div className=' w-full' >
                            <Select onChange={(e)=> CountryHandler(e)} size='lg' fontSize='sm' placeholder='Country/region'>
                                {country.map((item: any)=> { 
                                    return(
                                        <option id={item.country_short_name} key={item.country_name} >{item.country_name}</option>
                                    )
                                })}
                            </Select>
                        </div> 
                    </div>
                    <div style={{color:'#28166F'}} className='w-full my-6' >
                        <p className='text-sm mb-2' >Branch</p>
                        <Input 
                            name="location"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("location", true, true)
                            }  
                            fontSize='sm' placeholder='Location/Branch' /> 
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
                    <button onClick={()=> submit()} style={{backgroundColor: '#28166F'}} className='rounded-lg py-3 text-white my-4 w-full flex justify-center' >

                        {!loading ? 
                            <div className='py-1' >
                                Submit Information
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
        </div>
  );
}
