import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props); //needed to use this.
    this.state = { num1: '', num2: '', result: 0 };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    // this.result
    // this.input1;
    // this.input2;
    //your code here
  }

  //your code here

  add(e){
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
    // this.setState({ result: result });
  }

  subtract(e){
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiply(e){
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(e){
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(e){
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }

  // setNum1(e) {
  //   if (e) {
  //     let num = parseInt(e);
  //   } else {
  //     let num = '';
  //   }
  //   this.setState({ num1 });
  // }

  // setNum2(e) {
  //   if (e) {
  //     let num = parseInt(e);
  //   } else {
  //     let num = '';
  //   }
  //   this.setState({ num2 });
  // }

  setNum1(e){
    e.preventDefault();

    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e){
    e.preventDefault();

    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }


  render(){
    return (
      // render to return 1 element
      <div>
        <h1>Hello World</h1>
        {/* <input onChange={this.setNum1} value={num1}></input>
        <input onChange={this.setNum2} value={num2}></input> */}
        <div>
          <h1>{this.state.result}</h1>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.multiply}>*</button>
          <button onClick={this.divide}>/</button>
          <button onClick={this.clear}>Clear</button>

        </div>
      </div>
    );
  }
}

export default Calculator;
