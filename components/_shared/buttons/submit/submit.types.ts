// React Types
import React from "components/_shared/buttons/node_modules/react";

export interface CustomButtonProps {
  children: React.ReactNode;
  className: string;
  type?: string;
  // TODO: afinar esta prop
  onClick: any;
}