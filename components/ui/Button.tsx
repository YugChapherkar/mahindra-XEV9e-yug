import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-dark text-white hover:bg-black rounded-full",
    secondary: "bg-white text-dark hover:bg-gray-100 rounded-full border border-gray-200",
    accent: "bg-accent text-dark hover:bg-accent-deep rounded-full",
    outline: "border-2 border-dark text-dark hover:bg-dark hover:text-white rounded-full",
    link: "text-dark underline-offset-4 hover:underline p-0 h-auto",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
    icon: "p-2 w-10 h-10 rounded-full flex items-center justify-center",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
