import React from 'react';
import AnnouncementComponent from '../components/HomeComponents/AnnouncementComponent';
import DevotionComponent from '../components/HomeComponents/DevotionComponent';
import EventComponent from '../components/HomeComponents/EventComponent';
import QuoteComponent from '../components/HomeComponents/QuoteComponent';

import { useNavigate } from 'react-router-dom'
import Youtube from '../components/HomeComponents/Youtube';
import PodCodComponent from '../components/HomeComponents/PodCodComponent';

export default function HomeScreen(props: any) {

    const [tab, setTab] = React.useState('0') 
    const navigate = useNavigate()
    React.useEffect(() => {
        props.hide(false)
    }, [props])  

    React.useEffect(() => {    
        if(!sessionStorage.getItem('token')){
            navigate('/')
        }

        if(localStorage.getItem('tabscreen')+'' === '0'){
            setTab('0')
        } else if(localStorage.getItem('tabscreen')+'' === '1'){
            setTab('1')
        } else if(localStorage.getItem('tabscreen')+'' === '2'){
            setTab('2')
        } else if(localStorage.getItem('tabscreen')+'' === '3'){
            setTab('3')
        }  
    },[navigate]);  

    React.useEffect(() => { 
        if(!localStorage.getItem('tabscreen')){
            setTab('0')
            localStorage.setItem('tabscreen', '0')
            return
        } 
        setTab(localStorage.getItem('tabscreen')+'')
        // localStorage.setItem('tabscreen', tab)
    },[])

    React.useEffect(() => { 
        localStorage.setItem('tabscreen', tab+'')
    },[tab])

    const ClickHandler =(item: any)=> {
        setTab(item)
        localStorage.setItem('tabscreen', item+'')
    } 

    return (
        <div className='w-full h-full px-6 bg-white' >
            <div className='w-full flex text-sm pb-8 items-center' >
                <p onClick={()=> ClickHandler('0')} className={tab === '0' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Events</p>
                <p onClick={()=> ClickHandler('1')} className={tab === '1' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Devotion</p>
                <p onClick={()=> ClickHandler('2')} className={tab === '2' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Announcement</p>
                <p onClick={()=> ClickHandler('3')} className={tab === '3' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Quotes</p>
                <p onClick={()=> ClickHandler('4')} className={tab === '4' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >YouTube</p>
                <p onClick={()=> ClickHandler('5')} className={tab === '5' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >PodCast</p>
            </div>
            <div className='w-full h-full px-4' >
                {tab === '0' ? 
                    <EventComponent />:
                        tab === '1' ? 
                            <DevotionComponent />:
                                tab === '2' ? 
                                    <AnnouncementComponent />:
                                        tab === '3' ? 
                                            <QuoteComponent />:
                                                tab === '4' ? 
                                                    <Youtube />:
                                                        tab === '5' ? 
                                                            <PodCodComponent />
                :null}
            </div>
        </div>
    );
}
