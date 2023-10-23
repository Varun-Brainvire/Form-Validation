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
  setSelectedRadio:any,
  selectedRadio:any,
  errors:any
}

const RadioButton = ({ label, type,selectedRadio,setSelectedRadio,errors }: Props) => {
//   const [selectedRadio, setSelectedRadio] = useState("");
  // console.log(errors)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value,selectedRadio,"others")
    if (selectedRadio) {
      setSelectedRadio("");
    } else {
      setSelectedRadio(e.target.value);
      console.log(e.target.value)
    }
    if(!e.target.value) {
      // errors.radio = "Please select any one option"
    }
    
  };

  return (
    <>
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
        {!selectedRadio && <span style={{"color":"red"}}>{errors.radioButton}</span>}
        </>
  );
};

export default RadioButton;
