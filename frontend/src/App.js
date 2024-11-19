import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/login" element={<Login />} />
               <Route path="/chat" element={<ChatPage />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
