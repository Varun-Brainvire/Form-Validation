import React from "react";
import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from "./styles/Form.Styled";


interface Props {
    label?: string;
    type?: string;
  }

const CheckBox = ({label,type}:Props) => {
    return(
        <CheckBoxWrapper>
        <CheckBoxInput type="checkbox" />
        <CheckBoxLabel>{label}</CheckBoxLabel>
        </CheckBoxWrapper>
    )
}   

export default CheckBox