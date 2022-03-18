import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import * as axios from 'axios'   
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { MuiPickersUtilsProvider, DatePicker, KeyboardTimePicker } from '@material-ui/pickers'
import { Grid } from '@chakra-ui/layout'
import { useNavigate } from 'react-router-dom'

export default function EventModal(props: any) { 

    const [startDate, setStartDate] = React.useState(new Date());
    const [start, setStart] = React.useState(false);
    const [time, setTime] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [image, SetImage] = React.useState('');
    const [intialstartDate, setIntialStartDate] = React.useState(''); 
    const [imageFile, SetImageFile] = React.useState({} as any);   
    const navigate = useNavigate()
 
    const loginSchema = yup.object({  
        title: yup.string().required('Required'),   
        description: yup.string().required('Required'), 
    }) 
 
    console.log(props.value)

    const formik = useFormik({
        initialValues: {title: '', description: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   

    const submit =() => {

        setLoading(true) 
        {props.value.title === undefined?
                NewEvent()
            :
                EditEvent()
        }  
    } 
 
    const NewEvent = async ()=> {

        if (!formik.dirty) {
            alert('You have to fill in th form to continue'); 
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue'); 
        }else if (image === '') {
            alert('You have to Add an Image to continue'); 
        }else if (intialstartDate === '') {
            alert('You have to set a Date and Time to continue'); 
        }else {
            try { 

                let formData = new FormData()   
                formData.append('title', formik.values.title) 
                formData.append('description', formik.values.description) 
                formData.append('date', startDate.toJSON()) 
                formData.append('time', startDate.toJSON()) 
                formData.append('image', imageFile)  

                // make request to server 
                    const request = await axios.default.post(`https://rccg-web-api.herokuapp.com/events`, formData, {
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

            let formData = new FormData()   
            formData.append('title', formik.values.title) 
            formData.append('description', formik.values.description) 
            if (image !== '') {
                formData.append('image', imageFile)  
            }else {
                formData.append('imageURL', props.value.imageURL)  
            }  
            if (intialstartDate === '') {
                formData.append('date', props.value.date) 
                formData.append('time', props.value.date) 
            }else {
                formData.append('date', startDate.toJSON()) 
                formData.append('time', startDate.toJSON())  
            }  
            // make request to server 
                const request = await axios.default.put(`https://rccg-web-api.herokuapp.com/events/${props.value._id}`, formData, {
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
      formik.setFieldValue('title', props.value.title)
      formik.setFieldValue('description', props.value.description)
      setStartDate(props.value.date)
    }, []) 

    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg" ];        
        if (selected && TYPES.includes(selected.type)) {
            // SetImage(selected)
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                SetImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Error')
        }   
        SetImageFile(selected) 
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

    const renderTime = (props: any) => {
        return(
            <div style={{border: '1px solid #b8b8b8'}} className='w-full relative h-12 cursor-pointer flex flex-row items-center justify-center text-primary text-xs font-Rubik-regular rounded-md' onClick={() =>  setTime(isOpen => !isOpen)}>
                <svg className='absolute right-4' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0013 0.666672C13.5963 0.666672 17.3346 4.40501 17.3346 9.00001C17.3346 13.595 13.5963 17.3333 9.0013 17.3333C4.4063 17.3333 0.667969 13.595 0.667969 9.00001C0.667969 4.40501 4.4063 0.666672 9.0013 0.666672ZM9.0013 1.91667C5.09547 1.91667 1.91797 5.09417 1.91797 9.00001C1.91797 12.9058 5.09547 16.0833 9.0013 16.0833C12.9071 16.0833 16.0846 12.9058 16.0846 9.00001C16.0846 5.09417 12.9071 1.91667 9.0013 1.91667ZM8.71897 4.91284C9.0648 4.91284 9.34397 5.19284 9.34397 5.53784V9.22284L12.1815 10.9145C12.4773 11.092 12.5748 11.4753 12.3981 11.772C12.2806 11.9678 12.0731 12.077 11.8606 12.077C11.7515 12.077 11.6415 12.0487 11.5406 11.9895L8.39897 10.1153C8.21064 10.002 8.09397 9.79784 8.09397 9.57784V5.53784C8.09397 5.19284 8.37397 4.91284 8.71897 4.91284Z" fill="#28166F"/>
                </svg>
                <p>{props.value}</p>
            </div>
        )
    }

    const handleStartChange = (date: any) => { 
        setStartDate(date);
        setStart(false); 
        setIntialStartDate('start')
    };

    const handleTimeChange = (date: any) => { 
        setStartDate(date);
        setTime(false);  
    };

    return (
        <div className='bg-white' style={{width: '900px'}} >
            <div style={{backgroundColor: '#28166F'}} className=' w-full flex items-center  px-12 h-28' >
                <p className='text-xl text-white font-Poppins-Medium ' >Add New Event</p>
                <div onClick={()=> props.close(false)} className='w-8 h-8 ml-auto rounded-full border border-white cursor-pointer flex justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99723 5.00002L8.56866 8.57145M1.42578 1.42859L4.99723 5.00002L1.42578 1.42859ZM4.99723 5.00002L8.56866 1.42859L4.99723 5.00002ZM4.99723 5.00002L1.42578 8.57145L4.99723 5.00002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div style={{width: '480px'}} className='mx-auto my-8' >
                <p className=' font-Poppins-Regular text-sm mb-2' >Event Title</p>
                <Input  
                    name="title"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("title", true, true)
                    }    
                    _placeholder={props.value.title === undefined ? {color: 'gray.500' } : {color: 'black' } } 
                    size='lg' fontSize='sm' placeholder={props.value.title === undefined? 'Event Title': props.value.title} backgroundColor='white'borderWidth='1px' borderColor='#b8b8b8' />
                <div className="w-full h-auto pt-2">
                    {formik.touched.title && formik.errors.title && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-Regular text-errorRed"
                        >
                            {formik.errors.title}
                        </motion.p>
                    )}
                </div>
                <p className=' font-Poppins-Regular text-sm mt-4 mb-2' >Description</p>
                <Textarea 
                    name="description"
                    onChange={formik.handleChange}
                    _placeholder={props.value.title === undefined ? {color: 'gray.500' } : {color: 'black' } }
                    onFocus={() =>
                        formik.setFieldTouched("description", true, true)
                    }  
                    size='lg' placeholder={props.value.title === undefined? 'Description': props.value.description} fontSize='sm' backgroundColor='white'borderWidth='1px' borderColor='#b8b8b8' /> 
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
                        <p className=' font-Poppins-Regular text-sm mb-2' >Event Date</p>
                        
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
                    <div className='ml-2  w-full' >
                        <p className=' font-Poppins-Regular text-sm mb-2' >Event Time</p>
                        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardTimePicker
                                    open={time}
                                    onOpen={() => setTime(true)}
                                    onClose={() => setTime(false)}
                                    id="time-picker"
                                    value={startDate}
                                    onChange={handleTimeChange}
                                    TextFieldComponent={renderTime} 
                                    InputProps={{
                                    disableUnderline: true
                                    }}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                        }}/>
                            </Grid>
                        </MuiPickersUtilsProvider>
                {/* <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <TimePicker 
                        open={time}
                        onOpen={() => setTime(true)}
                        onClose={() => setTime(false)}  
                        clearable
                        ampm={false}
                        value={startDate} 
                        onChange={handleTimeChange}
                        TextFieldComponent={renderTime}  /> 
                </MuiPickersUtilsProvider>  */}
                    </div>
                </div>
                <label>
                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                    <div className='w-full cursor-pointer mt-4 ' >
                        {image === '' ?
                            <>
                                {props.value.title === undefined ?
                                        <div className='w-full flex items-center px-12 rounded-lg h-20' style={{backgroundColor: '#F4F4F4'}} >
                                            <div className='w-12 h-12 flex justify-center items-center bg-white rounded-full' >
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.3338 0C17.7231 0 20 2.37811 20 5.91672V14.0833C20 17.6219 17.7231 20 14.3328 20H5.66618C2.2769 20 0 17.6219 0 14.0833V5.91672C0 2.37811 2.2769 0 5.66618 0H14.3338ZM15.4366 10.5501C14.3646 9.88132 13.5371 10.8204 13.3138 11.1207C13.0986 11.4107 12.9136 11.7307 12.7185 12.0506C12.2419 12.84 11.6958 13.7503 10.7506 14.2797C9.37699 15.0403 8.3342 14.3395 7.58404 13.8297C7.30248 13.6398 7.02897 13.4603 6.75645 13.3406C6.08473 13.0506 5.48038 13.3808 4.5834 14.5201C4.11279 15.1156 3.64621 15.7059 3.17358 16.2941C2.89102 16.646 2.95839 17.1889 3.3395 17.4242C3.94788 17.7988 4.68999 18 5.52865 18H13.9564C14.432 18 14.9087 17.935 15.3632 17.7864C16.3869 17.452 17.1994 16.6863 17.6237 15.6749C17.9817 14.8246 18.1557 13.7926 17.8208 12.934C17.7092 12.6491 17.5423 12.3839 17.308 12.1507C16.6936 11.5408 16.1194 10.9711 15.4366 10.5501ZM6.49886 4C5.12021 4 4 5.12173 4 6.5C4 7.87827 5.12021 9 6.49886 9C7.8765 9 8.99772 7.87827 8.99772 6.5C8.99772 5.12173 7.8765 4 6.49886 4Z" fill="#28166F"/>
                                                </svg> 
                                            </div> 
                                                <p className=' font-Poppins-Regular text-sm ml-4' >Upload Image</p>
                                        </div>
                                    :
                                        <img style={{borderRadius: '8px'}} alt='upload' src={props.value.imageURL} className='w-full h-20 object-cover' /> 
                                    }
                            </>
                        :
                            <img style={{borderRadius: '8px'}} alt='upload' src={image} className='w-full h-20 object-cover' /> 
                        }
                    </div>
                </label>
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
                            Upload Event
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
