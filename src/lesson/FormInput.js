import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'dataInput': '',
            'dataPass' : '',
            'sltGender': 0,
            'dataRadio': '',
            'dataCheckBox':true
        }
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = event.name;
        var value = target.type === 'checkbox'?target.checked:target.value
        this.setState({
            [name]: value
        })
    }

    save = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div>
                <div className="form-group">
                    <label htmlFor>ahihi</label>
                    <input
                        type="text"
                        className="form-control"
                        name='dataInput'
                        aria-describedby="helpId"
                        onChange={this.onHandleChange} />
                    <label htmlFor>passs</label>
                    <input
                        type="text"
                        className="form-control"
                        name='dataPass'
                        aria-describedby="helpId"
                        onChange={this.onHandleChange} />
                    <small id="helpId" className="form-text text-muted">{this.state.dataInput}</small>

                    <label htmlFor>Select </label>

                        <div className="form-group">
                            <select className="form-control" name='sltGender' 
                                value={this.state.sltGender}
                                onChange ={this.onHandleChange}
                                >
                                <option value={0}>nam</option>
                                <option value={1}>nu</option>
                            </select>
                        </div>
                        <label htmlFor>Radio box </label>

                        <div classname="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" 
                                    name ="dataRadio"
                                    value ="op1"
                                    onChange = {this.onHandleChange}
                                    id defaultValue="checkedValue" defaultChecked 
                                    checked = {this.state.dataRadio === 'op1'}
                                    
                                    />
                                    radio 1
                                </label>
                                ----------
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" 
                                    name ="dataRadio"
                                    value ="op2"
                                    onChange = {this.onHandleChange}
                                    id defaultValue="checkedValue" defaultChecked 
                                    checked = {this.state.dataRadio === 'op2'}/>
                                    radio 2
                                </label>
                            </div>
                        </div>

                    <label htmlFor>check box</label>
                    <input
                        type="checkbox"
                        className="form-control"
                        name='dataCheckBox'
                        aria-describedby="helpId"
                        value = {this.state.dataCheckBox}
                        onChange={this.onHandleChange} 
                        checked={this.state.dataCheckBox === true}
                        />


                    < input  className="btn btn-primary"
                        type="button"
                        defaultValue="Save"
                        onClick={this.save}
                    />
                </div>
            </div>

            </div>

            
        )
    }
}
