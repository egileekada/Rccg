import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default function Navbar(props: any) {

    const [tab, setTab] = React.useState('dashboard')
    const [hide, setHide] = React.useState(false)
    const navigate = useNavigate() 

    const ClickHandler =(path: any)=> {
        setTab(path) 
        localStorage.setItem('navbar', path+'')
        navigate('/'+path)
    } 

    React.useEffect(() => {
        if(!localStorage.getItem('navbar')){
            setTab('dashboard')
            localStorage.setItem('navbar', 'dashboard')
            return
        }
        setTab(localStorage.getItem('navbar')+'')
    },)


    React.useEffect(() => { 
        if(localStorage.getItem('navbar')+'' === 'dashboard'){
            navigate('/dashboard')
        } else if(localStorage.getItem('navbar')+'' === 'members'){
            navigate('/members')
        } else if(localStorage.getItem('navbar')+'' === 'attendance'){
            navigate('/attendance')
        } else if(localStorage.getItem('navbar')+'' === 'testimony'){
            navigate('/testimony')
        } else if(localStorage.getItem('navbar')+'' === 'settings'){
            navigate('/settings')
        }
    },[]) 

    React.useEffect(() => {
        setHide(props.hide)
    },[props.hide]) 

    return(
        <div style={{backgroundColor: '#28166F'}} className='w-full fixed px-14 flex h-28 items-center' >
            <img src={logo} alt='logo'  className='w-20 h-20' />
            <p className='ml-4 text-sm font-Poppins-Bold text-white' >RCCG AFRICA 3</p>
            {!hide ?
                <>
                    <div className='mx-auto Poppins-Regular flex items-center text-sm'>
                        <p onClick={()=> ClickHandler('dashboard')} className={tab === 'dashboard' ? 'text-active bg-white px-3 py-2 rounded-md mx-6 font-Poppins-Bold cursor-pointer' : 'text-white mx-4 cursor-pointer'} >Share Info</p>
                        <p onClick={()=> ClickHandler('members')} className={tab === 'members' ? 'text-active bg-white px-3 py-2 rounded-md mx-6 font-Poppins-Bold cursor-pointer' : 'text-white mx-4 cursor-pointer'} >Reg Members</p>
                        <p onClick={()=> ClickHandler('attendance')} className={tab === 'attendance' ? 'text-active bg-white px-3 py-2 rounded-md mx-6 font-Poppins-Bold cursor-pointer' : 'text-white mx-4 cursor-pointer'} >Data Mangement</p>
                        <p onClick={()=> ClickHandler('testimony')} className={tab === 'testimony' ? 'text-active bg-white px-3 py-2 rounded-md mx-6 font-Poppins-Bold cursor-pointer' : 'text-white mx-4 cursor-pointer'} >Testimonies</p>
                        <p onClick={()=> ClickHandler('settings')} className={tab === 'settings' ? 'text-active bg-white px-3 py-2 rounded-md mx-6 font-Poppins-Bold cursor-pointer' : 'text-white mx-4 cursor-pointer'} >Configuration</p>
                    </div>
                    <p style={{backgroundColor: '#0C8F3B'}} className='text-white px-2 py-1 rounded-md text-xs font-Poppins-Regular cursor-pointer'>New</p>
                    <svg className='ml-8 cursor-pointer' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.659 0C18.989 0 21.5 2.717 21.5 6.32V13.188C21.5 15.032 20.848 16.698 19.663 17.88C18.6 18.939 17.221 19.5 15.675 19.5H5.822C4.279 19.5 2.901 18.94 1.837 17.88C0.652 16.698 0 15.032 0 13.188V6.32C0 2.717 2.511 0 5.841 0H15.659ZM15.659 1.5H5.841C3.326 1.5 1.5 3.527 1.5 6.32V13.188C1.5 14.631 1.996 15.92 2.896 16.817C3.672 17.592 4.685 18 5.825 18H15.659C15.661 17.998 15.669 18 15.675 18C16.816 18 17.828 17.592 18.604 16.817C19.505 15.92 20 14.631 20 13.188V6.32C20 3.527 18.174 1.5 15.659 1.5ZM17.235 6.1288C17.496 6.4498 17.447 6.9218 17.126 7.1838L12.682 10.7958C12.12 11.2418 11.448 11.4648 10.777 11.4648C10.108 11.4648 9.441 11.2438 8.883 10.8018L4.398 7.1858C4.075 6.9258 4.025 6.4528 4.284 6.1308C4.545 5.8098 5.017 5.7588 5.339 6.0178L9.82 9.6298C10.383 10.0758 11.176 10.0758 11.743 9.6258L16.179 6.0198C16.501 5.7568 16.973 5.8068 17.235 6.1288Z" fill="white"/>
                    </svg>
                </>
            :null}
        </div>
    )
}
