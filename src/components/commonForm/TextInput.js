import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="form-group">
    
                    <input type="text" className={this.props.valid ? 'form-control':'form-control control-error'} {...this.props} />
                
                </div>
            </div>
            // <div>ahihi</div>
        )
    }
}
export default TextInput