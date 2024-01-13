const mapStateProps= (state) => {   
    return {tasks: state.tasks} 
    };
const mapDispatch = (dispatch) => {
    return {
        add: ()=>{ dispatch({type:"ADD",payload: text})},
        delete : ()=>{ dispatch({type:"DELETE"})},
        modify : ()=>{ dispatch({type:"MODIFY",payload: text})}
    }
}

export default (mapDispatch, mapStateProps);
