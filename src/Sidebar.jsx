import React from "react";

const contacts = [
  {
    id: "userMom",
    name: "Mom",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    lastMessage: "Don't forget dinner tonight",
    time: "2h ago",
    unread: 1,
  },
  {
    id: "userAlpha",
    name: "Team Alpha",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Meeting at 3pm today",
    time: "15m ago",
    unread: 2,
  },
  {
    id: "userSarah",
    name: "Sarah Chen",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    lastMessage: "Hey! How was your day?",
    time: "2m ago",
    unread: 0,
  },
  {
    id: "userAlex",
    name: "Alex Rivera",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    lastMessage: "Check out this design!",
    time: "1h ago",
    unread: 1,
  },
];

const Sidebar = ({ activeId, onSelect }) => (
  <aside className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
    <div className="text-3xl font-bold text-blue-600 px-6 py-4">ChitChat</div>
    <div className="p-4 border-b border-gray-100">
      <input
        type="text"
        placeholder="Search conversations..."
        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
    <ul className="flex-1 overflow-y-auto">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          onClick={() => onSelect(contact.id)}
          className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-blue-50 transition ${activeId === contact.id ? "bg-blue-100" : ""}`}
        >
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900 truncate">{contact.name}</span>
              <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">{contact.time}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-gray-500 truncate max-w-[120px]">{contact.lastMessage}</span>
              {contact.unread > 0 && (
                <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                  {contact.unread}
                </span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar; 