
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "px-8 py-3 text-sm font-semibold tracking-wider rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const styles = {
    primary: "bg-soft-green text-charcoal-grey hover:bg-opacity-80 focus:ring-soft-green",
    secondary: "bg-transparent text-charcoal-grey border border-charcoal-grey hover:bg-charcoal-grey hover:text-warm-off-white focus:ring-charcoal-grey",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
