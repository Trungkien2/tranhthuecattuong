"use client";
import React from "react";

type Props = {};

function Subheader({}: Props) {
  return (
    <div className="h-34 max-w bg-black text-white text-xs px-7 py-2">
      <span> Hotline: 1900.636.000 (8:00 - 12:00, 13:30 - 17:00)</span>
      <a
        className="ml-4 pl-4 border-l border-[rgba(255, 255, 255, 0.4)]"
        href="#"
      >
        Liên hệ
      </a>
    </div>
  );
}

export default Subheader;
