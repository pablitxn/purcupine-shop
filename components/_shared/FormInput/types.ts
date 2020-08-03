import { ChangeEventHandler } from "react";

export interface FormInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className: string;
  label: string;
  value: string;
  type: string
};

type inputTypes = { value: string; }