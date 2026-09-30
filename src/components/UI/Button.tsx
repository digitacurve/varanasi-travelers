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
  const baseStyles = "inline-flex items-center justify-center font-display font-semibold rounded-full transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed tracking-wide select-none";
  
  const sizeStyles = {
    sm: "px-5 py-2 text-xs md:text-sm",
    md: "px-7 py-3 text-sm md:text-base",
    lg: "px-9 py-4 text-base md:text-lg",
  };

  const variantStyles = {
    solid: "bg-gradient-to-r from-[#FF7A00] via-[#EA580C] to-[#C2410C] text-white border border-white/25 shadow-[0_4px_16px_rgba(234,88,12,0.32),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_22px_rgba(234,88,12,0.45)] hover:brightness-105",
    outline: "border border-amber-600/40 text-amber-800 bg-orange-50/60 backdrop-blur-md shadow-[0_2px_8px_rgba(234,88,12,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#EA580C] hover:text-white hover:border-transparent",
    text: "text-dark-slate hover:text-accent-orange",
    white: "bg-white/95 backdrop-blur-md text-slate-900 shadow-[0_4px_16px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white hover:shadow-[0_8px_24px_rgba(15,23,42,0.1)] border border-slate-200/80",
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
