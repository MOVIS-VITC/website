// components/EmployeeCardII.jsx
import { useState } from "react";
import Image from "next/image";

export default function EmployeeCardII({ name, link, dept, tagline, width = 300, height = 300 }) {
  const [showTagline, setShowTagline] = useState(false);

  return (
    <div 
      className="rounded-lg overflow-hidden cursor-pointer bg-neutral border border-border shadow-sm transition-all hover:shadow-md"
      onClick={() => setShowTagline(!showTagline)}
    >
      <div className="relative aspect-square mb-2">
        <Image 
          src={link} 
          alt={name} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold text-text">{name}</div>
        <div className="text-sm text-light">{dept}</div>
        
        {/* Expandable tagline section */}
        <div className={`overflow-hidden transition-all duration-300 mt-2 ${showTagline ? 'max-h-96' : 'max-h-0'}`}>
          <div className="text-sm text-light italic border-t border-border pt-2">
            {tagline}
          </div>
        </div>
        
        {/* Click indicator */}
        <div className="flex justify-end mt-1">
          <span className="text-xs text-textAlt">
            {showTagline ? "Click to collapse" : "Click to see more"}
          </span>
        </div>
      </div>
    </div>
  );
}