import { createStore } from "redux";
var redux = required('redux');
const formInitialState = {
    dataFrom : ''
};
const formReducer = (state = formInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log('bien nhan vao'+ action.dataFormInputs);
            return state
        default:
            return state
    } 
  switch (action.type) {
        case "ADD_DATA_AA":
            console.log('bien nhan vao AAA'+ action.dataFormInputs);
            return state
        default:
            return state
    } 
}
var formInput = redux.createStore(formReducer);
export default formInput;
