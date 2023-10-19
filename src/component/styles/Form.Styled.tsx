import styled from "styled-components";
import Select from "react-select";

interface Props {
  borderColor?: string;
  option?: any;
}

export const MainDiv = styled.div`
  text-align: left;
  /* max-width: 1526px; */
  max-width: 750px;
  margin: auto;
`;

export const RegistrationForm = styled.h2`
  color: black;
  font-family: Open Sans, sans-serif;
  text-align: center;
`;
export const InputLabel = styled.h4`
  color: #313131;
  font-family: Open Sans, sans-serif;
  /* text-align: center */
`;

export const NormalDiv = styled.div`
  margin-bottom: 60px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: transparent;
  padding: 5px;
  /* border: 1px solid black;
    margin-bottom: 60px; */
`;

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 0px -5px;
  justify-content: center;
  gap: 10px;
`;

export const FirstNameDiv = styled.div`
  width: 50%;
  margin: 0px 5px;
`;

export const SecondNameDiv = styled.div`
  margin: 0px 5px;
  width: 50%;
`;

export const Input = styled.input<Props>`
  background: transparent;
  outline: none;
  border: ${(props) => props.borderColor};
  border-radius: 0 !important;
  /* border: none; */
  width: 100%;
  height: 40px;
  line-height: 1.4rem;
  font-size: medium;
  :focus {
    border-color: #000000;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  background-color: transparent;
`;

export const AddressDropdown = styled.select<Props>`
  background: transparent;
  outline: none;
  border: ${(props) => props.borderColor};
  border-radius: 0 !important;
  width: 100%;
  height: 40px;
  line-height: 1.4rem;
  font-size: medium;
  :focus {
    border-color: #000000;
  }
`;

export const CountryOptions = styled.option<Props>`
  border: ${(props) => props.borderColor};
  background: transparent;
  outline: none;
  width: 100%;
  height: 40px;
  line-height: 1.4rem;
  font-size: medium;
  :focus {
    border-color: #000000;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;

export const CustomSelect = styled(Select)`
  & > div[class*="control"] {
    border: none;
    color: black;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  outline: none;
  border: black 1px solid;
  border-radius: 0 !important;
  width: 100%;
  height: 40px;
  line-height: 1.4rem;
  font-size: medium;
  margin-bottom: 15px;
  :focus {
    border-color: #000000;
  }
`;

export const RadioInput = styled.input`
  /* width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #000;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  & :checked {
    background-color: #000;
  } */

  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #000;
  }

`;

export const RadioLabel = styled.label`
  margin-left: 10px;
`;

export const CheckBoxInput = styled.input`
  cursor: pointer;
  margin-right: 10px;
  width: 20px;
  height: 20px;

  &:after {
    width: 20px;
    height: 20px;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  outline: none;
  border: black 1px solid;
  border-radius: 0 !important;
  width: 100%;
  height: 40px;
  line-height: 1.4rem;
  font-size: medium;
  margin-bottom: 15px;
  :focus {
    border-color: #000000;
  }
`;

export const CheckBoxLabel = styled.label`
  margin-left: 10px;
  font-size: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #313131!important;
  border-radius: 0 !important;
  color: #fff;
  font-weight: 700;
  min-height: 3.4rem;
  min-width: 9.2em;
  font-size: 1.03em;
`;

