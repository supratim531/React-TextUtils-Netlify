import PropTypes from 'prop-types'
import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
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
    let str = text;
    str = str.toLowerCase();
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++)
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    str = arr.join(' ');
    setText(str);
  };

  const clearOnClick = () => {
    let newText = '';
    setText(newText);
  };

  const copyOnClick = () => {
    let text = document.getElementById("textBox");
    try {
      navigator.clipboard.writeText(text.value).then(() => alert('Text copied'));
    } catch {
      console.log("Pass");
    }
    text.select();
  };

  const removeSpacesOnClick = () => {
    let newText = "";
    let arr = text.split(' ');
    arr.forEach(element => {
      if (element !== '')
        newText += element + ' ';
    });
    setText(newText);
  };

  let wordsCount = (text) => {
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
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCaseOnClick}>Convert to uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={lowerCaseOnClick}>Convert to lowercase</button>
      <button className="btn btn-danger" onClick={clearOnClick}>Clear text</button>
      <br />
      <button className="btn btn-success my-2" onClick={capitalizeOnClick}>Capitalize text</button>
      <button className="btn btn-warning mx-2" onClick={copyOnClick}>Copy to clipboard</button>
      <button className="btn btn-outline-primary" onClick={removeSpacesOnClick}>Remove spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <big><b>{wordsCount(text)}</b> {(wordsCount(text) <= 1) ? "word" : "words"} and <b>{text.length}</b> {(text.length <= 1) ? "character" : "characters"} (about to be reads in <i>{wordsCount(text) * 0.008} minutes</i>)</big>
    </div>
    <div className="container my-3">
      <h2 className="preview">Your Text Preview</h2>
      <pre><p style={{fontSize: "20px"}}>{(text === "") ? "No recent text" : text}</p></pre>
    </div>
  </>);
}

TextForm.propTypes = {
  heading: PropTypes.string
};
