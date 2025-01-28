import "./PrimaryButton.scss";

import { MouseEventHandler } from "react";

interface PrimaryButtonProps {
  buttonLabel: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: "submit" | "reset" | "button";
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      className="primary-button"
      onClick={props.onClick}
      type={props.buttonType}
    >
      {props.buttonLabel}
    </button>
  );
}
