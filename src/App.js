import React,{useEffect, useState} from 'react'
import SingleColor from './SingleColor';

import Values from 'values.js';


function App() {

  const [color, setcolor] = useState('')
  const [error, seterror] = useState(false)
  const [list, setlist] = useState([])

useEffect(()=>{
  try{
    let colors = new Values(color).all(10)
    if(colors[1].alpha == 1){
      console.log(colors)
      setlist(colors)
      seterror(false)
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
