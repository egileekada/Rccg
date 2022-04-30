import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select'; 
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers' 
import Modal from '../components/Modal';

export default function DataManagement() {

    const navigate = useNavigate()  
    const [checked, setChecked] = React.useState(0)
    const [startDate, setStartDate] = React.useState(new Date());
    const [start, setStart] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);  
    const [country, setCountry] = React.useState([] as any)
    const [selectedcountry, setSelectedCountry] = React.useState('')  
    const [selectedcountrycode, setSelectedCountrycode] = React.useState('')   

    const ClickHandler =(item: any)=> {
        if(checked === item){
            setChecked(0)
        } else {
            setChecked(item)
        }
    }

    const [loading, setLoading] = React.useState(false); 
    
    const handleStartChange = (date: any) => { 
        setStartDate(date);
        setStart(false);  
    };
    
    const loginSchema = yup.object({  
        parishName: yup.string().required('Required'),   
        location: yup.string().required('Required'), 
        // country: yup.string().required('Required'),   
        // serviceType: yup.string().required('Required'), 
        // date: yup.string().required('Required'),    
        male: yup.string().required('Required'),   
        female: yup.string().required('Required'), 
        children: yup.string().required('Required'),   
    })  

    const formik = useFormik({
        initialValues: {parishName: '', location: '', male: '', female: '', children: ''},
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
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  
    },)

    const submit = async () => { 

        if (!formik.dirty) {
            setMessage('You have to fill in the form to continue')
            setModal(2)   
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form to continue')
            setModal(2)   
        }else if (checked === 0) { 
            setMessage('Add Service Type')
            setModal(2)   
        }else if (selectedcountry === '') { 
            setMessage('You have to select a country to continue')
            setModal(2)   
        }else {
            setLoading(true);
            const request = await fetch(`https://rccg-web-api.herokuapp.com/attendance`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    parishName: formik.values.parishName,
                    location: formik.values.location,
                    country: selectedcountry,
                    serviceType: checked === 1 ? 'Virtual Service' : 'on-site',
                    date: startDate.toJSON(),
                    countryCode: selectedcountrycode,
                    attendance:{
                        male: Number(formik.values.male),
                        female: Number(formik.values.female),
                        children: Number(formik.values.children)
                    }
                }),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {   
                setMessage('Data Added Successfully')
                setModal(1)     
                const t1 = setTimeout(() => { 
                    navigate('/');  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                setMessage('Error Occured While Adding Data')
                setModal(2)   
                setLoading(false);
            }
        }
        const t1 = setTimeout(() => {  
            setModal(0)       
            setLoading(false)  
            clearTimeout(t1); 
        }, 2000);  
    }    


    const renderStart = (props: any) => {
        return(
            <div style={{border: '1px solid #b8b8b8'}} className='w-full relative h-12 cursor-pointer flex flex-row items-center justify-center text-primary text-xs font-Rubik-regular rounded-md' onClick={() => setStart(isOpen => !isOpen)}>
                <svg className='absolute right-4' width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1626 0.833328C12.5076 0.833328 12.7876 1.11333 12.7876 1.45833L12.7879 2.16484C14.0047 2.24826 15.0152 2.66503 15.7305 3.38175C16.5113 4.16591 16.9221 5.29341 16.918 6.64591V14.2484C16.918 17.0251 15.1546 18.7501 12.3171 18.7501H5.2688C2.4313 18.7501 0.667969 17.0009 0.667969 14.1851V6.64425C0.667969 4.02524 2.24052 2.34411 4.80521 2.16512L4.80572 1.45833C4.80572 1.11333 5.08572 0.833328 5.43072 0.833328C5.77572 0.833328 6.05572 1.11333 6.05572 1.45833L6.05547 2.14916H11.5371L11.5376 1.45833C11.5376 1.11333 11.8176 0.833328 12.1626 0.833328ZM15.668 8.25333H1.91797V14.1851C1.91797 16.3234 3.10797 17.5001 5.2688 17.5001H12.3171C14.478 17.5001 15.668 16.3451 15.668 14.2484L15.668 8.25333ZM12.5023 13.4969C12.8473 13.4969 13.1273 13.7769 13.1273 14.1219C13.1273 14.4669 12.8473 14.7469 12.5023 14.7469C12.1573 14.7469 11.874 14.4669 11.874 14.1219C11.874 13.7769 12.1498 13.4969 12.4948 13.4969H12.5023ZM8.80439 13.4969C9.14938 13.4969 9.42939 13.7769 9.42939 14.1219C9.42939 14.4669 9.14938 14.7469 8.80439 14.7469C8.45938 14.7469 8.17605 14.4669 8.17605 14.1219C8.17605 13.7769 8.45188 13.4969 8.79688 13.4969H8.80439ZM5.09872 13.4969C5.44372 13.4969 5.72372 13.7769 5.72372 14.1219C5.72372 14.4669 5.44372 14.7469 5.09872 14.7469C4.75372 14.7469 4.46955 14.4669 4.46955 14.1219C4.46955 13.7769 4.74622 13.4969 5.09122 13.4969H5.09872ZM12.5023 10.258C12.8473 10.258 13.1273 10.538 13.1273 10.883C13.1273 11.228 12.8473 11.508 12.5023 11.508C12.1573 11.508 11.874 11.228 11.874 10.883C11.874 10.538 12.1498 10.258 12.4948 10.258H12.5023ZM8.80439 10.258C9.14938 10.258 9.42939 10.538 9.42939 10.883C9.42939 11.228 9.14938 11.508 8.80439 11.508C8.45938 11.508 8.17605 11.228 8.17605 10.883C8.17605 10.538 8.45188 10.258 8.79688 10.258H8.80439ZM5.09872 10.258C5.44372 10.258 5.72372 10.538 5.72372 10.883C5.72372 11.228 5.44372 11.508 5.09872 11.508C4.75372 11.508 4.46955 11.228 4.46955 10.883C4.46955 10.538 4.74622 10.258 5.09122 10.258H5.09872ZM11.5371 3.39916H6.05547L6.05572 4.20083C6.05572 4.54583 5.77572 4.82583 5.43072 4.82583C5.08572 4.82583 4.80572 4.54583 4.80572 4.20083L4.80528 3.41808C2.93842 3.57491 1.91797 4.70654 1.91797 6.64425V7.00333H15.668L15.668 6.64425C15.6713 5.61508 15.3946 4.81508 14.8455 4.26508C14.3634 3.78159 13.6587 3.49283 12.7883 3.41848L12.7876 4.20083C12.7876 4.54583 12.5076 4.82583 12.1626 4.82583C11.8176 4.82583 11.5376 4.54583 11.5376 4.20083L11.5371 3.39916Z" fill="#28166F"/>
                </svg>
                <p>{props.value}</p>
            </div>
        )
    }

    const CountryHandler =(event: any )=> { 
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id'); 
        setSelectedCountry(event.target.value)
        setSelectedCountrycode(optionElementId)
    }  
    return(
        <div className='w-full bg-white p-6 lg:p-16' >
            <Modal message={message} modal={modal} />
            <div onClick={()=> navigate('/')} style={{backgroundColor: 'rgba(196, 196, 196, 0.3)'}} className='w-12 h-12 rounded-full cursor-pointer flex justify-center items-center' >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>   
            <div className='w-full flex flex-col relative items-center justify-center bg-white lg:px-12 lg:py-0 py-12 rounded-lg' >  
                <p style={{color:'#28166F'}} className=' text-xl lg:text-2xl text-center font-Poppins-SemiBold' >Data Management Form</p>
                <div className=' w-full lg:w-100 font-Poppins-Regular mt-8' >
                    <div style={{color:'#28166F'}} className='w-full my-6' >
                        <p className='text-sm mb-2' >Parish Name</p>
                        <Input 
                            name="parishName"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("parishName", true, true)
                            }  
                            fontSize='sm' placeholder='Parish name' size='lg' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.parishName && formik.errors.parishName && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.parishName}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div style={{color:'#28166F'}} className='w-full my-6' >
                        <p className='text-sm mb-2' >Location</p>
                        <Input 
                            name="location"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("location", true, true)
                            }  
                            fontSize='sm' placeholder='Location' size='lg' /> 
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
                    <div className='w-full flex lg:flex-row flex-col lg:h-24 my-6' > 
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
                        <div style={{color:'#28166F'}} className='w-full lg:my-0 my-3 lg:pl-3' >
                            <p className='text-sm mb-2' >Date</p> 
                            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                                <DatePicker
                                    disablePast
                                    open={start}
                                    onOpen={() => setStart(true)}
                                    onClose={() => setStart(false)}
                                    format="dd/MM/yyyy" 
                                    name='StartTime'
                                    value={startDate} 
                                    onChange={handleStartChange}
                                    TextFieldComponent={renderStart}  /> 
                            </MuiPickersUtilsProvider> 
                        </div>
                    </div>  
                    <p style={{color: 'rgba(71, 71, 71, 0.4)'}} className='text-sm my-2 font-Poppins-SemiBold' >CHURCH ATTENDANCE</p>
                    <div className='w-full flex lg:flex-row flex-col items-center my-6' > 
                        <div style={{color:'#28166F'}} className='w-full lg:mb-0 lg:pr-2' >
                            <p className='text-sm mb-2' >Male</p>
                            <Input 
                                name="male"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("male", true, true)
                                }  
                                fontSize='sm' placeholder='0' size='lg'  type='number' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.male && formik.errors.male && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.male}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div style={{color:'#28166F'}} className='w-full lg:my-0 my-6 lg:px-2' > 
                            <p className='text-sm mb-2' >Female</p>
                            <Input 
                                name="female"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("female", true, true)
                                }  
                                fontSize='sm' placeholder='0' size='lg' type='number' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.female && formik.errors.female && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.female}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div style={{color:'#28166F'}} className='w-full lg:mb-0 mb-6 lg:pl-2' > 
                            <p className='text-sm mb-2' >Children</p>
                            <Input 
                                name="children"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("children", true, true)
                                }  
                                fontSize='sm' placeholder='0' type='number' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.children && formik.errors.children && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Regular text-errorRed"
                                    >
                                        {formik.errors.children}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                    </div>  
                    <div className='flex items-center pt-2 my-6' >
                        <div onClick={()=> ClickHandler(1)} style={checked === 1 ? {backgroundColor: '#28166F'}: {}} className='border w-6 h-6 rounded-md cursor-pointer mr-2'  />
                        <p className='text-sm ' >Virtual Service</p>
                        <div onClick={()=> ClickHandler(2)} style={checked === 2 ? {backgroundColor: '#28166F'}: {}} className='border w-6 h-6 rounded-md cursor-pointer ml-8 mr-2'  />
                        <p className='text-sm ' >On-site</p>
                    </div>

                    <button onClick={()=> submit()} style={{backgroundColor: '#28166F'}} className='rounded-lg py-3 text-white my-4 w-full flex justify-center' >

                        {!loading ? 
                            <div className='py-1' >
                                Send Update
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
                    {/* <button style={{backgroundColor: '#28166F'}} className='rounded-lg py-3 text-white my-4 w-full' >Send Update</button> */}
                </div>
            </div>
        </div>
    )
}
