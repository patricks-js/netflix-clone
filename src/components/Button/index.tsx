import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  styles?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => (
  <button
    className={`font-bold uppercase px-5 py-[10px] border border-red-700 rounded hover:bg-red-700 text-sm transition-colors ${props.styles}`}
    {...props}
  />
);
