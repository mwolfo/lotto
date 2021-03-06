import React from 'react'
import './result.scss';

class ResultComponent extends React.Component {

  constructor(props) {
    super(props);
    this.match = ['', 
    '5 Numbers + 2 Euronumbers',
    '5 Numbers + 1 Euronumber',
    '5 Numbers + 0 Euronumbers',
    '4 Numbers + 2 Euronumbers',
    '4 Numbers + 1 Euronumber',
    '4 Numbers + 0 Euronumber',
    '3 Numbers + 2 Euronumbers',
    '2 Numbers + 2 Euronumbers',
    '3 Numbers + 1 Euronumber',
    '3 Numbers + 0 Euronumbers',
    '1 Number + 2 Euronumbers',
    '2 Numbers + 1 Euronumber'
  ];
  }

  convertToRoman(num) {

    const roman = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };
    let str = "";

    for (let i of Object.keys(roman)) {
      let q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
    return str;
  }  

  render() {
    return (
      <div className="result">        
          <div>{this.convertToRoman(this.props.index)}</div>
          <div>{this.match[this.props.index]}</div>
          <div>{this.props.winners}X</div>
          <div>{this.props.prize}</div>
      </div>
    )
  }
}

export default ResultComponent