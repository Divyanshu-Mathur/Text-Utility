import React, { useState } from 'react'
import "./style.css"
export default function TextForm(props) {

  const [fontStyle, setFontStyle] = useState('Arial');
  const FontStyleChange = (event) => {
    setFontStyle(event.target.value);
  };
  const UpperCase = () => {
    console.log("Upper case was clicked.");
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPER case", "success");
  }
  const LowerCase = () => {
    console.log("Lower case was clicked.");
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "success");
  }
  const Clear = () => {
    setText("");
    props.showAlert("Cleared the text area", "success");
  }

  const CopyClip = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard", "success");
  }
  const HandleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container'>
        <form>
          <h3>{props.title}</h3>
          <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={HandleOnChange} rows={8} style={{ fontFamily: fontStyle, backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }}></textarea>
          </div>
          <button disabled={text.length === 0} type='button' className=" btn btn-outline-danger mx-2 my-1" onClick={UpperCase} style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }}>Convert to upper case</button>
          <button disabled={text.length === 0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={LowerCase} style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }}>Convert to Lower case</button>
          <button disabled={text.length === 0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={Clear} style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }}>Clear Text</button>
          <button disabled={text.length === 0} type='button' className="btn btn-outline-danger mx-2 my-1" onClick={CopyClip} style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }}>Copy to Clipboard</button>

          <br />

          <label className='label' style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white' }} htmlFor="fontStyle">Choose a font style:</label>
          <select style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} disabled={text.length === 0} id="fontStyle" className=" btn-outline-danger mx-2 my-1" value={fontStyle} onChange={FontStyleChange}>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Arial">Arial</option>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Times New Roman">Times New Roman</option>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Calibri">Calibri</option>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Algerian">Algerian</option>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Verdana">Verdana</option>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Georgia">Georgia</option>
            <option style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value="Courier New">Courier New</option>

          </select>
        </form>
      </div >
      <div className="container my-3">
        <h4>Your text summary: </h4>
        <p>word count: {text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
        <p>Character count: {text.length}</p>
        <p>Time to read: {0.008 * (text.split(" ").length - 1)}</p>
        <h4>Text preview: </h4>
        <p>{text.length > 0 ? text : "Enter text to preview."}</p>

      </div>
    </>
  )
}

