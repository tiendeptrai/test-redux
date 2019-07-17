import React, { Component } from 'react';
import TextInput from '../commonForm/TextInput';
import Select from '../commonForm/Select';
import Radio from '../commonForm/Radio';
import Validate from './Validate'
class UseCommonInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            formIsValid : false,
            formControls: {          
                name1: {
                    value: '',
                    valid: true,
                    validationRules: {
                        minLength: 3,
                        isEmail : true
                    }
                },
                aDat: {
                    value: '',
                    valid: true,
                    validationRules: {
                        minLength: 3
                    }
                },
                my_email: {
                    value: '',
                    placeholder: 'What is your email',
                    valid: true,
                    validationRules: {
                      isRequired: true,
                      isEmail: true
                    },
                },
                gender: {
                    value: '',
                    placeholder: 'What is your gender',
                    valid: false,
                    validationRules: {
                      isRequired: true,
                    },
                    options: [
                      { value: 'male', displayValue: 'Male' },
                      { value: 'female', displayValue: 'Female'}
                    ]
                },
                my_radio: {
                    value: '',
                    placeholder: 'Are you a frontend developer',
                    valid: false,
                    validationRules: {
                      // isRequired: true,
                    },
                    options: [
                      { value: 0, displayValue: 'No' },
                      { value: 1, displayValue: 'Yes' }
                    ]
                  }
            }
        }
      }

      changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
       
        const updatedControls = this.state.formControls;
    
        const updatedFormElement = updatedControls[name];

        updatedFormElement.value = value;
        updatedFormElement.valid = Validate(value,updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        //error form
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
        //
        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

        
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        var formControls = this.state.formControls;
        var error = this.state.formIsValid
        if(error){
            console.log(formControls);
        } 
    }
    

    render() {
        return (
            <div>
                <div>
                    <TextInput
                        name="name1"
                        value={this.state.formControls.name1.value}
                        onChange={this.changeHandler}
                        valid={this.state.formControls.name1.valid}
                    />
                </div>
                <div>
                    <TextInput
                        name="aDat"
                        value={this.state.formControls.aDat.value}
                        onChange={this.changeHandler}
                        valid={this.state.formControls.aDat.valid}
                    />
                </div>
                <Select name="gender"
                  value={this.state.formControls.gender.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.gender.options}
                  valid={this.state.formControls.gender.valid}
                />
                <Radio name="my_radio"
                    value={this.state.formControls.my_radio.value}
                    onChange={this.changeHandler}
                    options={this.state.formControls.my_radio.options}
                    touched={this.state.formControls.my_radio.touched}
                    valid={this.state.formControls.my_radio.valid}
                />
                <button onClick={this.formSubmitHandler}> Submit </button>
            </div>
           
        )
    }
}

export default UseCommonInput;