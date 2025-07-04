// components/Tooltip.js
export default function Tooltip({ children, text, position = "top" }) {
  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative inline-block">
      {/* 👇 Give the child a "peer" class so we can hover it */}
      <div className="peer inline-block">{children}</div>

      {/* 👇 Tooltip only shows when hovering on peer (the avatar) */}
      <div
        className={`absolute hidden peer-hover:block px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-md z-50 whitespace-nowrap ${positionClasses[position]}`}
      >
        {text}
      </div>
    </div>
  );
}

// Its Usage code Here
//   <div className="p-10">
//         <Tooltip text="This is a tooltip!" position="top">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded">
//             Hover me
//           </button>
//         </Tooltip>
//       </div>
