import React,{useEffect, useState} from 'react'
import SingleColor from './SingleColor';
import rgbToHex from './rgbToHex';
import Values from 'values.js';


function App() {

  const [color, setcolor] = useState('')
  const [list, setlist] = useState([])
  const [rgb, setrgb] = useState("")
 
useEffect(()=>{
  try{
    let colors = new Values(color).all(10)
    if(colors[1].alpha == 1){
      console.log(colors)
      setlist(colors)
      console.log(colors[10].rgb)
      setrgb(colors[10].rgb)
    }
else{
  setlist([])
}
  }catch(error){
    setlist([])
  }
},[color])


const handleInput = async(e) =>{
  setcolor(e.target.value)
}

const converter = (e) => {
  e.preventDefault()
  const rgbArray = rgb.split(',')
  const pass = rgbToHex(parseInt(rgbArray[0]),parseInt(rgbArray[1]),parseInt(rgbArray[2]))
 setcolor(pass)
}



  return (
    <div className="App">
    <div className="converter-box">
    <div className="converter">
              <h3>Rgb to hex converter</h3>
              <form onSubmit={converter}>
                 <input type="text" placeholder="255,255,255" value={rgb} onChange={(e) => setrgb(e.target.value)}></input>
                 <button className="btn">Convert</button>
              </form>
             
          </div>
    </div>

          <h3 className="heading">Color generator</h3>

          <div className="forms">
              <form>
                       <label>Hex: </label>
                       <input  
                              type="text" placeholder="#12e421"
                              value={color} 
                              onChange={handleInput}/>
               </form>

          </div>

          <div className="colors">
    {list.map((color,index)=>{
        const hex= color.hex;
        return(
          <SingleColor key={index} {...color} hexColor={hex} index={index} />
        )
    })}
</div>
    </div>

  );
}

export default App;
