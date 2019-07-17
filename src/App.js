import React, { Component } from 'react';
import './App.css';

import TaskList from './components/projectCurd/TaskList';
import TaskForm from './components/projectCurd/TaskForm';
import TaskControl from './components/projectCurd/TaskControl';
// import { connect } from 'react-redux';
// import * as actions from './actions/index';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tasks :[
                {
                    id : '1',
                    name :'hoc lt',
                    status:true
                },
                {
                    id : '2',
                    name :'hoc lt1',
                    status:true
                },
                {
                    id : '3',
                    name :'hoc lt2',
                    status:true
                },
                {
                    id : '4',
                    name :'hihi',
                    status:true
                },
            ],
            taskEditting : '',
            filter : {
                filterName : '',
                filterStatus : ''
            },
            isDisplayForm :false
        }
    }
    
    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }

    onGenerateDate = () =>{
        console.log(this.state);
    }

    onExitForm = ()=>{
        this.setState({
            isDisplayForm : false
        })
    }

    editTask = (dataForm)=>{
        var {tasks} = this.state;
        var index = dataForm.id - 1;
        
        tasks[index].name = dataForm.name;
        tasks[index].id = dataForm.id;
        tasks[index].status = dataForm.status;
        this.setState({
            tasks :tasks
        })
        
    }

    addTask =(dataForm)=>{
        var {tasks} = this.state;
        var task = [{
            id : this.state.tasks.length + 1,
            name : dataForm.name,
            status :dataForm.status === 'true'?true:false   
        }];
        
        // console.log("TCL: App -> onSubmit -> dataForm", dataForm);
        // console.log('data form data la :');
        // console.log(task);
        // console.log('data state data la :');
        // console.log(tasks);
        tasks.push(task[0]);
        this.setState({
            tasks : tasks
        })
        // console.log('sau khi push');
        // console.log(this.state.tasks);
    }

    onSubmit =(dataForm)=>{

        if(dataForm.id != ''){
            this.editTask(dataForm);
        }else{
            this.addTask(dataForm);
        }
        
    }   
    //id : id item update status
    onUpdateStatus = (id)=>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        console.log(index);
        if(index != -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks :tasks
            })
        }
        console.log(id);
    }



    //id : id item delete
    onDeleteItem = (id)=>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        console.log(index);
        if(index != -1){
            tasks.splice(index,1);
            
            this.setState({
                tasks :tasks
            })
            this.onExitForm();
        }
        console.log(id);
    }
    //update item truyen data xuong component form 
    onUpdateItem=(id)=>{
        var {tasks} = this.state;
        
        var index = this.findIndex(id);
        // console.log("TCL: App -> onUpdateItem -> id", id);
        // console.log(index);
        id = id - 1;
        if(index != -1){
            var taskEdit = tasks[id];
            var taskEditting = taskEdit;
            console.log(taskEdit);
            this.setState({
                taskEditting : taskEdit
            });
            // 
            console.log(this.state.taskEditting);
            if(this.state.taskEditting != null){
                this.onToggleForm();
            }
            // console.log(tasks[index]);
            //truyenf data item len form
        };
    }

    // find item update by ID
    findIndex = (id) =>{
        var {tasks} = this.state;
        var result = -1
        tasks.forEach((task,index)=>{
            if(task.id == id){
                result = index;
            }
        });
        return result;

    }
    //nhan date tu input TasKlist
    onfilter = (paramFilters)=>{
        this.setState({
            filter : {
                filterName : paramFilters.filterName,
                filterStatus : paramFilters.filterStatus
            }
        });
        console.log('state trne');
        console.log(this.state.filter);
    }

    fillDataFilter = (tasks)=>{
        tasks =  tasks.filter((task) => {
            return task.filerName.indexOf(task.filerName) != -1;
        });
        // return tasks;
    }

    render() {
        //data list task
        var {tasks, isDisplayForm,taskEditting,filter} = this.state;

        console.log(filter.filterName);
        if(filter.filterName != ''){
            tasks =  tasks.filter((task) => {
                return task.name.indexOf(filter.filterName) !== -1;
            });
        }
        console.log('filtersssssssss');
        console.log(tasks);

        var elmTaskForm = isDisplayForm ?<TaskForm 
                    onSubmit = {this.onSubmit} 
                    onExitForm = {this.onExitForm}
                    taskEditting = {taskEditting}
                    /> : ''
        // giống
        // var tasks = this.state.tasks
        // console.log(tasks);
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        {elmTaskForm}
                    </div>
                    <div className={ isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
                            <span className="fa fa-plus mr-5"></span>
                            Thêm Công Việc
                        </button>
                        <button type="button" className="btn btn-primary" onClick={this.onGenerateDate} >
                            <span className="fa fa-plus mr-5"></span>
                            Gen data
                        </button>
                        <TaskControl />
                        <TaskList 
                            tasks = {tasks}
                            onUpdateStatus = {this.onUpdateStatus} // truyền data từ component con (taskList) sang App 
                            onDeleteItem = {this.onDeleteItem}
                            onUpdateItem = {this.onUpdateItem}
                            //filter form
                            onfilter = {this.onfilter}

                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
