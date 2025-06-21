import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

export default function App() {
  const [activeId, setActiveId] = useState("userMom");

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-gray-100">
      <div className="md:w-80 w-full h-1/3 md:h-full">
        <Sidebar activeId={activeId} onSelect={setActiveId} />
      </div>
      <div className="flex-1 h-2/3 md:h-full">
        <ChatWindow currentUserId="user123" />
      </div>
    </div>
  );
}
