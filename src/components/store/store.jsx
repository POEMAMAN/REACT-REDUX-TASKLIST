//Almacen Redux
import {createStore} from "redux"

const addAction = {type: "ADD"} //DEFINIR LA FUNCION DE INCREMENTO Y EL VALOR DE LA FUNCION
const deleteAction = {type: "DELETE"}
const modifyAction = {type: "MODIFY"}


const taskReducer = (state = { tasks: []}, action) => 
{
  switch (action.type) {

    case "ADD":
      return { tasks: [...state.tasks,
        {id: Date.now(), text: action.payload, completed: false}
      ]};  
    case "DELETE":
      return { tasks: state.count+1};  
    case "MODIFY":
      return { tasks: state.count+1};  
    default:
        return state;
  }
};

const storeTasks = createStore(taskReducer);

export default storeTasks;
