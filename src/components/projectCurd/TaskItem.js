import React, { Component } from 'react';


class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
        // console.log();
    }
    
    onDeleteItem = ()=>{
        this.props.onDeleteItem(this.props.task.id);
    }
    
    onUpdateItem =()=>{
        this.props.onUpdateItem(this.props.task.id);
    }
    render() {
        return (
            <tr>
                <td>{ this.props.index }</td>
                <td>{ this.props.task.name }</td>
                <td className="text-center">
                    <span 
                        className = {this.props.task.status === true ? 'label label-danger':'label label-success'}
                        onClick={this.onUpdateStatus}
                        > 
                         {this.props.task.status === true ? 'kick hoat':'an'}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={ this.onUpdateItem }>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger"
                        onClick={ this.onDeleteItem }>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}



export default TaskItem;
