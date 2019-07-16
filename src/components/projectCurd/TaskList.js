import React, { Component } from 'react';
import TaskItem from './TaskItem';


class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1
        };
    }

    onChange = (event)=>{
        var targets = event.target;
        var name = event.target.name;
        var value = targets.type === 'checkbox' ? targets.checked : targets.value ;
        this.setState({
            [name]: value
            // [event.target.name] : event.target.checked
        })
        var paramFilter={
            filterName : this.state.filterName,
            filterStatus : parseInt(this.state.filterStatus) 
        }
        this.props.onfilter(paramFilter);
    }

    


    render() {
        var {tasks} = this.props;
        
        var elmTasks = tasks.map((task , index) => {
            return <TaskItem key={task.id} 
                            index={index} 
                            task={task} 
                            onUpdateStatus = {this.props.onUpdateStatus} //pops truyen tu app
                            onDeleteItem = {this.props.onDeleteItem} //pops truyen tu app
                            onUpdateItem = {this.props.onUpdateItem} //pops truyen tu app
            />
        });
        
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        onChange={ this.onChange }
                                        value={ this.state.filerName }
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        onChange={ this.onChange }
                                        value={ this.state.filterStatus }
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                        {elmTasks}
                    </table>
                </div>
            </div>
        );
    }
}



export default TaskList;
