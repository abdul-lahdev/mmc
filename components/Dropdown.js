
import { useState, useRef, useEffect } from 'react';

export default function DropdownCheckboxMenu({ label = 'Select', options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleChange = (item) => {
    if (item === 'All') {
      const isAllSelected = selectedItems.includes('All');
      setSelectedItems(isAllSelected ? [] : [...options]);
    } else {
      let updated = selectedItems.includes(item)
        ? selectedItems.filter(i => i !== item && i !== 'All')
        : [...selectedItems.filter(i => i !== 'All'), item];

      const allWithoutAll = options.filter(i => i !== 'All');
      if (allWithoutAll.every(i => updated.includes(i))) {
        updated = ['All', ...allWithoutAll];
      }

      setSelectedItems(updated);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-white flex justify-between items-center dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm px-4 py-2 rounded-md shadow-sm w-52 text-left text-gray-700 dark:text-gray-200"
      >
        {/* {selectedItems.length > 0 ? selectedItems.join(', ') : label} */}
        {label}
        <i className="fas fa-chevron-down text-sm ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 max-h-60 overflow-y-auto">
          {options.map((item) => (
            <label
              key={item}
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleChange(item)}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
