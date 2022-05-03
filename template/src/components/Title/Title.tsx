import { ReactNode } from "react";

interface Props extends TitleProps {
  children: ReactNode;
}

export const Title = ({ color, children }: Props) => {
  return <h3 style={{ color }}>{children}</h3>;
};
