import React from "react";

export interface NavLinkProps {
  name: string;
  route: string;
}

export interface ButtonProps {
  name: string;
  styles: string;
  action?: () => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface DecoIconsProps extends ChildrenProps {
  route: string;
}

export interface ContextProps {
  nav: string;
  selectNav: (data: string) => void;
}

export interface InfoTextProps {
  header: string;
  description?: string;
  elements?: React.ReactNode;
  level?: 1 | 2;
}

export interface SkillCardProps {
  skill: string
}
