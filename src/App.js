import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [items, setItem] = useState([]);
  const [inputItem, setInputItem] = useState("");

  this.inputRef = React.createRef();
  const handleAdd = () => {
    if (inputItem) {
      setItem((oldarr) => {
        return [...oldarr, inputItem];
      });
    }
    setInputItem("");
  };
  const removeTodo = (i) => {
    let todos = items.slice();
    todos.splice(i, 1);
    setItem(todos);
  };

  return (
    <div className="App">
      <h1>MY TodoList LIST</h1>
      <h4>Add Items Here</h4>
      <ul>
        {items.map((itemval) => {
          return <li key={itemval}>{itemval}</li>;
        })}
      </ul>
      <input
        type="text"
        placeholder="input item"
        ref={this.inputRef}
        value={inputItem}
        onChange={(event) => setInputItem(event.target.value)}
      />
      <br />
      <br />
      <button onClick={handleAdd}>Add Item</button>
      <button onClick={removeTodo}>Delete Item</button>
    </div>
  );
}
