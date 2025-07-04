// components/DatePicker.js
import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DatePicker = ({ value, onChange, options = {} }) => {
  const inputRef = useRef();

  useEffect(() => {
    const picker = flatpickr(inputRef.current, {
      defaultDate: value,
      onChange: (selectedDates) => {
        if (onChange) {
          onChange(selectedDates[0]);
        }
      },
      ...options,
    });

    return () => picker.destroy(); // Cleanup
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      required
      name="dateVal"
      className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
      placeholder="Select date"
    />
  );
};

export default DatePicker;
