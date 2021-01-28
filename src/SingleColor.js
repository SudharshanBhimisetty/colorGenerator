import React,{ useState,useEffect} from 'react'
import rgbToHex from './utils'




const SingleColor = ({rgb,weight,index,hexColor}) => {

    const [alert,setalert] = useState(false);
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`
    useEffect(()=>{
const timeout = setTimeout(()=>{
setalert(false)
},3000)
return() => clearTimeout(timeout)
    },[alert])
    return (
        <div className ={`${index > 10 && 'color-light'} each-color`}
             style={{ backgroundColor: `rgb(${bcg})`}}
             onClick={() => {
                 setalert(true);
                 navigator.clipboard.writeText(hexValue)
             }}
              >
            <p>{weight}% {index > 10?" darker" : " lighter"}</p>
            <p>{hexValue}</p>
            <p>rgb({bcg})</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </div>
    )
}

export default SingleColor
