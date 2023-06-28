import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {

  // Logic
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const sendRequest = async () => {
    try {

      // Đang chờ API bên Backend hoàn thành
      const response = await axios.post('YOUR_SEND_API_URL', { text: inputText });
      const translationId = response.data.translationId;

      // Gọi API callback để lấy kết quả dịch
      getTranslationResult(translationId);
    } catch (error) {
      console.error(error);
    }
  };

  const getTranslationResult = async (translationId) => {
    try {
      const response = await axios.get(`YOUR_CALLBACK_API_URL/${translationId}`);
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };
  //
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="text-input">
            <textarea
              spellcheck="false"
              className="from-text"
              placeholder="Enter text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
            <textarea
              spellcheck="false"
              readonly
              disabled
              className="to-text"
              placeholder="Translation"
              value={translatedText}
            ></textarea>
          </div>
        </div>
        <button onClick={sendRequest}>TRANSLATE</button>
      </div>
    </>
  );
}

export default App;
