import React from 'react';
import './App.css';
import Race from './Race'

const URL = "http://alexksysx.me:8080/dndServerTest/";

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Race 
          url={URL}
          id={78} />
      </div>
    );
  }
}


export default App;