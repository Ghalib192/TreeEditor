import React from 'react';
import Node from './Node';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Attack Tree Analysis Via Satisfiability Modulo Theories</h1>
        <Node></Node>
      </div>
    );
  }
}

export default App;
