import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import csc from "country-state-city";


const Address = () => {
    const {  handleSubmit,  register } = useForm();
    console.log()
  
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("");
    const [countryId, setCountryId] = useState("")
    const [stateId, setStateId] = useState("")
   
  
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
      console.log(data);
    };
  
    useEffect(() => {
      const countries = csc.getAllCountries();
      setCountry(countries);
    }, []);
  
  
    const handlecountry = (e) => {
      const countryId = e.target.value;
      setCountryId(countryId);
    }
    console.log('countryId', countryId);
  
  
    useEffect(() => {
      const updatedStates = () =>
      csc
      .getStatesOfCountry(countryId)
  
      setState(updatedStates);
      console.log('states', updatedStates);
    }, [countryId]);
  
    
    const handlestate = (e) => {
      const stateId = e.target.value;
      setStateId(stateId);
    }
    console.log('StateId', stateId);
  
    useEffect(() => {
      const updatedCities = () =>
      csc
        .getCitiesOfState(stateId)
  
      setCity(updatedCities);
      console.log('cities', updatedCities);
    }, [stateId]);
  
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
  
       
        <select
          {...register("country", { required: 'Country is required' })}
          onChange={(e) => handlecountry(e)}
        >
          <option value=''>--Select Country--</option>
          {
            country && country.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              )
            })
          }
        </select>
  
        <select
          {...register("state")}
          onChange={(e) => handlestate(e)}
        >
          <option value=''>--Select State--</option>
          {
            state && state?.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.id} {item.name}
                </option>
              )
            })
          }
        </select>
  
        <select
          {...register("city")}
        >
          <option value=''>--Select City--</option>
          {
            city && city?.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.id} {item.name}
                </option>
              )
            })
          }
        </select>
  
        <input type="submit" />
      </form>
    );
}

export default Address
