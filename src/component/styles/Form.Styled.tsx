import styled from "styled-components";

interface Props {
  borderColor?: string;
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
