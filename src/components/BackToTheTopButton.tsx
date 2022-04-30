import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function BackToTheTopButton() {
    const [showScroll, setShowScroll] = React.useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', checkScrollTop)
    }

    return(
        <div style={{display: showScroll ? 'flex' : 'none'}} className='rounded-full fixed z-50 '>
            <button  onClick={scrollTop} style={{ backgroundColor: '#F6F6F6'}} className=' w-14 h-14 rounded-full items-center flex justify-center fixed lg:bottom-24 lg:right-24 right-8 bottom-10 font-Poppins-Reglar text-sm ' >
                <IoIosArrowUp color='#262F56' className='w-8 h-8'  />
            </button> 
        </div>
    );
}
