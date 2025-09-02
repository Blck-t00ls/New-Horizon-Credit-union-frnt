import { useState } from "react";

export default function UserProfileDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded">
        <span className="font-bold">User</span>
        <svg width="16" height="16" fill="currentColor" className="inline"><path d="M4 6l4 4 4-4"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-10">
          <ul className="py-2">
            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button></li>
            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button></li>
          </ul>
        </div>
      )}
    </div>
  );
}
