import Link from "next/link";
import React, { FC } from "react";

interface ActionButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const ActionButton: FC<ActionButtonProps> = ({
  label,
  href,
  icon = (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  ),
  disabled = false,
}) => {
  const disableClass = disabled
    ? "opacity-50 pointer-events-none"
    : "hover:bg-foreground ";
  return (
    <Link
      target={href.startsWith("http") ? "_blank" : "_self"}
      href={href}
      className={`${disableClass} relative inline-flex items-center justify-center px-4 pb-2 pt-1 overflow-hidden font-medium uppercase tracking-widest transition duration-300 ease-out border-2 border-foreground rounded-full shadow-md group bg-transparent text-sm`}
    >
      {!disabled && (
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-background duration-300 -translate-x-full bg-foreground group-hover:translate-x-0 ease">
          {icon}
        </span>
      )}
      {!disabled && (
        <span className="absolute flex items-center justify-center w-full h-full text-foreground transition-all duration-300 transform group-hover:translate-x-full ease">
          {label}
        </span>
      )}
      <span className={disabled ? "relative " : "relative invisible"}>
        {label}
      </span>
    </Link>
  );
};

export default ActionButton;
