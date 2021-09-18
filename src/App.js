import React from 'react';
import Cards from './Components/Cards/Cards'
import Chart from './Components/Chart/Chart'
import CountryPicker from './Components/CountryPicker/CountryPicker';
import { fetchData } from './api/';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src="https://covid19statswebsite.netlify.app/static/media/image.d7265326.png" alt="img" className={styles.image}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;