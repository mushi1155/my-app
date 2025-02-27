import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }



    const handleCopy=()=>{
        
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const[text , setText]= useState("");
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            

      
        </div>
        <div className='container' my-3 style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> It will take { 0.008 * text.split(" ").length} minutes to read this paragraph</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Enter something in the text book to preview it here"}</p>

        </div>
        </>
  )
}
