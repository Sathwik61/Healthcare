import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);
  const expiryDate = localStorage.getItem("expiryDate");
  const jwtToken = localStorage.getItem("jwtToken");
  if(!jwtToken){
    navigate("/signup");
  }
  if (expiryDate === "null") {
    navigate("/signup");
  }
  console.log(expiryDate);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
  if(!jwtToken){
    navigate("/signup");
  }
    scrollToBottom();
  }, [messages]);

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === "") return;

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const str_time = `${hour}:${minute}`;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user", time: str_time },
    ]);

    // Clear input field
    setInputText("");

    // Simulate chatbot reply after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello, I'm Chatbot", sender: "chatbot", time: str_time },
      ]);
    }, 500);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("expiryDate");
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="h-20 bg-gradient-to-r from-indigo-400 to-blue-600 flex items-center justify-between px-4">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png"
            alt="Chatbot"
            className="rounded-full h-8 w-8 mr-2"
          />
          <div>
            <span className="text-white font-bold text-sm">DuMMy DASHBOARD</span>
            <p className="text-xs text-white">Welcome to our DASHBOARD</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-white text-xs font-medium border border-white rounded-full px-4 py-1 hover:bg-white hover:text-blue-600 focus:outline-none transition duration-300"
        >
          Logout
        </button>
      </div>
      
      
    </div>
  );
};

export default Chatbot;
