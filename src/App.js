import React, { Component } from 'react';

import './App.css';

class App extends Component {


  state = {
    numbers: 0
  }


  add = () => {
    console.log(this);

    // this.numbers++;
    let newNumber = (this.state.numbers * 1) + 1

    console.log(newNumber);

    this.setState({
      numbers: newNumber
    }
    )

    /* showResult() */
  }


  subtract = () => {
    let newNumber = this.state.numbers - 1;
    if (this.state.numbers == 0)
      return;

    this.setState({
      numbers: newNumber
    });
    // showResult()    
  }

  chanegNumber = (event) => {
    // Handle Backspaces
    if (event.nativeEvent.inputType === "deleteContentBackward") {
      let currentNumber = this.state.numbers.toString();
      let newNumber = currentNumber.slice(0, -1)
      this.setState({
        numbers: (newNumber * 1) // Convert string to number
      })
      return;
    }

    let value = event.target.value;
    let firstLetter = value.split("").reverse().join("")[0];

    if (isNaN(firstLetter)) {
      console.log("Please Enter a Number");
      return;
    }

    let oldNumber = this.state.numbers;
    let newNumber = (oldNumber + firstLetter) * 1 // Convert string into a number
    this.setState({
      numbers: newNumber
    })

  }

  render() {
    return (
      <div className="App" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <input onChange={this.chanegNumber} style={{
          textAlign: "center", width: "200px",
          border: "none", background: "none", color: "#fff", fontSize: "20px"
        }}
          ref={number => this.number = number} type="text" value={this.state.numbers} />


        <div style={{ display: "flex", justifyContent: " space-between" }}>
          <button name="add" onClick={this.add} >+</button>
          <button name="sub" onClick={this.subtract}>-</button>
        </div>

      </div>
    );
  }
}

export default App;