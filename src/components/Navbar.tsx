import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

export default function Navbar(props : any) {
 
    const [tab, setTab] = React.useState('Home')
    const [dropDown, setDropDown] = React.useState(false) 
    const navigate = useNavigate()

    React.useEffect(() => { 
        if(!localStorage.getItem('tab')){
            setTab('Home')
            navigate('/')
        } else {
            setTab(localStorage.getItem('tab')+'')
        }
    }, [navigate])

    const ClickHandler =(item: any)=> {
        setTab(item)
        localStorage.setItem('tab', item)
    }

    const TabHandler =(item: any)=> {
        setTab('History')
        localStorage.setItem('tab', 'History')
        localStorage.setItem('aboutus', item) 
        navigate('/aboutus')
        navigate(0)
    }

    const BackToHome =()=> {
        localStorage.setItem('tab', 'Home')
        navigate('/')
    }
    
    return (
        <div className='w-full h-36  flex items-center relative justify-center px-8' >
            <div onClick={()=> props.open()} style={{width: '96px', height: '96px', color: '#28166F'}} className=' cursor-pointer lg:hidden rounded-full bg-white absolute -right-4 font-Poppins-Medium -top-4 flex justify-center items-center' >
                <p  >MENU</p>
            </div>
            <div className='lg:flex items-center hidden' >
                <Link to='/' onClick={()=> ClickHandler('Home')} ><p style={tab === 'Home' ? {fontSize: '16px', color: 'white', borderColor: 'white', borderBottomWidth: '2px', paddingBottom: '1px'}: {fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)'}}  className='font-Poppins-Medium mx-2' >Home</p></Link> 
                <div onClick={()=> setDropDown((prev)=> !prev)} className='flex items-center cursor-pointer relative font-Poppins-Medium mx-2 text-sm' >
                    <p style={tab === 'History' ? {fontSize: '16px', color: 'white', borderColor: 'white', borderBottomWidth: '2px', paddingBottom: '1px'}: {fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)'}} >Who we are</p>
                    {!dropDown 
                        ? 
                            <svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.5L6 6.5L1 1.5" stroke={tab === 'History' ? "white": 'rgba(255, 255, 255, 0.6)'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        :
                            <svg className='ml-2' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.375 5.75L6 1.375L1.625 5.75" stroke={tab === 'History' ? "white": 'rgba(255, 255, 255, 0.6)'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    }
                    {dropDown ?
                        <div className='absolute bg-white top-10 z-40 w-40 p-3 rounded-md ml-14' > 
                            <p onClick={()=> TabHandler('History')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium my-2' >Our History</p>      
                            <p onClick={()=> TabHandler('Mission')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium my-2' >Mission & Vision</p>
                            <p onClick={()=> TabHandler('Beliefs')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium my-2' >Our Beliefs</p>                    
                            <p onClick={()=> TabHandler('Structure')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium my-2' >Our Structure</p> 
                        </div> 
                    :null}
                </div> 
                <Link to='/devotion' onClick={()=> ClickHandler('Devotion')} ><p style={tab === 'Devotion' ? {fontSize: '16px', color: 'white', borderColor: 'white', borderBottomWidth: '2px', paddingBottom: '1px'}: {fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)'}} className='font-Poppins-Medium mx-2' >Devotion</p></Link>
                <Link to='/officers' onClick={()=> ClickHandler('Officers')} ><p style={tab === 'Officers' ? {fontSize: '16px', color: 'white', borderColor: 'white', borderBottomWidth: '2px', paddingBottom: '1px'}: {fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)'}} className='font-Poppins-Medium mx-2' >Officers</p></Link>
                <Link to='/contactus' onClick={()=> ClickHandler('ContactUs')} ><p style={tab === 'ContactUs' ? {fontSize: '16px', color: 'white', borderColor: 'white', borderBottomWidth: '2px', paddingBottom: '1px'}: {fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)'}} className='font-Poppins-Medium mx-2' >Speak with us</p></Link>
            </div>
            <div className='absolute flex flex-col items-center py-2' >
                <img className='cursor-pointer' onClick={()=> BackToHome()}   src={Logo} alt='logo' />
                <p className='font-Poppins-Bold text-white mt-2' >RCCG AFRICA 3</p>
            </div>
            <div className='hidden lg:flex items-center ml-auto ' >
                <button onClick={()=> navigate('/onlinegiving')} className='flex w-40 font-Poppins-Medium items-center justify-center bg-white rounded-md py-3' >
                    <svg className='mr-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0ZM10 1.5C5.313 1.5 1.5 5.313 1.5 10C1.5 14.687 5.313 18.5 10 18.5C14.687 18.5 18.5 14.687 18.5 10C18.5 5.313 14.687 1.5 10 1.5ZM10.5317 7.4264L14.0027 10.9134C14.2947 11.2074 14.2937 11.6814 14.0007 11.9734C13.8547 12.1194 13.6627 12.1924 13.4717 12.1924C13.2797 12.1924 13.0867 12.1194 12.9407 11.9714L9.9997 9.0184L7.0607 11.9714C6.7687 12.2654 6.2937 12.2654 5.9997 11.9734C5.7067 11.6814 5.7047 11.2074 5.9977 10.9134L9.4687 7.4264C9.7497 7.1434 10.2497 7.1434 10.5317 7.4264Z" fill="black"/>
                    </svg>
                    Give Online
                </button>
                <button onClick={()=> navigate('/attendance')} style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} className='flex w-40 font-Poppins-Medium items-center ml-6 justify-center border border-white rounded-md py-3 text-white' >
                    <svg className='mr-2' width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75L14.544 1.59781C16.0041 1.69792 17.2167 2.19805 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001H5.521C2.116 21.5001 -3.8147e-06 19.4011 -3.8147e-06 16.0221V6.9731C-3.8147e-06 3.83029 1.88705 1.81294 4.96468 1.59815L4.9653 0.75C4.9653 0.336 5.3013 0 5.7153 0C6.1293 0 6.4653 0.336 6.4653 0.75L6.465 1.579H13.043L13.0435 0.75C13.0435 0.336 13.3795 0 13.7935 0ZM18 8.904H1.5V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981L18 8.904ZM14.2012 15.1963C14.6152 15.1963 14.9512 15.5323 14.9512 15.9463C14.9512 16.3603 14.6152 16.6963 14.2012 16.6963C13.7872 16.6963 13.4472 16.3603 13.4472 15.9463C13.4472 15.5323 13.7782 15.1963 14.1922 15.1963H14.2012ZM9.76369 15.1963C10.1777 15.1963 10.5137 15.5323 10.5137 15.9463C10.5137 16.3603 10.1777 16.6963 9.76369 16.6963C9.34969 16.6963 9.0097 16.3603 9.0097 15.9463C9.0097 15.5323 9.34069 15.1963 9.75469 15.1963H9.76369ZM5.3169 15.1963C5.7309 15.1963 6.0669 15.5323 6.0669 15.9463C6.0669 16.3603 5.7309 16.6963 5.3169 16.6963C4.9029 16.6963 4.5619 16.3603 4.5619 15.9463C4.5619 15.5323 4.8939 15.1963 5.3079 15.1963H5.3169ZM14.2012 11.3096C14.6152 11.3096 14.9512 11.6456 14.9512 12.0596C14.9512 12.4736 14.6152 12.8096 14.2012 12.8096C13.7872 12.8096 13.4472 12.4736 13.4472 12.0596C13.4472 11.6456 13.7782 11.3096 14.1922 11.3096H14.2012ZM9.76369 11.3096C10.1777 11.3096 10.5137 11.6456 10.5137 12.0596C10.5137 12.4736 10.1777 12.8096 9.76369 12.8096C9.34969 12.8096 9.0097 12.4736 9.0097 12.0596C9.0097 11.6456 9.34069 11.3096 9.75469 11.3096H9.76369ZM5.3169 11.3096C5.7309 11.3096 6.0669 11.6456 6.0669 12.0596C6.0669 12.4736 5.7309 12.8096 5.3169 12.8096C4.9029 12.8096 4.5619 12.4736 4.5619 12.0596C4.5619 11.6456 4.8939 11.3096 5.3079 11.3096H5.3169ZM13.043 3.079H6.465L6.4653 4.041C6.4653 4.455 6.1293 4.791 5.7153 4.791C5.3013 4.791 4.9653 4.455 4.9653 4.041L4.96476 3.1017C2.72453 3.28989 1.5 4.64786 1.5 6.9731V7.404H18L18 6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.4345 3.53791 15.5889 3.1914 14.5443 3.10218L14.5435 4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041L13.043 3.079Z" fill="white"/>
                    </svg>
                    The Week
                </button>
            </div> 
        </div>    
    );
}
