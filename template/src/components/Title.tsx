import React, { FC } from "react";

interface ITitle {
  color: "red" | "blue" | "green" | "white";
}
export const Title: FC<ITitle> = ({ color, children }) => {
  return <h1 style={{ color }}>{children}</h1>;
};
