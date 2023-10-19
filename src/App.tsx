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
  CheckBoxInput,
  CheckBoxWrapper,
  SubmitButton,
} from "./component/styles/Form.Styled";
import { FaEnvelope, FaAddressCard } from "react-icons/fa";
import { Country, State, City } from "country-state-city";
import { DateSingleInput } from "@datepicker-react/styled";
import Select from "react-select";
import RadioButton from "./component/RadioButton";
import CheckBox from "./component/CheckBox";
import Button from "./component/SubmitButton";

const App: React.FC = () => {
  interface Address {
    country: string;
    state: string;
    city: string;
    name: string;
  }
  const [countryOption, setCountryOption] = useState();
  const [stateOption, setStateOption] = useState();
  const [cityOption, setCityOption] = useState();
  const [countryName, setCountryName] = useState({ label: "", value: "" });
  const [stateName, setStateName] = useState({ label: "", value: "" });
  const [countrySelected, setCountrySelected] = useState<any>("");
  const [stateSelected, setStateSelected] = useState<any>();
  const [citySelected, setCitySelected] = useState();

  const [selectedRadio, setSelectedRadio] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLLabelElement>) => {
    console.log(e.target);
  };

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
      let stateArray: any = [];
      State.getStatesOfCountry(countrySelected.value).map((data) => {
        console.log(data, "data");
        stateArray.push({
          label: data.name,
          value: data.isoCode,
          countryCode: data.countryCode,
        });
      });
      setStateOption(stateArray);
    }
  }, [countrySelected]);

  useEffect(() => {
    if (City.getAllCities()) {
      let cityArray: any = [];
      City.getCitiesOfState(
        stateSelected?.countryCode,
        stateSelected?.value
      ).map((data) => {
        console.log(data, "city");
        cityArray.push({ label: data.name });
      });
      setCityOption(cityArray);
    }
  }, [stateSelected]);

  // console.log(countrySelected, "countrySelected");
  // console.log(stateSelected, "stateSelected");
  // console.log(stateOption, "stateOption");
  // console.log(cityOption,"cityoption")
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
                options={cityOption}
                value={citySelected}
                onChange={(item: any) => {
                  setCitySelected(item);
                }}
              />
            </SelectWrapper>
          </IconDiv>
        </NormalDiv>

        <NormalDiv>
          <InputLabel>6. Phone*</InputLabel>
          <InputDiv>
            <Input placeholder="Enter Phone" required />
          </InputDiv>
        </NormalDiv>

        <NormalDiv>
          <InputLabel>7. Date*</InputLabel>
          <InputDiv>
            <Input placeholder="Enter Date" required type="date" />
            {/* <DateSingleInput
              onDateChange={(e) => {
                console.log("date");
              }}
              showDatepicker={true}
              date={null}
              onFocusChange={() => {console.log("date")}}
              // onFocusChange={function (focusInput: boolean): void {
              //   throw new Error("Function not implemented.");
              // }}
            /> */}
          </InputDiv>
        </NormalDiv>

        <NormalDiv>
          <InputLabel>8.Where did you hear about us*</InputLabel>

          <RadioButton
            label="A Friend or Colleague"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="Google"
            type="checkbox"
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="News Article"
            type="checkbox"
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="Blog Post"
            type="checkbox"
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="Others"
            type="checkbox"
          />
          {selectedRadio == "Others" && (
            <InputDiv>
              <Input />
            </InputDiv>
          )}
        </NormalDiv>

        <NormalDiv>
          <CheckBox label="I have read,understood and accepted the PRIVACY POLICY for the membership. Terms and Conditions" />
        </NormalDiv>

        <NormalDiv>
          <SubmitButton onClick={() => {alert("clicked")}}>Submit</SubmitButton>
        </NormalDiv>
      </MainDiv>
    </div>
  );
};

export default App;
