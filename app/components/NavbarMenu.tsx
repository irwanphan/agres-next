import React from "react";

export interface MenuItemProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, iconLeft, iconRight, className }) => (
  <span className={`flex items-center gap-1 cursor-pointer hover:underline ${className || ''}`}>
    {iconLeft}
    <span>{label}</span>
    {iconRight}
  </span>
);

export interface MenuProps {
  children: React.ReactNode;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ children, className }) => (
  <div className={`flex gap-4 ${className || ''}`}>{children}</div>
); 