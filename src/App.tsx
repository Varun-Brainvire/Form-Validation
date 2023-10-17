import React, { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./component/styles/Global.Styled";
import {
  InputLabel,
  RegistrationForm,
  InputDiv,
  FirstNameDiv,
  SecondNameDiv,
  MainDiv,
  EmailInput,
  NormalDiv,
  IconDiv,
  Input,
  AddressDropdown
} from "./component/styles/Form.Styled";
import { FaEnvelope,FaAddressCard } from "react-icons/fa";
import { Country, State, City } from "country-state-city";


const App: React.FC = () => {
  interface Address {
    country:string,
    state:string,
    city:string
  }
  const [country,setCountry] = useState<string>('')
  const [state,setState] = useState<string>('')
  const [city,setCity] = useState<string>('')
  
  console.log(Country.getAllCountries())


  return (
    <div className="App">
      <MainDiv>
        <GlobalStyle />
        <RegistrationForm>Registration Form</RegistrationForm>
        <NormalDiv>
          <InputLabel>1.Name*</InputLabel>
          <InputDiv>
            <FirstNameDiv>
              <Input placeholder="First name" />
            </FirstNameDiv>
            <SecondNameDiv>
              <Input placeholder="Second name" />
            </SecondNameDiv>
          </InputDiv>
        </NormalDiv>
        <NormalDiv>
          <InputLabel>2. E-mail*</InputLabel>
          <IconDiv>
            <FaEnvelope />
            <Input placeholder="Enter Email" borderColor="none" />
          </IconDiv>
        </NormalDiv>

        <NormalDiv>
        <InputLabel>3. Address*</InputLabel>
        <IconDiv>
          <FaAddressCard />
          <AddressDropdown placeholder="Enter Address" borderColor="none"/>
        </IconDiv>
        </NormalDiv>
      </MainDiv>
    </div>
  );
};

export default App;
