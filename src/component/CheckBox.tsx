import React, { useState } from "react";
import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from "./styles/Form.Styled";


interface Props {
    label?: string;
    type?: string;
    errors?:any
  }

const CheckBox = ({label,type,errors}:Props) => {

    const [event,setEvent] = useState(false)

    const handleCheckChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // const event = e.target.checked
        setEvent(e.target.checked)
    }

    return(
        <>
        <CheckBoxWrapper>
        <CheckBoxInput type="checkbox" onChange={handleCheckChange}/>
        <CheckBoxLabel>{label}</CheckBoxLabel>
        </CheckBoxWrapper>
        {!event && <span style={{"color":"red"}}>{errors.checked}</span>}
        </>
    )
}   

export default CheckBox