"use client";

import { useState } from "react";

const users = [
  {
    name: "Abdullah Niaz",
    avatar: "/images/abdullah-avatar.jpg", // replace with actual path or external URL
  },
];

export default function AllUsersDropdown({ buttonContent }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleUser = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="relative inline-block text-left w-60">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full justify-between items-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
      >
        {buttonContent}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-2">
          <label className="flex items-center px-4 py-2 text-sm gap-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={selected.length === users.length}
              onChange={() =>
                setSelected(
                  selected.length === users.length
                    ? []
                    : users.map((u) => u.name)
                )
              }
            />
            All selected
          </label>

          {users.map((user) => (
            <label
              key={user.name}
              className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="accent-blue-500"
                checked={selected.includes(user.name)}
                onChange={() => toggleUser(user.name)}
              />
              <img
                src={user.avatar}
                alt={user.name}
                className="h-5 w-5 rounded-full object-cover"
              />
              {user.name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
