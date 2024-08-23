import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer(checked => !checked, false);
  return (
    <div className="App">
      <input
      type="checkbox" 
      checked={checked}
      onChange={()=>{
        setChecked(setChecked);
      }}
      />
      <label>{checked? "checked" : "unchecked"}</label>
    </div>
  );
}

export default App;
