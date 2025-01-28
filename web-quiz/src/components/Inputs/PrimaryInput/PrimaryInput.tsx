import { ChangeEventHandler, useState } from "react";
import "./PrimaryInput.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface PrimaryInputProps {
  labelTitle: string;
  type: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

export default function PrimaryInput(props: PrimaryInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="primary-input-container">
      <label htmlFor="input">{props.labelTitle}</label>
      <div className="input-wrapper">
        <input
          id="input"
          type={
            props.type === "password" && isPasswordVisible ? "text" : props.type
          }
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
        />
        {props.type === "password" && (
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        )}
      </div>
    </div>
  );
}
