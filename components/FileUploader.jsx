"use client";
import { useState, useRef } from "react";

export default function FileUploader() {
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
        }
    };

    const removeFile = () => {
        setFile(null);
        inputRef.current.value = "";
    };

    return (
        <div>
            {/* Browse/Upload Links */}
            <div className="text-sm text-blue-600 space-x-1 flex justify-center">
                {/* <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="hover:underline"
                >
                    Browse existing files...
                </button> */}
                <span className="text-gray-500">Upload a</span>
                <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="hover:underline"
                >
                    Upload files
                </button>
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    name="imagesrc"
                    onChange={handleFileChange}
                />
            </div>

            {/* File Preview */}
            {file && (
                <div className="mt-4 flex items-center border border-gray-300 px-3 py-2 rounded-md w-full justify-between">
                    <div className="flex items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                            className="w-5 h-5 mr-2"
                            alt="file"
                        />
                        <span className="text-sm text-gray-800 max-w-[150px] truncate">
                            {file.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500">
                            {(file.size / 1024).toFixed(1)} KB
                        </span>
                    </div>
                    <button
                        onClick={removeFile}
                        className="ml-3 text-gray-500 hover:text-red-500"
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>
    );
}
