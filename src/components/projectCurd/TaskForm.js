import React, { Component } from 'react';


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        };
    }
    componentWillMount(){
        this.referDataEdit();
    }
    onExitForm = () =>{
        this.props.onExitForm();
    }
    onHandleChange = (event) => {
        var targets = event.target;
        var name = event.target.name;
        var value = targets.type === 'checkbox' ? targets.checked : targets.value ;
        this.setState({
            [name]: value
            // [event.target.name] : event.target.checked
        })
    }

    onClear = () => {
        this.setState({
            id : '',
            name : '',
            status : false
        });
    }
    

    onSave = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        //clear form
        this.onClear();
        this.onExitForm();
    }

    referDataEdit=()=>{
        console.log('id truyen vao form laf :'+ this.props.taskEditting.id);
        if(this.props.taskEditting){
            this.setState({
                id : this.props.taskEditting.id,
                name : this.props.taskEditting.name,
                status : this.props.taskEditting.status
            })
        }else{
            this.setState({
                id :'',
                name : '',
                status : ''
            })
        }
        
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { !this.state.id ? 'Thêm Công Việc' : 'Cập Nhật Công Việc' }
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onExitForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={ this.onHandleChange }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onHandleChange}
                            name="status"
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button type="button" onClick={ this.onClear } className="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default TaskForm;
