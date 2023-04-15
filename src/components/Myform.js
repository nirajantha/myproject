import React, {useState}from 'react'
import PropTypes from 'prop-types'
export default function Myform(props) { 
  const handleUpClicke = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); 
  }
  const handlelowClicke = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText); 
  }

  const handleClearClicke = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = ""

    setText(newText); 
  }
  const handleOnChange = (event)=>{
    // console.log("On Changed");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    console.log("i am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
   const [text, setText] = useState('')
  return (
    <>
    <div className='box' style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1>{props.heading}</h1>
    <div clssName="mb-3">
     <textarea clssName="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClicke}>covert to uppercase</button>
    <button className="btn btn-primary" onClick={handlelowClicke}>covert to lowercasae</button>
    <button className="btn btn-primary" onClick={handleClearClicke}>clear</button>
    <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
    </div>

    <div className="copy" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>the text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 *text.split(" ").length}minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>

    </div>
    </>
  ) 
}
 