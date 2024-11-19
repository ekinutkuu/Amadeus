import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
   const navigate = useNavigate();
   const [apiKey, setApiKey] = useState('');

   const handleLogin = () => {
      navigate('/chat', { state: { apiKey } });
   };

   return (
      <div className={style.container}>
         <div className={style.amadeusLogo}></div>
         <div className={style.loginContainer}>
            <div className={style.inputContainer}>
               <label>USER ID</label>
               <input
                  type="text"
                  id="username"
                  value="Salieri"
                  placeholder="Enter your username"
               />
            </div>
            <div className={style.inputContainer}>
               <label>PASSWORD</label>
               <input
                  type="password"
                  id="password"
                  value={apiKey}
                  placeholder="Your Gemini API Key"
                  onChange={(e) => setApiKey(e.target.value)}
               />
               <button type="button" onClick={handleLogin}>
                  <FontAwesomeIcon icon={faArrowRight} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
