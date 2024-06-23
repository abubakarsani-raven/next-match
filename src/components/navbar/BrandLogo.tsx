import React from 'react';

const Logo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* Rounded Background */}
        <rect x="0" y="0" width="24" height="24" rx="12" ry="12" fill="#f0f0f0" />

        {/* Random Geometric Pattern */}
        <circle cx="8" cy="8" r="2.5" fill="#ff6347" />
        <circle cx="16" cy="8" r="2.5" fill="#4682b4" />
        <rect x="10" y="14" width="4" height="4" fill="#32cd32" />
        <line x1="4" y1="4" x2="20" y2="20" stroke="#800080" strokeWidth="1.5" />
    </svg>
);

export default Logo;
