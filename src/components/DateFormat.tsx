import React from 'react'

export default function DateFormat(item: any) {
    var date = new Date(item);
    let string = date+''   // -> "2/1/2013" 
    return( 
        <p className=' font-Montserrat-Medium ' >{string.substr(3, 5)}</p>
    )
} 