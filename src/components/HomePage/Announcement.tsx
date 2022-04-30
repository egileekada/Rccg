import React from 'react';
import Curve from '../../assets/images/curve.png'

export default function Announcement() {
    return(
        <div className='w-full lg:flex-row flex-col flex py-6 lg:pt-0 pt-14 items-center bg-white rounded-lg' >
            <div className=' w-80 flex justify-center items-center' >
                <div className='w-48 h-48 flex justify-center items-center rounded-full border border-gray-300' >
                    <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3033 87.8337L59.6033 81.7288C61.7697 87.637 56.5508 89.5079 57.5354 96.7944C57.9292 99.5516 59.9971 98.7638 61.1787 101.816L61.4742 109.3L67.6777 114.223C68.564 116.586 65.6098 119.344 65.6098 119.344C65.6098 119.344 59.1108 126.729 54.4827 125.941C47.9839 124.957 40.3033 87.8337 40.3033 87.8337Z" fill="#3E4E5C"/>
                        <path d="M57.5355 96.7944C56.6491 89.8031 61.1788 87.8337 59.8002 82.6147L47.7869 85.4705L40.3033 87.8337C40.3033 87.8337 40.5004 88.9167 40.9926 90.7876L57.9295 97.8774C57.7325 97.5822 57.634 97.2867 57.5355 96.7944Z" fill="#323E4A"/>
                        <path d="M14.3076 54.9449L24.7454 51.2031C24.8439 55.6342 26.6163 63.2163 29.6688 71.5862C32.7213 79.8576 36.3648 86.7504 39.3188 90.1969L28.881 93.9387C21.7912 96.4989 12.8305 89.8029 8.79317 79.0698C4.75586 68.2384 7.2178 57.5051 14.3076 54.9449Z" fill="#3E4E5C"/>
                        <path d="M84.7131 51.5973C76.3432 29.0478 73.586 8.7632 77.8203 3.24902C77.2295 3.83982 76.5402 4.62763 75.7524 5.80922C68.7611 16.1485 57.0432 38.4025 16.8678 52.7791V52.8776C14.4061 53.7639 15.7847 63.6107 19.9203 74.7378C24.0561 85.9632 29.3733 94.3331 31.835 93.447C72.0103 79.0704 95.6429 89.0159 107.853 92.4624C111.693 93.5455 113.86 92.1669 113.86 92.1669C107.459 94.6281 94.0675 76.6082 84.7131 51.5973Z" fill="#5992BD"/>
                        <path d="M75.9492 12.8002C76.9337 6.79344 77.2292 5.61185 77.623 3.74096L77.7215 3.44543C77.2293 4.03623 76.5399 4.72553 75.8506 5.80862C68.7608 16.1479 57.0429 38.4019 16.8676 52.7785V52.877C15.883 53.2708 15.489 55.0434 15.686 57.7019L18.9355 56.7173C55.9599 43.621 68.6626 23.7302 75.9492 12.8002Z" fill="#63A3D2"/>
                        <path d="M80.971 0.294722C73.1919 3.15044 74.275 26.0937 83.4327 51.4987C92.4919 76.9037 106.179 95.2191 113.958 92.2649C121.737 89.4091 120.654 66.4659 111.496 41.0609C102.339 15.6559 88.6516 -2.561 80.971 0.294722Z" fill="#487190"/>
                        <path d="M93.1812 61.3455C84.122 35.9405 83.0389 12.9972 90.7195 10.1415C92.3934 9.55069 94.2643 9.84596 96.3322 11.0278C90.621 3.05168 85.0083 -1.1824 80.971 0.294717C73.1919 3.15044 74.275 26.0937 83.4327 51.4987C90.621 71.5865 100.665 87.1445 108.345 91.3788C103.028 84.092 97.6123 73.5556 93.1812 61.3455Z" fill="#426885"/>
                        <path d="M81.168 41.1595C80.7743 41.258 80.4787 41.455 80.1835 41.5533C81.0698 44.8028 82.1529 48.0523 83.3345 51.4986C85.1068 56.4219 87.0762 61.1486 89.1441 65.4811C89.4397 65.3826 89.7349 65.2841 89.932 65.1856C96.5295 62.7239 99.9757 55.4371 97.6125 48.7414C95.1506 42.1441 87.864 38.6978 81.168 41.1595Z" fill="#EBEDEE"/>
                        <path d="M93.1812 61.3455C90.5225 54.0587 88.6516 46.9689 87.3715 40.4702C85.4021 40.1746 83.2357 40.3717 81.168 41.1595C80.7743 41.258 80.4787 41.455 80.1835 41.5532C81.0698 44.8028 82.1529 48.0523 83.3345 51.4985C85.1068 56.4219 87.0763 61.1485 89.1442 65.4811C89.4397 65.3826 89.735 65.2841 89.932 65.1856C91.4091 64.6933 92.6892 63.9055 93.7723 62.9209C93.5752 62.4289 93.3782 61.9363 93.1812 61.3455Z" fill="#D9DADB"/>
                    </svg>
                </div>
            </div>
            <div className='flex relative flex-col flex-1 p-6 lg:p-10 lg:ml-12' >
                <img className='absolute h-full hidden lg:flex top-0 right-0' src={Curve} alt='curve' />
                <div className='flex lg:flex-row flex-col items-center my-5' > 
                    <p style={{color:'#140457'}} className=' text-2xl z-30 font-Poppins-SemiBold' >Announcement</p>
                    <div className='lg:ml-auto lg:mt-0 mt-6 z-30' >
                        <p style={{color:'#525252'}} className=' text-sm z-30 font-Poppins-Regular' >Pst. Bright Bright</p>
                        <p style={{color:'#28166F'}} className=' text-xs z-30 font-Poppins-Regular mt-1 text-center lg:text-right' >Youth Pastor</p>
                    </div>
                </div>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className='z-30  font-Poppins-Regular mt-2 text-justify' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium. </p>
                <p style={{color:'rgba(71, 71, 71, 0.8)'}} className='z-30  font-Poppins-Regular mt-2 text-justify' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl habitasse consectetur felis nibh sed. Feugiat morbi eu quam massa. Ullamcorper elit vel id magna elementum. In consequat augue id placerat arcu pellentesque. Euismod aliquam, non hac dolor felis orci pretium.</p> 
            </div>
        </div>
    );
}
