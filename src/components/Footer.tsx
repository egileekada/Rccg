import React from 'react'; 
import Logo from '../assets/images/logo.png'

export default function Footer() {
    return(
        <div className='w-full flex flex-col items-center py-20 justify-center bg-white ' >
            <div className='flex lg:flex-row flex-col items-center' >
                <img src={Logo} alt='logo' />
                <div className='lg:ml-4' > 
                    <p style={{color: '#262F56'}} className=' text-sm font-Poppins-Bold text-center lg:mt-0 mt-4 w-56' >THE REDEEMED CHRISTIAN CHURCH OF GOD</p>
                </div>
            </div> 
            <p style={{color: '#262F56'}} className=' text-sm my-10 font-Poppins-Regular lg:w-auto text-center lg:text-left w-56' >© Copyright RCCG 2021. All Right Reserved. Designed and Developed by Icoweb</p>
            <div className='flex items-center lg:mt-0 mt-4' >
                <div style={{border: '1px solid #3E4E5C'}} className='w-12 h-12 rounded-full p-3 cursor-pointer mx-3' >
                    <svg className='w-full h-full' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6666 6.82843C13.6666 10.4156 10.7364 13.3234 7.12118 13.3234C5.97345 13.3234 4.89524 13.0301 3.95717 12.5153L0.333313 13.6668L1.51479 10.1821C0.918793 9.20343 0.575533 8.05556 0.575533 6.82843C0.575533 3.24135 3.50605 0.333496 7.12118 0.333496C10.7367 0.333496 13.6666 3.24135 13.6666 6.82843ZM7.12118 1.36787C4.0865 1.36787 1.61805 3.8175 1.61805 6.82843C1.61805 8.0233 2.00753 9.12976 2.66635 10.03L1.97879 12.058L4.09361 11.3858C4.9625 11.9563 6.00338 12.289 7.12131 12.289C10.1555 12.289 12.6244 9.8397 12.6244 6.82876C12.6244 3.81779 10.1557 1.36787 7.12118 1.36787ZM10.4265 8.3243C10.386 8.2581 10.2792 8.2181 10.1189 8.13856C9.95838 8.05896 9.16931 7.67363 9.02265 7.62076C8.87551 7.5677 8.76825 7.54103 8.66145 7.7003C8.55465 7.8597 8.24711 8.2181 8.15331 8.3243C8.05971 8.43083 7.96618 8.44416 7.80558 8.36443C7.64531 8.2849 7.12845 8.11663 6.51551 7.57436C6.03865 7.15243 5.71658 6.63156 5.62294 6.47203C5.52946 6.31276 5.61317 6.2267 5.69331 6.14743C5.76558 6.07603 5.85391 5.9615 5.93405 5.86863C6.01451 5.77556 6.04118 5.70936 6.09438 5.60298C6.14811 5.49676 6.12131 5.40387 6.08105 5.32402C6.04105 5.24446 5.71985 4.46105 5.5862 4.14224C5.45257 3.82372 5.31909 3.87676 5.22531 3.87676C5.13183 3.87676 5.02472 3.86342 4.91776 3.86342C4.81079 3.86342 4.63687 3.90328 4.48976 4.06254C4.34279 4.22194 3.92843 4.60712 3.92843 5.39038C3.92843 6.17376 4.50309 6.9307 4.58353 7.03676C4.66369 7.14283 5.69318 8.8027 7.32425 9.44016C8.95551 10.0774 8.95551 9.86476 9.24978 9.8381C9.54371 9.81156 10.1988 9.45303 10.333 9.0815C10.4664 8.70936 10.4664 8.3907 10.4265 8.3243Z" fill="#262F56"/>
                    </svg>
                </div>
                <div style={{border: '1px solid #3E4E5C'}} className='w-12 h-12 rounded-full p-3 cursor-pointer flex items-center justify-center mx-3' >
                    <svg className='w-full h-auto' viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2602 0.742549C14.9455 0.927122 15.4859 1.4674 15.6703 2.15282C16.0131 3.40477 15.9999 6.01437 15.9999 6.01437C15.9999 6.01437 15.9999 8.6107 15.6705 9.86277C15.4859 10.548 14.9456 11.0884 14.2602 11.2729C13.0081 11.6025 8 11.6025 8 11.6025C8 11.6025 3.00487 11.6025 1.73974 11.2598C1.05432 11.0752 0.514036 10.5348 0.329467 9.84957C0 8.6107 0 6.00117 0 6.00117C0 6.00117 0 3.40477 0.329467 2.15282C0.513914 1.46752 1.0675 0.913936 1.73962 0.729489C2.99169 0.399902 7.99987 0.399902 7.99987 0.399902C7.99987 0.399902 13.0081 0.399902 14.2602 0.742549ZM10.5699 6.00124L6.40525 8.3999V3.60253L10.5699 6.00124Z" fill="#262F56"/>
                    </svg>
                </div>
                <div style={{border: '1px solid #3E4E5C'}} className='w-12 h-12 rounded-full p-3 cursor-pointer flex items-center justify-center mx-3' >
                    <svg className='w-auto h-full' viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.70861 0.669557L5.85708 0.666504C3.77701 0.666504 2.43274 2.08323 2.43274 4.27599V5.9402H0.571132C0.410265 5.9402 0.279999 6.07417 0.279999 6.23942V8.6507C0.279999 8.8159 0.410419 8.94977 0.571132 8.94977H2.43274V15.0341C2.43274 15.1994 2.56301 15.3332 2.72388 15.3332H5.15275C5.31361 15.3332 5.44388 15.1992 5.44388 15.0341V8.94977H7.62055C7.78141 8.94977 7.91168 8.8159 7.91168 8.6507L7.91255 6.23942C7.91255 6.16008 7.88181 6.08409 7.82728 6.02794C7.77281 5.97179 7.69855 5.9402 7.62128 5.9402H5.44388V4.52943C5.44388 3.85135 5.60115 3.50713 6.46108 3.50713L7.70835 3.50667C7.86901 3.50667 7.99928 3.3727 7.99928 3.20761V0.968617C7.99928 0.803677 7.86921 0.669864 7.70861 0.669557Z" fill="#262F56"/>
                    </svg>
                </div>
                <div style={{border: '1px solid #3E4E5C'}} className='w-12 h-12 rounded-full p-3 cursor-pointer flex items-center justify-center mx-3' >
                    <svg className='w-full h-full' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333344 7.00016C0.333344 4.20592 0.333344 2.80879 1.03362 1.84495C1.25977 1.53367 1.53352 1.25992 1.8448 1.03377C2.80864 0.333496 4.20576 0.333496 7.00001 0.333496C9.79428 0.333496 11.1914 0.333496 12.1552 1.03377C12.4665 1.25992 12.7403 1.53367 12.9664 1.84495C13.6667 2.80879 13.6667 4.20592 13.6667 7.00016C13.6667 9.79443 13.6667 11.1916 12.9664 12.1554C12.7403 12.4666 12.4665 12.7404 12.1552 12.9666C11.1914 13.6668 9.79428 13.6668 7.00001 13.6668C4.20576 13.6668 2.80864 13.6668 1.8448 12.9666C1.53352 12.7404 1.25977 12.4666 1.03362 12.1554C0.333344 11.1916 0.333344 9.79443 0.333344 7.00016ZM7.00001 3.47075C5.05089 3.47075 3.4706 5.05104 3.4706 7.00016C3.4706 8.9493 5.05089 10.5296 7.00001 10.5296C8.94914 10.5296 10.5294 8.9493 10.5294 7.00016C10.5294 5.05104 8.94914 3.47075 7.00001 3.47075ZM7.00001 9.20603C5.78414 9.20603 4.79413 8.21603 4.79413 7.00016C4.79413 5.78343 5.78414 4.79428 7.00001 4.79428C8.21588 4.79428 9.20588 5.78343 9.20588 7.00016C9.20588 8.21603 8.21588 9.20603 7.00001 9.20603ZM11.2644 3.20605C11.2644 3.46579 11.0539 3.67634 10.7941 3.67634C10.5344 3.67634 10.3238 3.46579 10.3238 3.20605C10.3238 2.94632 10.5344 2.73576 10.7941 2.73576C11.0539 2.73576 11.2644 2.94632 11.2644 3.20605Z" fill="#262F56"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}