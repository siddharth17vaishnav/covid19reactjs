import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import axios from 'axios';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);
   useEffect(() => {
       axios.get("https://covid19.mathdro.id/api/countries").then((res)=>{
           setCountries(res.data.countries);
       })
   },[setCountries])
    console.log(countries)
    return (
       <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="india">Global</option>
         {countries.map((country,i) =>
        <option key={i} value={country.name}>{country.name}</option> )}
          
        </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker
