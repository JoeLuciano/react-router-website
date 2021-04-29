import React from 'react';
import Papa from 'papaparse';
import { withRouter } from 'react-router-dom';
import data from './temp-data.csv';
import FileSaver from 'file-saver';

class DataController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [0, 0],
    };

    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch(data).then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  }

  getData(result) {
    this.setState({ data: result.data });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData,
    });
  }

  render() {
    const lastEntry = this.state.data[this.state.data.length - 2];
    const dateTime = String(lastEntry[0]).split(' ');
    const time = (' ' + dateTime[1]).slice(1);

    function saveCSV() {
      FileSaver.saveAs(
        data,
        dateTime[0] + '_Hour_' + dateTime[1][0] + dateTime[1][1] + '.csv'
      );
    }

    if (time.includes(':00:00') || time.includes(':00:01')) {
      saveCSV();
    }

    console.log();
    return (
      <div className='csvContainer'>
        <h1>Date: {dateTime[0]}</h1>
        <h1>Time: {dateTime[1]}</h1>
        <h1>Temperature: {lastEntry[1]}&deg;F</h1>
        <button onClick={saveCSV}>Save today's temperature data</button>
      </div>
    );
  }
}

export default withRouter(DataController);
