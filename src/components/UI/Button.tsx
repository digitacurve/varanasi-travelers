"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "text" | "white";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  loading = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  type = "button",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-semibold rounded-full transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed tracking-wide transform hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0";
  
  const sizeStyles = {
    sm: "px-5 py-2 text-xs md:text-sm",
    md: "px-7 py-3 text-sm md:text-base",
    lg: "px-9 py-4 text-base md:text-lg",
  };

  const variantStyles = {
    solid: "bg-accent-orange text-white shadow-[0_4px_14px_rgba(255,122,0,0.3)] hover:bg-[#e06c00] hover:shadow-[0_6px_20px_rgba(255,122,0,0.4)]",
    outline: "border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white shadow-sm",
    text: "text-dark-slate hover:text-accent-orange",
    white: "bg-white text-dark-slate shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:bg-slate-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] border border-slate-100",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {icon && iconPosition === "left" && <span>{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </span>
      )}
    </button>
  );
};
