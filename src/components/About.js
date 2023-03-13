import React, {useState} from 'react';

export default function About(props) {
    const[myStyle,setMyStyle]=useState(
        {
            color:'black',
            backgroundColor:'white',
        }
    );
    const[button,setButton]=useState('darkMode');
    const toggleStyle=()=>{
        if(myStyle.color==='black')
        {
            setMyStyle(
                {
                    color:'white',
                    backgroundColor:'black',
                    border: '1px solid white',
                }
            );
            setButton('lightMode');
        }
        else{
            setMyStyle(
                {
                    color:'black',
                    backgroundColor:'white',
                }
            );
            setButton('darkMode');
        }
    }

  return (
    <div className='container'>
        <hr/>
        <h1 className='container'style={props.Mystyle}>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={props.Mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" style={props.Mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" style={props.Mystyle} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={props.Mystyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={props.Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" style={props.Mystyle} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={props.Mystyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={props.Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" style={props.Mystyle} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className='container my-3'>
<button type="button" className="btn btn-primary" onClick={toggleStyle}>{button}</button>
</div>
    </div>
  );
}
