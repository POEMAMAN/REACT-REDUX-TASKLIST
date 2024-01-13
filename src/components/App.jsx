import { Provider } from "react-redux";
import storeTasks from "./store/store";
import TaskList from "./TaskList";

function App() {
    return (
        <Provider store={storeTasks}>
        {/* la props store esta predefinida por provider */}
        <div>
            <TaskList />
        </div>
        </Provider>
    );

}

export default App;
