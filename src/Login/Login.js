import React from "react";
import { withRouter } from "react-router";
import "./Login.css";

class Login extends React.Component {
  State = { firstName: "", secondName: "" };
  setData(first, second) {
    let obj = { firstName: `${first}`, secondName: `${second}` };
    localStorage.setItem("myData", JSON.stringify(obj));
  }
  getData() {
    let data = localStorage.getItem("myData");
    data = JSON.parse(data);
    console.log(data.firstName);
    console.log(data.secondName);
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  RecordUser = () => {
    this.setData(`${this.state.firstName}`, `${this.state.secondName}`);
    // history.push('/todo-cards')
    this.props.history.push("/todo-cards");
  };
  render() {
    return (
      <div className="wrapper">
         <div className="todo-card">
        <link rel="stylesheet" href="css/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
        <h1>Welcome to here</h1>
        <div>
         
          <input class="un "
            align="center"
            name="firstName"
            onChange={this.onChange}
            placeholder=" 
            First Name "
            type="text"
          />
        </div>

       
        <input class="un "
            align="center"
          name="secondName"
          onChange={this.onChange}
          placeholder="Last Name "
          type="text"
        />
        <button class="submit" onClick={(e) => this.RecordUser(e)}>Submit</button>
      </div>
      </div>
    );
  }
}
export default withRouter(Login);
