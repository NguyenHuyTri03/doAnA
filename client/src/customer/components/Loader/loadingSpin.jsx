import React from 'react';

const LoadingSpinner = ({ size = "8", text = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div
                className={`animate-spin rounded-full border-4 border-t-transparent border-gray-400 h-${size} w-${size}`}
            />
            {text && <p className="mt-2 text-sm text-gray-500">{text}</p>}
        </div>
    );
};

export default LoadingSpinner;