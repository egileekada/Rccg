import React from 'react';
import AnnouncementComponent from '../components/HomeComponents/AnnouncementComponent';
import DevotionComponent from '../components/HomeComponents/DevotionComponent';
import EventComponent from '../components/HomeComponents/EventComponent';
import QuoteComponent from '../components/HomeComponents/QuoteComponent';

export default function HomeScreen(props: any) {

    const [tab, setTab] = React.useState('0')
    React.useEffect(() => {
        props.hide(false)
    }, [props]) 

    React.useEffect(() => {
        if(!localStorage.getItem('tabscreen')){
            setTab('0')
            localStorage.setItem('tabscreen', '0')
            return
        }
        localStorage.setItem('tabscreen', tab+'')
        setTab(localStorage.getItem('tabscreen')+'')
    })

    const ClickHandler =(item: any)=> {
        setTab(item)
        localStorage.setItem('tabscreen', tab+'')
    }

    console.log(localStorage.getItem('tabscreen')+'')

    return (
        <div className='w-full h-full px-6 bg-white' >
            <div className='w-full flex text-sm pb-8 items-center' >
                <p onClick={()=> ClickHandler('0')} className={tab === '0' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Events</p>
                <p onClick={()=> ClickHandler('1')} className={tab === '1' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Devotion</p>
                <p onClick={()=> ClickHandler('2')} className={tab === '2' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Announcement</p>
                <p onClick={()=> ClickHandler('3')} className={tab === '3' ? 'text-white bg-active px-3 h-12 flex justify-center items-center rounded mx-4 cursor-pointer' : 'mx-4 cursor-pointer'} >Quotes</p>
            </div>
            <div className='w-full h-full px-4' >
                {tab === '0' ? 
                    <EventComponent />:
                        tab === '1' ? 
                            <DevotionComponent />:
                                tab === '2' ? 
                                    <AnnouncementComponent />:
                                        tab === '3' ? 
                                            <QuoteComponent />
                :null}
            </div>
        </div>
    );
}
