import React, { Component } from 'react';


class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: []
    }

    this.handleChange = this.handleChange.bind(this);
    
  }
  

  handleChange = (event) => {
    this.setState({
      listItems: this.state.listItems.append(event.target.value)
    })
    console.log(this.state.listItems);
  }

  render() {
    return (
      <div class="row-fluid">
        <form class="form-horizontal">
          <fieldset>
            <legend> My Form</legend>
            
            
              <h1>Section 1</h1>
              <p>Input 1</p>
              <input type="text" id="input1" onChange={this.handleChange} />
              <p>Input 2</p>
              <input type="text" id="input2" onChange={this.handleChange} />
              
              <p id="test"></p>
              
              <p>Radio Inputs</p>
              <input type="radio" id="contactChoice1" name="contact" value="email" />
              <label for="contactChoice1">Email</label>
              
              <input type="radio" id="contactChoice2" name="contact" value="phone" />
              <label for="contactChoice2">Phone</label>
              
              <input type="radio" id="contactChoice3" name="contact" value="mail" />
              <label for="contactChoice3">Mail</label>
              
         
            
        
            
              <h1>Section 2</h1>
              <p>Input 1</p>
              <input type="text" id="input1" onkeyup="getVals()"/>
              <p>Input 2</p>
              <input type="text" id="input2" onkeyup="getVals()" />
              
              <p>Radio Inputs</p>
              <input type="radio" id="contactChoice1" name="contact" value="email" />
              <label for="contactChoice1">Email</label>
              
              <input type="radio" id="contactChoice2" name="contact" value="phone" />
              <label for="contactChoice2">Phone</label>
              
              <input type="radio" id="contactChoice3" name="contact" value="mail" />
              <label for="contactChoice3">Mail</label>
              
            
            
            
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
