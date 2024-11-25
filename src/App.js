import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import { useReducer } from "react";
import { createContext } from "react";

//use reducer hook
function reducer(state, action) {
  if (action.type === "Increment") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "Reset") {
    return { ...state, count: 0 };
  }

  if (action.type === "Decrement") {
    return { ...state, count: state.count - 1 };
  }

  throw new Error("error my friend");
}

const initialState = { count: 0 };

// create context '

export const MyAppContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [statee, setState] = useState({ count: 0 });

  function handleIncrese() {
    dispatch({
      type: "Increment",
    });
  }

  function handleReset() {
    dispatch({
      type: "Reset",
    });
  }
  function handleDecrease() {
    dispatch({
      type: "Decrement",
    });
  }
  return (
    <MyAppContext.Provider value={handleDecrease}>
      <div className="App">
        <h1>UseReducerrr Tutorial</h1>
        <hr />
        <h4>Counter: {state.count}</h4>
        <button onClick={handleIncrese}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>decrease</button>
      </div>
    </MyAppContext.Provider>
  );
}

export default App;
