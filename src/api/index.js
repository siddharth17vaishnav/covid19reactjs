import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
  let changeableUrl= url;
  if(country){
    changeableUrl=`${url}/countries/${country}`
  }
   try{
    const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
    
    const modifiedData = {
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        lastUpdate:lastUpdate
    }
    return modifiedData;

   }catch(e){

   }
}

export const fetchDailydata = async()=>{
    try{
            const {data} = await axios.get(`${url}/daily`);
          const modifiedData = data.map((dailydata)=>({
              confirmed: dailydata.confirmed,
              deaths: dailydata.deaths,
              date: dailydata.reportDate
          }));

          return modifiedData;
    }catch(e){

    }
}


export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get("https://covid19.mathdro.id/api/countries");
  
      return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
      return error;
    }
  };