import React, { Component } from 'react';
import './app.css';
import ResultComponent from './components/result';

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <header className="app-header">
          <h1 className="title">Lottoland</h1>
        </header>
        <p>
          {this.props.data.fullDate}
        </p>
        <ul className="media-list">
          {
            this.props.listado.map((result) => {
              return <ResultComponent title={result.title} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;