import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <img
      src="https://hanooman-file-upload-fe-public.s3.ap-south-1.amazonaws.com/Document-to-text/logopng/1734339393980/1734339393980.png"
      alt="RhythemicBeats Logo"
      className={`${sizes[size]} ${className}`}
    />
  );
}