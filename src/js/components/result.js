import React from 'react'

class ResultComponent extends React.Component {

  render() {
    return(
      <li className="result">
        <div className="media-body">          
          <p>
            {this.props.title}           
          </p>
        </div>
        <hr/>
      </li>
    )
  }
}

export default ResultComponent