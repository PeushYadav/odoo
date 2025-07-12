import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-32 w-32'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`animate-spin text-green-600 ${sizeClasses[size]}`}>
        <Loader2 className="w-full h-full" />
      </div>
      {text && <p className="mt-4 text-gray-600 font-medium">{text}</p>}
    </div>
  );
};

export default LoadingSpinner; 