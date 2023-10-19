import React, { useState } from "react";
import {
  Input,
  InputDiv,
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from "./styles/Form.Styled";

interface Props {
  label?: string;
  type?: string;
  setSelectedRadio:(data:string) => void,
  selectedRadio:string
}

const RadioButton = ({ label, type,selectedRadio,setSelectedRadio }: Props) => {
//   const [selectedRadio, setSelectedRadio] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value,selectedRadio,"others")
    if (selectedRadio) {
      setSelectedRadio("");
    } else {
      setSelectedRadio(e.target.value);
    }
  };

  return (
    <>
      <RadioWrapper>
        <RadioInput
          id="radio"
          type={type}
          name="radio"
          required
          value={label}
          onChange={handleChange}
          checked={selectedRadio == label}
        />
        <RadioLabel htmlFor="radio">{label}</RadioLabel>
      </RadioWrapper>
      
    </>
  );
};

export default RadioButton;
