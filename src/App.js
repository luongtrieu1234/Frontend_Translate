import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Translation() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.post('http://localhost:5000/en-to-vi/?message=&fbclid=IwAR0dPUmLlPOiiR-azsp5PiRz1GvufcBkvXcd_xx--1nnE6RCyehuiMSvEws', { text: inputText });
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="text-input">
            <textarea
              spellCheck="false"
              className="from-text"
              placeholder="Enter text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
            <textarea
              spellCheck="false"
              readOnly
              disabled
              className="to-text"
              placeholder="Translation"
              value={translatedText}
            ></textarea>
          </div>
        </div>
        <button onClick={translateText}>TRANSLATE</button>
      </div>
    </>
  );
}

export default Translation;