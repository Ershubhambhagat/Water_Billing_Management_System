import { useState } from "react";
import style from './form1Input.module.css'

const Form1Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
     <div className={style.grid}>
    <div className={style.form1Input}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
     
      <span>{errorMessage}</span>
    </div>
    </div>
  );
};

export default Form1Input;