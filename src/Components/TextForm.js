import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const onUpperClick = () => {
        let newText
        if (text != null || undefined) {
            newText = text.toUpperCase()
            setText(newText)
        }
    }
    const onLowerClick = () => {
        let newText
        if (text != null || undefined) {
            newText = text.toLowerCase()
            setText(newText)
        }
    }
    const onClearClick = () => {
        setText("")
    }
    const onCapitalCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            let ren
            if (index > 1) {
                ren = text[index - 1]
                console.log(ren)
            }
            if (ren === " " || ren == "\n") {
                newtext += text[index].toUpperCase()
            }
            else if (index == 0) {
                newtext += text[index].toUpperCase()
            }
            else {
                newtext += text[index]
            }

        }
        setText(newtext)
    }
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) == 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }
    const onCopy = () => {
        if (text !==null || text==="") {
            var text = document.getElementById("myBox")
            text.select();
            navigator.clipboard.writeText(text.value)
        }
    }
    const onRemoveExtraSpaces=()=>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
    }
    const onTextAreaChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" class="form-label"></label> */}
                    <textarea className="form-control my-3" id="myBox" rows="8" value={text} onChange={onTextAreaChange} placeholder="Enter text here" style={{backgroundColor:props.mode==='light'?'white':'#324f5c', color:props.mode==='light'?'black':'white'}}></textarea>
                    <button className="btn btn-primary mx-1" onClick={onUpperClick}>Convert to UPPER CASE</button>
                    <button className="btn btn-primary mx-1" onClick={onLowerClick}>Convert to lower case</button>
                    <button className="btn btn-primary mx-1" onClick={onCapitalCase}>Capital Case</button>
                    <button className="btn btn-primary mx-1" onClick={onAlternatingCase}>aLtErNaTiNg cAsE</button>
                    <button className="btn btn-primary mx-1" onClick={onRemoveExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-success mx-1" onClick={onCopy}>Copy to clipboard</button>
                    <button className="btn btn-danger mx-1 my-1" onClick={onClearClick}>Clear text</button>
                </div>
            </div>
            <div className="container" style={{color:props.mode==='light'?'black':'#e3e3e3'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters {text.split("\n").length} breaks</p>
                <p>{(0.008 * text.length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something above to preview'}</p>
            </div>
        </>

    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: 'TextArea'
}