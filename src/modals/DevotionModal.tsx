import { Textarea } from '@chakra-ui/react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import { motion } from 'framer-motion'
import React from 'react' 
import * as yup from 'yup'
import * as axios from 'axios'   
import { useFormik } from 'formik'; 
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

export default function DevotionModal(props: any) { 
  
    const [startDate, setStartDate] = React.useState(new Date());
    const presentDate = new Date()
    const [loading, setLoading] = React.useState(false);
    const [start, setStart] = React.useState(false);
    const navigate = useNavigate()
    const [intialstartDate, setIntialStartDate] = React.useState(''); 
    
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

    const DateFormat =(item: any)=>{ 
        var date = new Date(item);
        let string = date+'' 
        console.log()
        return( 
            <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
        )
    }


    React.useEffect(() => { 
        formik.setFieldValue('description', props.value.description)
        setStartDate(props.value.date)
      }, []) 

    const handleStartChange = (date: any) => { 
        setStartDate(date);
        setStart(false); 
        setIntialStartDate('start')
    };
 
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
        }else if (intialstartDate === '') {
            setMessage('You have to set a Date and Time to continue')
            setModal(2)    
        }else {
            try { 

                // make request to server
                const request = await axios.default.post(`https://rccg-web-api.herokuapp.com/devotions`, {
                    description: formik.values.description,
                    date: startDate.toJSON()
                }, {
                        headers: { 'content-type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}` 
                    }
                })    
    
            if (request.status === 200) {    
                setMessage('Data Added Successfully')
                setModal(1)  
                const t1 = setTimeout(() => {    
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
        }
        const t1 = setTimeout(() => {  
            setModal(0)       
            setLoading(false)  
            clearTimeout(t1); 
        }, 2000);
    } 

    const EditEvent = async ()=> { 

        try { 

            let Newdate: any
            if (intialstartDate === '') {
                Newdate = props.value.date 
            }else {
                Newdate = startDate.toJSON() 
            }  
            //
            const request = await axios.default.put(`https://rccg-web-api.herokuapp.com/devotions/${props.value._id}`, {
                description: formik.values.description,
                date: Newdate
            }, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                }
            })    

        if (request.status === 200) {  
            setMessage('Data Edited Successfully')
            setModal(1)     
            const t1 = setTimeout(() => { 
                // props.close(false)
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

    return (
        <div className='bg-white pb-20' style={{width: '900px'}} >
            <Modal message={message} modal={modal} />
            <div style={{backgroundColor: '#28166F'}} className=' w-full flex items-center  px-12 h-28' >
                <div> 
                    <p className='text-xl text-white font-Poppins-Medium ' >Today’s Devotion</p>
                    <p className='text-sm text-white font-Poppins-Regular mt-2 ' >{DateFormat(presentDate)}</p>
                </div>
                <div onClick={()=> props.close(false)} className='w-8 h-8 ml-auto rounded-full border border-white cursor-pointer flex justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99723 5.00002L8.56866 8.57145M1.42578 1.42859L4.99723 5.00002L1.42578 1.42859ZM4.99723 5.00002L8.56866 1.42859L4.99723 5.00002ZM4.99723 5.00002L1.42578 8.57145L4.99723 5.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div style={{width: '480px'}} className='mx-auto my-8' > 
                <p className=' font-Poppins-Regular text-sm mt-4 mb-2' >Description</p>
                <Textarea 
                    name="description"
                    onChange={formik.handleChange}    
                    _placeholder={props.value.description === undefined ? {color: 'gray.500' } : {color: 'black' } } 
                    onFocus={() =>
                        formik.setFieldTouched("description", true, true)
                    }  
                    size='lg' placeholder={props.value.description === undefined? 'Description': props.value.description} fontSize='sm' backgroundColor='white'borderWidth='1px' borderColor='#b8b8b8' /> 
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
                <div className='w-full flex mt-4 ' >
                    <div className='mr-2 w-full' >
                        <p className=' font-Poppins-Regular text-sm mb-2' >Date</p>
                        
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
                            Upload Devotion
                        </button>
                    }
                    {/* <button style={{backgroundColor: '#28166F'}} className='rounded-md py-3 px-4 text-white text-sm font-Poppins-Medium mt-6 ml-auto' >Upload Devotion</button> */}
                </div>
            </div>
        </div>
    )
}
