import React, {useState} from "react";
// import PropTypes from 'prop-types'

export default function TextForm(props)
{
    const [text, setText] = useState("Enter text here.");
    // setText(text);

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        console.log("Click on Uppercase button");
    }
    const handleOnchange = (event)=>{
        setText(event.target.value);
        console.log("Click on handleOnchange button");
    }
    return(
    <div  className="container my-3">

        <div className="mb-3">
            <h1>{props.heading} - to analyze below</h1>
            <textarea className="form-control mb-3" id="myBox" rows="10" value={text} onChange={handleOnchange}></textarea>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    </div>
    );
}