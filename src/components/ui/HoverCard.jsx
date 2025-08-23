import React, { useState } from "react";

export const HoverCard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Clone children and pass isOpen */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen })
      )}
    </div>
  );
};

export const HoverCardTrigger = ({ children }) => {
  return <div className="cursor-pointer">{children}</div>;
};

export const HoverCardContent = ({ children, isOpen, className = "" }) => {
  return (
    <div
      className={`absolute z-50 bg-[#000080] text-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm text-gray-700 whitespace-nowrap transition-opacity duration-200 
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} ${className}`}
      style={{
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: "8px",
      }}
    >
      {children}
      {/* little arrow */}
      <div
        className="absolute w-2 h-2 bg-white border-l border-t border-gray-200 transform rotate-45"
        style={{
          top: "-6px",
          left: "50%",
          transform: "translateX(-50%) rotate(45deg)",
        }}
      />
    </div>
  );
};
