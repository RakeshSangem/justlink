import React from 'react';

export default function External({ className = 'w-3' }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path stroke="#fff" d="M10 .5h5.5m0 0V6m0-5.5l-8 8"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        d="M6.5 2.5h-4a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-4"
      ></path>
    </svg>
  );
}
