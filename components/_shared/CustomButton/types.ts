// React Types
import React from "react";

export interface CustomButtonProps {
  children: React.ReactNode;
  className: string;
  type?: string;
  // TODO: afinar esta prop
  onClick: any;
}