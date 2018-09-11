import React, { Component } from 'react';
import './app.scss';

import ResultsListComponent from './components/results-list';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: null,
      odds: []
    };
  }
  fetchData(url) {
    // const that = this;
    // if (url) {
    //   fetch(url).then(function (response) {
    //     return response.json();
    //   }).then(function (result) {

    //     that.setState({
    //       isLoaded: true,
    //       data: result
    //     });
    //   },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     });
    // }

    const data = { "last": { "nr": 338, "currency": "EUR", "date": { "full": "Die Lottozahlen vom Freitag, den 07.09.2018", "day": 7, "month": 9, "year": 2018, "hour": 21, "minute": 0, "dayOfWeek": "Freitag" }, "closingDate": "07.09.2018, 19:00", "lateClosingDate": "07.09.2018, 20:15", "drawingDate": "07.09.2018, 21:00", "numbers": [4, 7, 28, 36, 43], "euroNumbers": [1, 6], "jackpot": "10", "marketingJackpot": "10", "specialMarketingJackpot": "10", "climbedSince": 1, "Winners": 679780, "odds": { "rank0": { "winners": 0, "specialPrize": 0, "prize": 0 }, "rank1": { "winners": 0, "specialPrize": 0, "prize": 1000000000 }, "rank2": { "winners": 3, "specialPrize": 0, "prize": 52299180 }, "rank3": { "winners": 10, "specialPrize": 0, "prize": 5537560 }, "rank8": { "winners": 25008, "specialPrize": 0, "prize": 2280 }, "rank9": { "winners": 30269, "specialPrize": 0, "prize": 1820 }, "rank10": { "winners": 62653, "specialPrize": 0, "prize": 1260 }, "rank4": { "winners": 42, "specialPrize": 0, "prize": 439480 }, "rank5": { "winners": 745, "specialPrize": 0, "prize": 22290 }, "rank6": { "winners": 1545, "specialPrize": 0, "prize": 8360 }, "rank11": { "winners": 133214, "specialPrize": 0, "prize": 1080 }, "rank7": { "winners": 1809, "specialPrize": 0, "prize": 6120 }, "rank12": { "winners": 424482, "specialPrize": 0, "prize": 830 } } }, "next": { "nr": 339, "currency": "EUR", "date": { "full": "Die Lottozahlen vom Freitag, den 14.09.2018", "day": 14, "month": 9, "year": 2018, "hour": 21, "minute": 0, "dayOfWeek": "Freitag" }, "closingDate": "14.09.2018, 19:00", "lateClosingDate": "14.09.2018, 20:15", "drawingDate": "14.09.2018, 21:00", "jackpot": "18", "marketingJackpot": "18", "specialMarketingJackpot": "18", "climbedSince": 2 } }

    this.setState({
      isLoaded: true,
      data: data,
      odds: data.last.odds
    });
  }

  componentDidMount() {

    this.fetchData('https://media.lottoland.com/api/drawings/euroJackpot');
  }
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="main-app">
          <header className="app-header">
            <h1 className="title">Lottoland</h1>
          </header>
          <p className="lotto-title">
            {this.state.data.last.date.full}
          </p>
          <div className="lotto-numbers">
            <div>
              {
                this.state.data.last.numbers.map((number) => {
                  return (<div className="number normal">{number}</div>)
                })
              }
              {
                this.state.data.last.euroNumbers.map((number) => {
                  return (<div className="number euro">{number}</div>)
                })
              }
            </div>
          </div>
          <div className="results-header">
            <div>Tier</div>
            <div>Match</div>
            <div>Winners</div>
            <div>Amount</div>
          </div>
          <ResultsListComponent odds={this.state.odds} />
          <br></br>
        </div>
      );
    }
  }
}

export default App;