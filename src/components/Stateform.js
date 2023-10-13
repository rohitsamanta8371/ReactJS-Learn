import React, {useState} from 'react'

export default function Stateform(props) {
  const handleUpperCase=()=>{
    //alert("entered");
    let upperCase=text.toUpperCase();
    setText(upperCase);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleLowerCase=()=>{
    //alert("entered");
    let LowerCase=text.toLowerCase();
    setText(LowerCase);
    props.showAlert("Converted to Lower Case","success");
  };
  const handleReset=()=>{
    //alert("entered");
    if(!window.confirm("Do you want to clear the text area?")){
      props.showAlert("Text Area Clear Denied by You","danger");
      return false;
    }
    setText("");
    props.showAlert("Text Area Cleared","success");
  };
  // const handleCopy=() => {
  //   let text=document.getElementById("text1");
  //   //text.select();//select all text
  //   navigator.clipboard.writeText(text.value);//copy to clipboard
  //   props.showAlert("Text Coppied to Clipboard","success");
  // };
  async function handleCopy() {
    try {
      
      let text=document.getElementById("text1");
      //text.select();
      await navigator.clipboard.writeText(text.value);
      props.showAlert("Text Coppied to Clipboard","success");
      console.log('Text copied to clipboard.');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
  const handleSpaces=() => {
    const trimtext = text.trim();
    let newtext=trimtext.split(/[ ]+/);//making a array of words
    setText(newtext.join(" "));// joining words with spaces
    props.showAlert("Extra Spaces Removed","success");
  };
  const handleOnChange=(event) => {
    setText(event.target.value); // Update the text state with the textarea value
    //we can write in text area by using events
  };
  const[text,setText]=useState("");
  //text= "text here"; //wrong way state change
  //setText("setText here"); //correct way state change
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className={`form-control ${props.mode === 'light' ? 'black-placeholder' : 'white-placeholder'}`} style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}} placeholder="Enter Text Here" value={text} onChange={handleOnChange} id="text1" rows="6"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>LowerCase</button>
        <button className='btn btn-danger mx-1 my-1' onClick={handleReset}>Clear</button>
        <button className='btn btn-success mx-1 my-1' onClick={handleCopy}>Copy</button>
        <button className='btn btn-success mx-1 my-1' onClick={handleSpaces}>Check Space</button>

    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Text Summery</h1>
      <p>{text===''?0:text[text.length - 1]===' '?text.split(/[ ]+/).length-1:text.split(/[ ]+/).length} and {text.length} Charecters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
  )
}