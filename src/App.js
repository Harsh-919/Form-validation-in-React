import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      mobile: '',
      semester: '',
      gender: '',
      message: '',
      password: '',
      cpassword: '',
      checkbox: true,
      error: {},
      detail: {}
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ checkbox: !this.state.checkbox })
  }
  formValidation = () => {
    const { username, email, mobile, semester, gender, message, password, cpassword, checkbox } = this.state
    let isValid = true;
    const error = {};

    if (!username) {
      error.username = "Enter Username"
      isValid = false;
    }
    if (username.length < 4) {
      error.username = "Please enter name above 4 letter"

    }
    if (!email) {
      error.email = "Enter Email"
      isValid = false
    }
    if (!mobile) {
      error.mobile = " Enter Mobile Number"
      isValid = false
    }
    if (mobile.length != 10) {
      error.mobile = "Enter 10 Degit Number"
      isValid = false
    }
    if (!semester) {
      error.semester = "Please Select Semester"
      isValid = false
    }
    if (!gender) {
      error.gender = "Please Select Gender"
      isValid = false
    }
    if (!message) {
      error.message = "type some message"
      isValid = false
    }

    if (!password) {
      error.password = "Please Enter Password"
      isValid = false
    }
    if (password != cpassword) {
      error.cpassword = "password dont match re try"
      isValid = false
    }
    if (password.length <= 8) {
      error.password = "enter 8 degite password"
      isValid = false
    }
    if (this.state.checkbox) {
      error.checkbox = "please check terms and condiotions"
      isValid = false
    }

    this.setState({ error })
    return isValid
  }




  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    if (isValid) {
      console.warn("Form Data  " + this.state.username + this.state.email);
      this.setState({ username: "", email: "", mobile: "", semester: "", gender: "", message: "", password: "", cpassword: "", error: {}, checkbox: "" })

      const detail = {}
      detail.username = this.state.username
      detail.email = this.state.email
      detail.mobile = this.state.mobile
      detail.gender = this.state.gender
      detail.semester = this.state.semester
      detail.message = this.state.message
      this.setState({ detail })
    }

  }


  render() {
    const { username, email, mobile, semester, gender, message, password, cpassword, checkbox, error, detail } = this.state
    return (

      <React.Fragment>
        <form onSubmit={this.onSubmit}>

          <h2>Register Here</h2>

          {
            Object.keys(error).map((key) => {
              return <div style={{ color: 'red' }} key={key}>{error[key]}</div>
            }


            )}



          Name:<input type="text" name="username" value={username} placeholder="Name" onChange={this.onChange.bind(this)} /><br /><br />
          Email:<input type="email" name="email" value={email} placeholder="Email" onChange={this.onChange.bind(this)} /><br /><br />
          Mobile:<input type="number" name="mobile" value={mobile} placeholder="Mobile Number" onChange={this.onChange.bind(this)} /><br /><br />
          Semester:<select name="semester" value={semester} onChange={this.onChange.bind(this)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select><br /><br />
          Gender:<input type="radio" name="gender" value="Male" onChange={this.onChange.bind(this)} />Male
          <input type="radio" name="gender" value="Female" onChange={this.onChange.bind(this)} />Female
          <br /><br />
          Message:<textarea rows="3" cols="30" name="message" value={message} placeholder="Write message Here" onChange={this.onChange.bind(this)} /><br /><br />
          password:<input type="password" name="password" value={password} placeholder="Password" onChange={this.onChange.bind(this)} /><br /><br />
          Confirm :<input type="password" name="cpassword" value={cpassword} placeholder="Confirm Password" onChange={this.onChange.bind(this)} /><br /><br />
          I Agree All terms & Condition <input type="checkbox" name="checkbox" value={checkbox} onChange={this.onChange.bind(this)} /><br /><br />

          <input type="submit" value="submit" />

        </form>
        <div>
          {detail.username}<br />
          {detail.email}<br />
          {detail.mobile}<br />
          {detail.semester}<br />
          {detail.gender}<br />
          {detail.message}<br />
        </div>
      </React.Fragment>

    )
  }
}

export default App;