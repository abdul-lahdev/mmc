import React, { useRef, useState, useEffect } from "react";

const CommentDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [comments, setComments] = useState([
        { id: 1, name: "Abdullah Niaz", time: "Just now", text: "hello Buddy" },
        { id: 2, name: "Abdullah Niaz", time: "Just now", text: "something" },
    ]);
    const [newComment, setNewComment] = useState("");
    const [editId, setEditId] = useState(null);
    const [editInput, setEditInput] = useState("");

    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);
    const [dropdownPos, setDropdownPos] = useState("right-0");

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const newEntry = {
            id: Date.now(),
            name: "Abdullah Niaz",
            time: "Just now",
            text: newComment,
        };
        setComments([...comments, newEntry]);
        setNewComment("");
    };

    const handleSaveEdit = (id) => {
        if (editInput.trim() === "") return;
        setComments((prev) =>
            prev.map((comment) =>
                comment.id === id ? { ...comment, text: editInput } : comment
            )
        );
        setEditId(null);
        setEditInput("");
    };

    const handleDeleteComment = (id) => {
        setComments((prev) => prev.filter((comment) => comment.id !== id));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                setEditId(null);
                setEditInput("");
            }
        };

        const adjustDropdownPosition = () => {
            if (!buttonRef.current) return;
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            if (windowWidth - buttonRect.right < 300) {
                setDropdownPos("right-0");
            } else {
                setDropdownPos("right-0");
            }
        };

        if (isOpen) {
            adjustDropdownPosition();
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left">
            {/* Button */}
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-sm text-gray-700 hover:text-black relative"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.33333 10.3333H12M9.33333 12.6667H14M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7981 6.15582 13.5598 6.43871 14.2563C6.49285 14.3897 6.51992 14.4563 6.532 14.5102C6.54381 14.5629 6.54813 14.6019 6.54814 14.6559C6.54814 14.7111 6.53812 14.7713 6.51807 14.8916L6.12275 17.2635C6.08135 17.5119 6.06065 17.6361 6.09917 17.7259C6.13289 17.8045 6.19552 17.8671 6.27412 17.9008C6.36393 17.9393 6.48812 17.9186 6.73651 17.8772L9.10843 17.4819C9.22872 17.4619 9.28887 17.4519 9.34409 17.4519C9.3981 17.4519 9.43711 17.4562 9.48981 17.468C9.54369 17.4801 9.61035 17.5072 9.74366 17.5613C10.4402 17.8442 11.2019 18 12 18Z"
                        stroke="#90A1B9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="bg-blue-500 text-white text-xs rounded-full px-1 absolute top-0 left-0 text-[10px] flex items-center justify-center w-[14px] h-[14px] translate-x-2">
                    {comments.length}
                </span>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className={`absolute z-10 mt-2 w-80 origin-top rounded-md bg-white shadow-lg border border-gray-200 ${dropdownPos}`}
                >
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium">
                                {comments.length} comments
                            </h3>
                            <button
                                className="text-gray-400 hover:text-gray-600"
                                onClick={() => setIsOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                            {comments.map((comment) => (
                                <div key={comment.id} className={` gap-2 justify-between ${editId === comment.id ? 'flex-col' : 'flex'}`}>
                                    {editId === comment.id ? (
                                        <>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-white">
                                                    AN
                                                </div>
                                                <input
                                                    type="text"
                                                    value={editInput}
                                                    onChange={(e) => setEditInput(e.target.value)}
                                                    className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="flex justify-end gap-3">
                                                <button
                                                    onClick={() => {
                                                        setEditId(null);
                                                        setEditInput("");
                                                    }}
                                                    className="text-sm text-gray-500 hover:underline"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => handleSaveEdit(comment.id)}
                                                    className="text-sm text-blue-600 hover:underline"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-[2rem_1fr] gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-white">
                                                    AN
                                                </div>
                                                <div>
                                                    <div className="flex items-center text-sm font-semibold text-gray-800">
                                                        {comment.name}
                                                        <span className="text-xs font-normal text-gray-500 ml-2">
                                                            {comment.time}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-gray-700">
                                                        {comment.text}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end items-center  mt-1">
                                                <button
                                                    onClick={() => {
                                                        setEditId(comment.id);
                                                        setEditInput(comment.text);
                                                    }}
                                                >
                                                    <svg width="24" height="24" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.2942 7.95881C13.5533 7.63559 13.5013 7.16358 13.178 6.90453C12.8548 6.64549 12.3828 6.6975 12.1238 7.02072L13.2942 7.95881ZM6.811 14.8488L7.37903 15.3385C7.38489 15.3317 7.39062 15.3248 7.39623 15.3178L6.811 14.8488ZM6.64 15.2668L5.89146 15.2179L5.8908 15.2321L6.64 15.2668ZM6.5 18.2898L5.7508 18.2551C5.74908 18.2923 5.75013 18.3296 5.75396 18.3667L6.5 18.2898ZM7.287 18.9768L7.31152 19.7264C7.36154 19.7247 7.41126 19.7181 7.45996 19.7065L7.287 18.9768ZM10.287 18.2658L10.46 18.9956L10.4716 18.9927L10.287 18.2658ZM10.672 18.0218L11.2506 18.4991L11.2571 18.491L10.672 18.0218ZM17.2971 10.959C17.5562 10.6358 17.5043 10.1638 17.1812 9.90466C16.8581 9.64552 16.386 9.69742 16.1269 10.0206L17.2971 10.959ZM12.1269 7.02052C11.8678 7.34365 11.9196 7.81568 12.2428 8.07484C12.5659 8.33399 13.0379 8.28213 13.2971 7.95901L12.1269 7.02052ZM14.3 5.50976L14.8851 5.97901C14.8949 5.96672 14.9044 5.95412 14.9135 5.94123L14.3 5.50976ZM15.929 5.18976L16.4088 4.61332C16.3849 4.59344 16.3598 4.57507 16.3337 4.5583L15.929 5.18976ZM18.166 7.05176L18.6968 6.52192C18.6805 6.50561 18.6635 6.49007 18.6458 6.47532L18.166 7.05176ZM18.5029 7.87264L19.2529 7.87676V7.87676L18.5029 7.87264ZM18.157 8.68976L17.632 8.15412C17.6108 8.17496 17.5908 8.19704 17.5721 8.22025L18.157 8.68976ZM16.1271 10.0203C15.8678 10.3433 15.9195 10.8153 16.2425 11.0746C16.5655 11.3339 17.0376 11.2823 17.2969 10.9593L16.1271 10.0203ZM13.4537 7.37862C13.3923 6.96898 13.0105 6.68666 12.6009 6.74805C12.1912 6.80943 11.9089 7.19127 11.9703 7.60091L13.4537 7.37862ZM16.813 11.2329C17.2234 11.1772 17.5109 10.7992 17.4552 10.3888C17.3994 9.97834 17.0215 9.69082 16.611 9.74659L16.813 11.2329ZM12.1238 7.02072L6.22577 14.3797L7.39623 15.3178L13.2942 7.95881L12.1238 7.02072ZM6.24297 14.359C6.03561 14.5995 5.91226 14.9011 5.89159 15.218L7.38841 15.3156C7.38786 15.324 7.38457 15.3321 7.37903 15.3385L6.24297 14.359ZM5.8908 15.2321L5.7508 18.2551L7.2492 18.3245L7.3892 15.3015L5.8908 15.2321ZM5.75396 18.3667C5.83563 19.1586 6.51588 19.7524 7.31152 19.7264L7.26248 18.2272C7.25928 18.2273 7.25771 18.2268 7.25669 18.2264C7.25526 18.2259 7.25337 18.2249 7.25144 18.2232C7.2495 18.2215 7.24825 18.2198 7.24754 18.2185C7.24703 18.2175 7.24637 18.216 7.24604 18.2128L5.75396 18.3667ZM7.45996 19.7065L10.46 18.9955L10.114 17.536L7.11404 18.247L7.45996 19.7065ZM10.4716 18.9927C10.7771 18.9151 11.05 18.7422 11.2506 18.499L10.0934 17.5445C10.0958 17.5417 10.0989 17.5397 10.1024 17.5388L10.4716 18.9927ZM11.2571 18.491L17.2971 10.959L16.1269 10.0206L10.0869 17.5526L11.2571 18.491ZM13.2971 7.95901L14.8851 5.97901L13.7149 5.04052L12.1269 7.02052L13.2971 7.95901ZM14.9135 5.94123C15.0521 5.74411 15.3214 5.6912 15.5243 5.82123L16.3337 4.5583C15.4544 3.99484 14.2873 4.2241 13.6865 5.0783L14.9135 5.94123ZM15.4492 5.7662L17.6862 7.6282L18.6458 6.47532L16.4088 4.61332L15.4492 5.7662ZM17.6352 7.58161C17.7111 7.6577 17.7535 7.761 17.7529 7.86852L19.2529 7.87676C19.2557 7.36905 19.0555 6.88127 18.6968 6.52192L17.6352 7.58161ZM17.7529 7.86852C17.7524 7.97604 17.7088 8.07886 17.632 8.15412L18.682 9.22541C19.0446 8.87002 19.2501 8.38447 19.2529 7.87676L17.7529 7.86852ZM17.5721 8.22025L16.1271 10.0203L17.2969 10.9593L18.7419 9.15928L17.5721 8.22025ZM11.9703 7.60091C12.3196 9.93221 14.4771 11.5503 16.813 11.2329L16.611 9.74659C15.0881 9.95352 13.6815 8.89855 13.4537 7.37862L11.9703 7.60091Z" fill="#000000" /> </svg>
                                                </button>
                                                <button onClick={() => handleDeleteComment(comment.id)}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 6H14M6 8H18M16.6667 8L16.1991 15.0129C16.129 16.065 16.0939 16.5911 15.8667 16.99C15.6666 17.3412 15.3648 17.6235 15.0011 17.7998C14.588 18 14.0607 18 13.0062 18H10.9938C9.93927 18 9.41202 18 8.99889 17.7998C8.63517 17.6235 8.33339 17.3412 8.13332 16.99C7.90607 16.5911 7.871 16.065 7.80086 15.0129L7.33333 8M10.6667 11V14.3333M13.3333 11V14.3333" stroke="#FF6467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Comment input */}
                        <div className="mt-4 flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-white">
                                AN
                            </div>
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment"
                                className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleAddComment();
                                }}
                            />
                        </div>
                        <div className="flex justify-end gap-2 mt-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                type="button"
                                className="text-[12px] font-bold px-4 py-2 rounded-full border border-[#F1F5F9] bg-[#F8FAFC] text-[#62748E] hover:bg-[#e5e5e5]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddComment}
                                className="text-[12px] font-bold px-4 py-2 rounded-full bg-[#2B7FFF] text-white hover:bg-[#2873e6]"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommentDropdown;
