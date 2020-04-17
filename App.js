import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      gender: '',
      country: '',
      language:''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h2>Hello {this.state.username} {this.state.gender} {this.state.country} {this.state.language}</h2>
      
      <p>Enter your name:
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}/>
      </p>

      <p>Select Gender:
        <input type="radio" id="male" name="gender" value="male"onChange={this.myChangeHandler}/>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" onChange={this.myChangeHandler}/>
        <label for="female">Female</label>
      </p>
  
      <label for="country">Select a Country:</label>
      <select id="country" name="country" onChange={this.myChangeHandler}>
        <option value="">select</option>
        <option value="INDIA">INDIA</option>
        <option value="US">US</option>
        <option value="PAK">PAK</option>
      </select>

      <p>Select Language:
        <input type="radio" id="hindi" name="language" value="hindi" onChange={this.myChangeHandler}/>
        <label for="hindi">Hindi</label>
        <input type="radio" id="english" name="language" value="english" onChange={this.myChangeHandler}/>
        <label for="english">English</label>
        <input type="radio" id="german" name="language" value="german" onChange={this.myChangeHandler}/>
        <label for="german">German</label>
      </p>

        <input type="submit" value="Submit"></input>
     </form>
    );
  }
}
export default App;
