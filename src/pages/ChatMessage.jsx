import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './ChatMessage.css';
import authService from "../../appwrite/auth";

const socket = io('http://localhost:4000', { autoConnect: false });

const ChatMessage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.connect();

    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    return () => {
      socket.disconnect();
      socket.off('chat message');
      socket.off('connect_error');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { msg: message, user: socket.id };
      socket.emit('send', newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
      console.log(messages);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return authService.getCurrentUser() ? (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.user === socket.id ? 'message-sent' : 'message-received bg-gray-100'
            }`}
          >
            {msg.msg}
            <div className="user-id">
              {msg.user === socket.id ? "You" : msg.user}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  ) : (
    <div className="text-xl font-serif text-blue-500 font-bold">
      Please Login First
    </div>
  );
};

export default ChatMessage;
