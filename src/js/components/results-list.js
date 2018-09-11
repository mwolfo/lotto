import React from 'react'
import './results-list.scss';
import ResultComponent from './result';

class ResultsListComponent extends React.Component {

  constructor(props) {
    super(props);    
  }  

  createResultList() {
    const table = [];
    for (let i = 1; i < 13; i++) {
      table.push(<ResultComponent
        index={i}
        winners={this.props.odds['rank' + i].winners} prize={new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'EUR'
        }).format(this.props.odds['rank' + i].prize)} />);
    }
    return table;
  }

  render() {
    return (
        <div className="results-list">
        {
          this.createResultList()
        }
      </div>
    )
  }
}

export default ResultsListComponent