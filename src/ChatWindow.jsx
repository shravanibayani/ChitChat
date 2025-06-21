import React, { useEffect, useRef } from "react";

const demoMessages = [
  {
    id: 1,
    senderId: "userMom",
    text: "Hey! How's the new project going?",
    time: "19:20",
  },
  {
    id: 2,
    senderId: "user123",
    text: "It's going really well! The design system is coming together nicely.",
    time: "19:25",
  },
  {
    id: 3,
    senderId: "userMom",
    text: "That's awesome! Can't wait to see what you've been working on 🌸",
    time: "19:30",
  },
  {
    id: 4,
    senderId: "user123",
    text: "I'll share some screenshots soon. The color palette turned out amazing!",
    time: "19:35",
  },
  {
    id: 5,
    senderId: "userMom",
    text: "Perfect! Also, are we still on for coffee tomorrow?",
    time: "20:18",
  },
];

const ChatWindow = ({ currentUserId = "user123" }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [demoMessages]);

  return (
    <section className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Mom"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <div>
            <div className="font-semibold text-gray-900">Mom</div>
            <div className="text-xs text-gray-400">Last seen recently</div>
          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <button className="hover:text-blue-500"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg></button>
          <button className="hover:text-blue-500"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 7 19.13a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3 15.87V15a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 5 13a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.87 7H9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 7a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19 11.13V11a2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 21 13a1.65 1.65 0 0 0 .33 1.82z"/></svg></button>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
  {demoMessages.map((msg) => (
    <div
      key={msg.id}
      className={`flex w-full ${msg.senderId === currentUserId ? "justify-end" : "justify-start"}`}
    >
      <div className="flex flex-col items-end">
        <div
          className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow-sm text-sm whitespace-pre-line ${
            msg.senderId === currentUserId
              ? "bg-blue-500 text-white rounded-br-md"
              : "bg-white text-gray-900 rounded-bl-md border"
          }`}
        >
          {msg.text}
        </div>
        <span className="text-xs text-gray-400 mt-1">
          {msg.time}
        </span>
      </div>
    </div>
  ))}
  <div ref={messagesEndRef} />
</div>

      {/* Input */}
      <form className="flex items-center gap-2 px-6 py-4 border-t border-gray-200 bg-white/80 backdrop-blur">
        <button type="button" className="text-2xl text-gray-400 hover:text-yellow-500">
          <span role="img" aria-label="emoji">😊</span>
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button type="submit" className="text-blue-500 hover:bg-blue-100 rounded-full p-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
        </button>
      </form>
    </section>
  );
};

export default ChatWindow; 