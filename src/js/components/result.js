import React from 'react'
import './result.css';

class ResultComponent extends React.Component {

  convertToRoman(num) {

    var roman = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };
    var str = "";

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
    return str;
  }

  getMatch(number) {
    switch (number) {
      case 1:
        return '5 Numbers + 2 Euronumbers';
        break;
      case 2:
        return '5 Numbers + 1 Euronumber';
        break;
      case 3:
        return '5 Numbers + 0 Euronumbers';
        break;
      case 4:
        return '4 Numbers + 2 Euronumbers';
        break;
      case 5:
        return '4 Numbers + 1 Euronumber';
        break;
      case 6:
        return '4 Numbers + 0 Euronumber';
        break;
      case 7:
        return '3 Numbers + 2 Euronumbers';
        break;
      case 8:
        return '2 Numbers + 2 Euronumbers';
        break;
      case 9:
        return '3 Numbers + 1 Euronumber';
        break;
      case 10:
        return '3 Numbers + 0 Euronumbers';
        break;
      case 11:
        return '1 Number + 2 Euronumbers';
        break;
      case 12:
        return '2 Numbers + 1 Euronumber';
        break;

      default:
        return '';
        break;
    }
  }

  render() {
    return (
      <li className="result">
        <div className="media-body">
          <div>{this.convertToRoman(this.props.index)}</div>
          <div>{this.getMatch(this.props.index)}</div>
          <div>{this.props.winners}X</div>
          <div>{this.props.prize}</div>
        </div>
        <hr />
      </li>
    )
  }
}

export default ResultComponent