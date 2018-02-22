import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var today = function myFunction() {
    var d = new Date();
    var n = d.toDateString();
    return n;
}


{/* This function is responsible for adding the input order to state. 
handleSubmit(event) {
  …
}
*/}

class App extends Component {

  render() {
    return (
        <div>
          {/*  Display Page Header */}
          <div className = "company-header">
            <h2>Frugrainian Deli Monitor</h2>
            <h2>{today}</h2>
          </div>

          {/* Display Slogan and Thank You */}
          <div className = "slogan">
            <h2>Thank You for letting us be of service.</h2>
            <h2>We appreciate YOU. Together we are better.</h2>           
          </div>

        {/* Below is the header elenets of the original script.

        1. The header elements template for App 
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        
        2. The initial content element  for App
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        */}

          <div className = "menu-order-queue">

             {/* Display Menu */}
              <div className = "menu">
                <h2>Fall Menu</h2>
                <ul>
                  <li>1. Foods Of the Day</li>
                  <li>2. Foods Of the Season</li>
                  <li>3. Juice Of the Day</li>
                  <li>4. Juice Of the Season</li>
                  <li>5. Chef's Special Of the Day</li>
                  <li>6. Manager's Special Cherry Pie</li>
                </ul>
              </div>            

              <div className = "order">
                <h2 >Take Order</h2>
                <form onSubmit = {this.handleSubmit}>
                  Name: <input className = "inputOrder" id = "Name" type="text" onChange="GettingName()" placeholder = "customerName" required /><br />
                  <br />
                  <fieldset>
                    <legend>Click to choose 1:</legend>
                      <input type="radio" name="order" value= "1" /> Foods Of The Day<br />
                      <input type="radio" name="order" value= "2" /> Foods Of The Season<br />
                      <input type="radio" name="order" value= "3" /> Juice Of The Day<br />
                      <input type="radio" name="order" value= "4" /> Juice Of The Season<br />
                      <input type="radio" name="order" value= "5" /> Chef's Special<br />
                      <input type="radio" name="order" value= "6" /> Manager's Special<br />                   
                      <input className = "inputOrder" type="submit" name="Order" value="Add Customer Order" /><br />
                  </fieldset>
                </form>
              </div>

              <div className = "queue">
                <h2 >Orders In Queue</h2>
 
              </div>

          </div>

       </div>
    );
  }
}

export default App;
