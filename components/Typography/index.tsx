import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: Props) {
  return (
    <h1
      className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}
    >
      {children}
    </h1>
  );
}

export const H2 = ({ children, className }: Props) => {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: Props) => {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};
export const BlockQuote = ({ children, className }: Props) => {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  );
};
