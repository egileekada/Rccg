import React from 'react';
import Navbar from './Navbar';
import { Drawer, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

export default function Menu() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [tab, setTab] = React.useState('Home')
    const [dropDown, setDropDown] = React.useState(false)
    const navigate = useNavigate()

    const ClickHandler =(item: any)=> {
        setTab(item)
        localStorage.setItem('tab', item)
        onClose()
    }

    const TabHandler =(item: any)=> {
        setTab('History')
        localStorage.setItem('tab', 'History')
        localStorage.setItem('aboutus', item) 
        navigate('/aboutus')
        navigate(0)
    }

    return( 
        <div className='w-full relative' > 
            <Navbar open={onOpen} />  
            <div className=' lg:hidden flex' >
                <Drawer 
                    size='xs'
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}  > 
                    <DrawerContent> 
                        <div onClick={()=> onClose()} style={{width: '96px', height: '96px', backgroundColor: '#28166F'}} className=' cursor-pointer lg:hidden flex rounded-full text-white absolute -right-4 font-Poppins-Medium -top-4 flex justify-center items-center' >
                            <p>CLOSE</p>
                        </div>
                        <div className='mt-20 px-6' >
                            <Link to='/' onClick={()=> ClickHandler('Home')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >Home</p></Link>
                            <div onClick={()=> setDropDown((prev)=> !prev)} className=' flex items-center cursor-pointer relative font-Poppins-Medium py-2 my-2  mx-2 text-sm' >
                                <p style={{fontSize: '16px', color: '#28166F'}} >Who we are</p>
                                {!dropDown 
                                    ? 
                                        <svg className='ml-2' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1.5L6 6.5L1 1.5" stroke='#28166F' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    :
                                        <svg className='ml-2' width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.375 5.75L6 1.375L1.625 5.75" stroke='#28166F' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                }
                                </div> 
                                {dropDown ?
                                    <div className='mx-2' > 
                                        <p onClick={()=> TabHandler('History')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium py-2 my-2' >Our History</p>      
                                        <p onClick={()=> TabHandler('Mission')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium py-2 my-2' >Mission & Vision</p>
                                        <p onClick={()=> TabHandler('Beliefs')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium py-2 my-2' >Our Beliefs</p>                    
                                        <p onClick={()=> TabHandler('Structure')} style={{fontSize: '16px', color: 'black'}} className='font-Poppins-Medium py-2 my-2' >Our Structure</p> 
                                    </div> 
                                :null}
                            {/* <Link to='/devotion' onClick={()=> ClickHandler('Devotion')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >Who we are</p></Link> */}
                            <Link to='/devotion' onClick={()=> ClickHandler('Devotion')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >Devotion</p></Link>
                            <Link to='/officers' onClick={()=> ClickHandler('Officers')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >Officers</p></Link>
                            <Link to='/contactus' onClick={()=> ClickHandler('ContactUs')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >Speak with us</p></Link>
                            <Link to='/onlinegiving' onClick={()=> ClickHandler('Home')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >Give Online</p></Link>
                            <Link to='/attendance' onClick={()=> ClickHandler('Home')} ><p style={ {fontSize: '16px', color: '#28166F' }} className='font-Poppins-Medium py-2 my-2 mx-2' >The Week</p></Link>
                        </div> 
                    </DrawerContent>
                </Drawer>
            </div>
        </div> 
    );
}
