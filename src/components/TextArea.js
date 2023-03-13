import React, {useState} from 'react';

export default function TextArea(props) {
    
    const[text,setText] = useState('enter text here');
    const[button,setButton] = useState('Upper-case');
    
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleLimitCheck =()=>{
      if(text.length>100)
      {
        alert("LIMIT EXCEEDS!")
      }
      else
      {
        alert("Limit doesn't exceed")
      }
    }
    const handleUpClick = ()=>{
        if(button==='Upper-case')
        {
            let newText=text.toUpperCase();
            setText(newText)
            setButton('Lower-case')
        }
        else{
            let newt=text.toLowerCase();
            setText(newt)
            setButton('Upper-case')
        }
    }
    const handleClear =()=>{
      setText("")
    }
    
  return (
    <>
    <div className="mb-3" style={props.Mystyle}>
        <h1 className='my-3'>{props.heading}</h1>
      
      <textarea className="form-control" id="box1" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:props.theme==='light'?'white':'grey'}}></textarea>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>{button}</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleLimitCheck}>Check limit</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear</button>
    </div>
    <div className='container' style={props.Mystyle}>
      <h1>Text Analysis</h1>
      <p>{text.split(" ").length} no. of words and {text.length} no. of characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    
    </>
  );
}
