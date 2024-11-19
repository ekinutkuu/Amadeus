import React from "react";
import { useLocation } from 'react-router-dom';
import style from "./ChatPage.module.css";

const ChatPage = () => {
   const location = useLocation();
   const apiKey = location.state?.apiKey;

   return (
      <div className={style.container}>
         <h1 style={{color: "white"}}>{apiKey}</h1>
      </div>
   );
};

export default ChatPage;
