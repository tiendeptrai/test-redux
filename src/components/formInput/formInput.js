import React, { Component } from 'react';
import {connect} from 'react-redux';
class FormInput extends Component {
    constructor(props){
      super(props);
      this.state ={
          email : '',
          password:'' 
      }
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
      this.setState({
          [event.target.name]: event.target.value
        //  ...this.state.form, [event.target.name]: event.target.value 
      })
    }

    addData(){
      var dataForm ={
        email : this.state.email
      , password :this.state.password
      }
      this.props.addDataStore(dataForm);
    }

    render() {
        const cv_email = this.state.emai + '@gmail.com'
        const cv_phone =  this.state.emai + '@gmail.com'
        return (
            <div className="section is-fullheight">
            <span>{this.state.email}</span>
            <span>cv_email}</span>
              <div className="container">
                <div className="column is-4 is-offset-4">
                  <div className="box">
                    <form >
                      <div className="field">
                        <label className="label">Email Address</label>
                        <div className="control">
                          <input className="input" type="email" name="email" onChange={this.handleChange} value={this.state.email} required />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                          <input className="input" type="password" name="password" onChange={this.handleChange} value={this.state.password} required />
                        </div>
                      </div>
                      <button type="reset" onClick={this.addData} className="button is-block is-info is-fullwidth">Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataFrom: {
      email:state.email
    , password:state.password
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDataStore: (dataFormInputs) => {
      dispatch("ADD_DATA",dataFormInputs)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormInput);
