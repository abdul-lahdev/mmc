// components/FieldDropdown.tsx
import { useState } from "react";

const availableFields = [
    "Product Type",
    "Product Tier",
    "Contract Link",
    "Tracking ID",
    "Discount",
];

export default function FieldDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedFields, setSelectedFields] = useState([]);

    const toggleField = (field) => {
        if (selectedFields.includes(field)) {
            setSelectedFields(selectedFields.filter(f => f !== field));
        } else {
            setSelectedFields([...selectedFields, field]);
        }
    };

    return (
        <div className="relative w-[300px]">
            {/* Add Button */}
            <button
                onClick={() => setShowDropdown(prev => !prev)}
                className="text-blue-600 underline mb-2"
            >
                + Add a new field
            </button>

            {/* Dropdown */}
            {showDropdown && (
                <div className="absolute z-10 w-full bg-white border rounded shadow-md">
                    {availableFields.map(field => (
                        <div
                            key={field}
                            onClick={() => toggleField(field)}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {selectedFields.includes(field) ? (
                                <span className="text-green-600 font-bold">✔</span>
                            ) : (
                                <span className="text-gray-400">○</span>
                            )}
                            <span>{field}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Render Selected Fields Below (Optional) */}
            <div className="mt-4">
                {selectedFields.map(field => (
                    <div
                        key={field}
                        className="flex justify-between items-center border px-3 py-2 rounded mb-2 bg-gray-50"
                    >
                        <span>{field}</span>
                        <button
                            onClick={() => toggleField(field)}
                            className="text-red-500 hover:text-red-700"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
