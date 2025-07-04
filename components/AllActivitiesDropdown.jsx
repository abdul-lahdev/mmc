"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
// import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const standardActivities = [
  { label: "Notes", color: "bg-yellow-300" },
  { label: "Emails", color: "bg-blue-300" },
  { label: "SMS", color: "bg-teal-300" },
  { label: "Calls", color: "bg-green-300" },
  { label: "Meetings", color: "bg-purple-300" },
  { label: "Status Changes", color: "bg-green-100" },
];

const customActivities = [
  { label: "Custom Activity (Example)" },
  { label: "Disqualify (Example)" },
];

export default function AllActivitiesDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleItem = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="relative inline-block text-left w-72 h-[100%]">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#F8FAFC] inline-flex justify-between items-center text-[#62748E] text-[12px] font-[500] rounded-[60px] px-4 py-2 focus:outline-none"
      >
        All Activities
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M4 6L8 10L12 6"
            stroke="#62748E"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-4 max-h-96 overflow-y-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-3 px-2 py-1 border rounded text-sm focus:outline-none focus:ring"
          />

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <input type="checkbox" />
              All selected
            </label>

            {/* Standard */}
            <Disclosure defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full text-left text-gray-800 font-semibold">
                    Standard ({standardActivities.length})
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-3 mt-1 space-y-2">
                    {standardActivities.map((item) => (
                      <label
                        key={item.label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={selected.includes(item.label)}
                          onChange={() => toggleItem(item.label)}
                        />
                        <span
                          className={`w-3 h-3 rounded-full ${item.color}`}
                        ></span>
                        {item.label}
                      </label>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Custom */}
            <Disclosure defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full text-left text-gray-800 font-semibold mt-2">
                    Custom ({customActivities.length})
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-3 mt-1 space-y-2">
                    {customActivities.map((item) => (
                      <label
                        key={item.label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={selected.includes(item.label)}
                          onChange={() => toggleItem(item.label)}
                        />
                        {item.label}
                      </label>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      )}
    </div>
  );
}
