import React, { Component } from 'react';


class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      buttonValue: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleClick (event) {
    this.setState({
      buttonValue: this.state.inputValue
    })
  }

  handleChange (event) {
    this.setState({
      inputValue: event.target.value
    })
    console.log(this.state.inputValue);
  }

  render() {
    return (
      <div className="row-fluid">
        <form className="form-horizontal">
          <fieldset>
            <legend> My Form</legend>
            
            
              <h1>Section 1</h1>


              <p>Input 1</p>
              <input type="text" id="input1" onChange={this.handleChange}/>
              <p>{this.state.inputValue}</p>

              <button onClick={this.handleClick}> {this.state.buttonValue} </button>

              <p>Input 2</p>
              <input type="text" id="input2" onChange={this.handleChange} />
              
              <p id="test"></p>
              
              <p>Radio Inputs</p>
              <input type="radio" id="contactChoice1" name="contact" value="email" />
              <label>Email</label>
              
              <input type="radio" id="contactChoice2" name="contact" value="phone" />
              <label>Phone</label>
              
              <input type="radio" id="contactChoice3" name="contact" value="mail" />
              <label>Mail</label>
              
         
            
        
            
              <h1>Section 2</h1>
              <p>Input 1</p>
              <input type="text" id="input1" />
              <p>Input 2</p>
              <input type="text" id="input2" />
              
              <p>Radio Inputs</p>
              <input type="radio" id="contactChoice1" name="contact" value="email" />
              <label>Email</label>
              
              <input type="radio" id="contactChoice2" name="contact" value="phone" />
              <label>Phone</label>
              
              <input type="radio" id="contactChoice3" name="contact" value="mail" />
              <label>Mail</label>
              
            
            
            
            <div>
              <button type="submit">Submit</button>
            </div>
            
            <p></p>
            
          </fieldset>
        </form>
	    </div>
    );
  }
}

export default Inputs;
