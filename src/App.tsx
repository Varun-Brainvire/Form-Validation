import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import { GlobalStyle } from "./component/styles/Global.Styled";
import {
  InputLabel,
  RegistrationForm,
  InputDiv,
  FirstNameDiv,
  SecondNameDiv,
  MainDiv,
  NormalDiv,
  IconDiv,
  Input,
  SelectWrapper,
  CustomSelect,
  SubmitButton,
} from "./component/styles/Form.Styled";
import { FaEnvelope, FaAddressCard } from "react-icons/fa";
import { Country, State, City } from "country-state-city";
import { DateSingleInput } from "@datepicker-react/styled";
import Select from "react-select";
import RadioButton from "./component/RadioButton";
import CheckBox from "./component/CheckBox";
import Button from "./component/SubmitButton";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [countrySelected, setCountrySelected] = useState<any>("");
  const [stateSelected, setStateSelected] = useState<any>();
  const [citySelected, setCitySelected] = useState();

  const [selectedRadio, setSelectedRadio] = useState("");

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    email: "",
    phone: "",
    date: "",
    radioButton: "",
    checkBox: false
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  useEffect(() => {
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      key: string
    ) => {
      setValues((prev) => ({
        ...prev,
        [e.target.name]: e?.target?.value,
      }));
    };
    console.log(values);
  }, [values]);

  const validationCheck = () => {
    console.log(values.lastName, "Firstname");
    let isValid: boolean = true;
    let error: any = {};
    if (!values?.firstName) {
      error.firstName = "First Name is Empty";
      isValid = false;
      values.firstName = ""
    } 
    if (
      !values.firstName.match(/^[a-zA-Z]+$/) &&
      !values.lastName.match(/^[a-zA-Z]+$/)
    ) {
      error.firstName = "Only Letters Allowed";
      error.lastName = "Only Letters Allowed";
      isValid = false;
    }
    if (!countrySelected) {
      error.country = "Country Not Selected";
      isValid = false;
    }

    if (!stateSelected) {
      error.state = "State Not Selected";
      isValid = false;
    }

    if (!citySelected) {
      error.city = "City Not Selected";
      isValid = false;
      values.lastName = ""
    }

    if (!values.lastName) {
      error.lastname = "Last name is empty";
      isValid = false;
    }
    if (!values.email) {
      error.email = "Email is Empty";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      error.email = "Email type is not valid";
      isValid = false;
    }
    if (!values.phone) {
      error.phone = "Phone field is empty";
      isValid = false;
    }
    if (!values.date) {
      error.date = "Date is empty";
      isValid = false;
    }
    if(!values.checkBox) {
      error.checked = "Please check the checkbox"
      isValid = false
    }
    if(!values.radioButton) {
      error.radioButton = "Please check the radio button"
      isValid = false
    }

    console.log(error, "error");
    setErrors(error);
    
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validationCheck()) {
      console.log("Form is Valid , Submitted");
      for(const key in values) {
        console.log(key,"key")
        // values[key] = ""
      }
    } else {
      console.log("Form is Not Valid ,Not Submitted");
    }
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
              <Input
                placeholder="First name"
                type="text"
                onChange={(e) => handleInputChange(e, "firstName")}
                name="firstName"
                value={values.firstName}
                required
              />
              {errors.firstName && <span style={{"color":"red"}}>{errors.firstName}</span>}
            </FirstNameDiv>
            <SecondNameDiv>
              <Input
                placeholder="Second name"
                name="lastName"
                onChange={(e) => handleInputChange(e, "lastName")}
                value={values.lastName}
                required
              />
              {errors.lastname && <span style={{"color":"red"}}>{errors.lastname}</span>}
            </SecondNameDiv>
          </InputDiv>
        </NormalDiv>

        <NormalDiv>
          <InputLabel>2. E-mail*</InputLabel>
          <IconDiv>
            <FaEnvelope />
            <Input
              placeholder="Enter Email"
              borderColor="none"
              name="email"
              onChange={(e) => handleInputChange(e, "email")}
              value={values.email}
            />
          </IconDiv>
            {errors.email && <span style={{"color":"red"}}>{errors.email}</span>}
        </NormalDiv>

        <NormalDiv>
          <InputLabel>3. Address*</InputLabel>
          <IconDiv>
            <FaAddressCard />
            <SelectWrapper>
              <CustomSelect
                name="country"
                options={countryOption}
                value={countrySelected}
                onChange={(item: any) => {
                  setCountrySelected(item);
                }}
              />
            </SelectWrapper>
          </IconDiv>
          {errors.country && <span style={{"color":"red"}}>{errors.country}</span>}
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
          {errors.state && <span style={{"color":"red"}}>{errors.state}</span>}
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
          {errors.city && <span style={{"color":"red"}}>{errors.city}</span>}
        </NormalDiv>

        <NormalDiv>
          <InputLabel>6. Phone*</InputLabel>
          <InputDiv>
            <Input
              placeholder="Enter Phone"
              required
              name="phone"
              onChange={(e) => handleInputChange(e, "phone")}
            />
          </InputDiv>
          {errors.phone && <span style={{"color":"red"}}>{errors.phone}</span>}
        </NormalDiv>

        <NormalDiv>
          <InputLabel>7. Date*</InputLabel>
          <InputDiv>
            <Input
              placeholder="Enter Date"
              required
              type="date"
              name="date"
              onChange={(e) => handleInputChange(e, "phone")}
            />
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
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
          {errors.date && <span style={{"color":"red"}}>{errors.date}</span>}
        </NormalDiv>

        <NormalDiv>
          <InputLabel>8.Where did you hear about us*</InputLabel>

          <RadioButton
            label="A Friend or Colleague"
            type="checkbox"
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            errors={errors}
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="Google"
            type="checkbox"
            errors={errors}
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="News Article"
            type="checkbox"
            errors={errors}
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="Blog Post"
            type="checkbox"
            errors={errors}
          />
          <RadioButton
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
            label="Others"
            type="checkbox"
            errors={errors}
          />
          {selectedRadio == "Others" && (
            <InputDiv>
              <Input />
            </InputDiv>
          )}
        </NormalDiv>

        <NormalDiv>
          <CheckBox label="I have read,understood and accepted the PRIVACY POLICY for the membership. Terms and Conditions" errors={errors}/>
        </NormalDiv>

        <NormalDiv>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </NormalDiv>
      </MainDiv>
    </div>
  );
};

export default App;
