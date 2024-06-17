import "./new-component.css";
import React from "react";

export interface NewComponentProps {
  className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({
  className = "",
}) => <div className={`${className} damn`}>Shimi shimi yeahh</div>;
