import { connect } from "react-redux";
import {mapDispatch,mapStateProps} from "./store/maps.js"

function TaskList ({tasks,add,delete,modify}) {
    return (
        <>
        <h1>Lista de Tareas</h1>
        <buttom onClick={add}>Añadir</buttom>
        <buttom onClick={delete}>Borrar</buttom>
        <buttom onClick={modify}>Modificar</buttom>
        <ul></ul>
        </>
    )
}

export default connect(mapStateProps,mapDispatch)(TaskList);