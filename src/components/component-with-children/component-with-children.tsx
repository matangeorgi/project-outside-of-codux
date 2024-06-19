import React from "react";

export interface ComponentWithChildrenProps {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export const ComponentWithChildren: React.FC<ComponentWithChildrenProps> = ({
  className = "",
  children,
  title
}) => (
  <div className={className}>
    ComponentWithChildren <div>
    children will bere here: {children}
    </div>
    <div>title will be here: {title}</div>
  </div>
);
