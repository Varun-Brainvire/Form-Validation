import React, { useEffect, useState } from "react";
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
  AddressDropdown,
  CountryOptions,
  SelectWrapper,
  CustomSelect,
} from "./component/styles/Form.Styled";
import { FaEnvelope, FaAddressCard } from "react-icons/fa";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

const App: React.FC = () => {
  interface Address {
    country: string;
    state: string;
    city: string;
    name: string;
  }
  const [countryOption, setCountryOption] = useState();
  const [stateOption, setStateOption] = useState();
  const [countryName, setCountryName] = useState({ label: "", value: "" });
  const [stateName, setStateName] = useState({ label: "", value: "" });
  const [citySelected,setCitySelected] = useState()
  const [cityOption,setCityOption] = useState()
  const [countrySelected, setCountrySelected] = useState<any>("");
  const [stateSelected, setStateSelected] = useState<any>();

  const handleCountryChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const nameChanged: any = e.currentTarget.value;
    console.log(nameChanged, "nameChanged");
  };
  useEffect(() => {
    if (Country.getAllCountries()) {
      let arr: any = [];
      Country.getAllCountries()?.map((data) => {
        return arr.push({ label: data?.name, value: data?.isoCode });
      });
      setCountryOption(arr);
    }
  }, [Country]);

  useEffect(() => {
    if (State.getStatesOfCountry()) {
        let stateArray :any = [];
        State.getStatesOfCountry(countrySelected.value).map((data) => {
          console.log(data,"data")
          stateArray.push({label:data.name,value:data.isoCode,countryCode:data.countryCode})
        })
        setStateOption(stateArray)
    }
  }, [countrySelected]);

  useEffect(() => {
    if(City.getAllCities()) {
      let cityArray:any = [];
      City.getCitiesOfState(stateSelected?.countryCode,stateSelected?.value).map((data) => {
        console.log(data,"city")
        cityArray.push({label:data.name})
      })
      setCitySelected(cityArray)
    } 
  },[stateSelected])

  console.log(countrySelected, "countrySelected");
  console.log(stateSelected,"stateSelected")
  console.log(stateOption,"stateOption")
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
            <SelectWrapper>
            <CustomSelect
              options={countryOption}
              value={countrySelected}
              onChange={(item: any) => {
                setCountrySelected(item);
              }}
            />
            </SelectWrapper>
          </IconDiv>
        </NormalDiv>

        <NormalDiv>
          <InputLabel>4. State*</InputLabel>
          <IconDiv>
            <FaAddressCard />
            <SelectWrapper>
            <CustomSelect
              options={stateOption}
              value={stateSelected}
              onChange={(item: any) => {
                setStateSelected(item);
              }}
            />
            </SelectWrapper>
          </IconDiv>
        </NormalDiv>

        <NormalDiv>
          <InputLabel>5. City*</InputLabel>
          <IconDiv>
            <FaAddressCard />
            <SelectWrapper>
            <CustomSelect
              options={citySelected}
              value={citySelected}
              onChange={(item: any) => {
                setCitySelected(item);
              }}
            />
            </SelectWrapper>
          </IconDiv>
        </NormalDiv>
      </MainDiv>
    </div>
  );
};

export default App;
