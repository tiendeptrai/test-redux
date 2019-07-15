import React, {Component} from 'react'

export default class ReactRef extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contentRef: 'aaa'
        }
    }
    handChange = () =>{
       console.log(this.refs.nameInput.value);
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="refInput">ahihi</label>
                    <input
                        type="text"
                        className="form-control"
                        name="refInput"
                        id="refInput"
                        aria-describedby="helpId"
                        placeholder="ahuhu"
                        value = {this.state.contentRef}
                        ref ="nameInput"
                        // onChange ={(event)=>this.handChange}
                        onChange ={this.handChange}
                    />
                </div>

            </div>

        )
    }
}
