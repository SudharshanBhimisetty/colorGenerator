import React,{useEffect, useState} from 'react'
import SingleColor from './SingleColor';
// import hexToRgb from './hexToRgb.js';
import Values from 'values.js';


function App() {

  const [color, setcolor] = useState('')
  const [error, seterror] = useState(false)
  const [list, setlist] = useState([])


/* const conversion = () => {
 const rgbColor =  hexToRgb(color)
 if(rgbColor != null){
   console.log(rgbColor.r + "," + rgbColor.g + "," + rgbColor.b)
   return rgbColor.r + "," + rgbColor.g + "," + rgbColor.b
 }else{
   return ""
 }

} */

useEffect(()=>{
  try{
    let colors = new Values(color).all(10)
    if(colors[1].alpha == 1){
      console.log(colors)
      setlist(colors)
      seterror(false)
    }
else{
  // seterror(true)
  setlist([])
}
  }catch(error){
    // seterror(true)
    setlist([])
  }

},[color])

const handleInput = async(e) =>{
  setcolor(e.target.value)
}




  return (
    <div className="App">
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
