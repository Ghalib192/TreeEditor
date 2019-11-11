import React from 'react';
import TreeView from './TreeView';

class App extends React.Component{

  render() {
    return(
      <div>
        <h1>Attack Tree Analysis Via Satisfiability Modulo Theories</h1>
        <TreeView store={this.props.store}></TreeView>
      </div>
    );
  }
}

export default App;
