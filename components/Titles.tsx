import React, { ReactElement } from "react";

type TitleProps = {
  text: string;
  color?: string;
};

export default function Title({ text, color = "black" }: TitleProps): ReactElement {
  return React.createElement(
    "h1",
    { style: { color } },
    text
  );
}