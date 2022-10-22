import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const upperCaseOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const capitalizeOnClick = () => {
    let newText = text;
    newText = newText.toLowerCase();
    const arr = newText.split(' ');
    for (var i = 0; i < arr.length; i++)
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    newText = arr.join(' ');
    setText(newText);
  };

  const clearOnClick = () => {
    let newText = '';
    setText(newText);
  };

  const copyOnClick = () => {
    let textElement = document.getElementById("textBox");
    textElement.select();
    document.execCommand("copy");
    props.showAlert("info", "Text Copied to Clipboard");
  };

  const removeSpacesOnClick = () => {
    let newText = '';
    let arr = text.split(' ');
    arr.forEach(element => {
      if (element !== '')
        newText += element + ' ';
    });
    setText(newText.trimEnd());
  };

  const wordsCount = (text) => {
    let count = 0;
    let arr = text.split(' ');
    arr.forEach(element => {
      if (element !== '')
        count++;
    });
    return count;
  };

  return (<>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={(props.mode === "light") ? {backgroundColor: "white"} : {backgroundColor: "rgb(30, 50, 50)", color: "white"}} value={text} onChange={handleOnChange} id="textBox" rows="10"></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary" onClick={upperCaseOnClick}>Convert to uppercase</button>
      <br />
      <button disabled={text.length === 0} className="btn btn-secondary my-2" onClick={lowerCaseOnClick}>Convert to lowercase</button>
      <button disabled={text.length === 0} className="btn btn-danger mx-2" onClick={clearOnClick}>Clear text</button>
      <br />
      <button disabled={text.length === 0} className="btn btn-success" onClick={capitalizeOnClick}>Capitalize text</button>
      <button disabled={text.length === 0} className="btn btn-warning mx-2" onClick={copyOnClick}>Copy to clipboard</button>
      <br />
      <button disabled={text.length === 0 || (text.indexOf("  ") === -1 && text.indexOf(' ') !== 0)} className={`btn btn-outline-${(props.mode === "dark") ? "light" : "primary"} my-2`} onClick={removeSpacesOnClick}>Remove extra spaces</button>
      <hr />
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <big><b>{wordsCount(text)}</b> {(wordsCount(text) <= 1) ? "word" : "words"} and <b>{text.length}</b> {(text.length <= 1) ? "character" : "characters"} (about to be reads in <i>{wordsCount(text) * 0.008} minutes</i>)</big>
    </div>
    <div className="container my-3">
      <h2 className={(props.mode === "dark") ? "text-warning" : "preview"}>Text Preview</h2>
      <pre><p style={{fontSize: "18px", fontFamily: "fira code", opacity: (text === '') ? "55%" : "100%"}}>{(text === '') ? "Enter something in the textbox to preview it here." : text}</p></pre>
    </div>
  </>);
}

TextForm.defaultProps = {
  heading: "Enter Text To Analyze"
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
};
