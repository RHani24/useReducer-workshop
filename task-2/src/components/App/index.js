import "./app.css";
import Input from "../Input";
import List from "../List";
import { useReducer } from "react";

// 1. import useReducer 
 // call useReducer taking in useReducer (reducer and initial state []) giving back state (name) and dispatch DONE.
// 2. create function
 // called Reducer that has two parameters name and action.DONE
 // include Switch that takes in "ADD-NAME" and returns an array of previous list with new name using spread. DONE 
 // include default that will throw and error.DONE
// 3. dispatch function called in jsx 
 // use anonymous function that calls dispatch to add item and includes action as an object. include user input

 function reducer (name, action){
  switch (action.type){
  case "ADD-NAME":
    return [...name, action.payload.name];
    default: 
    throw new Error();

 }
 }

function App() {

const [name, dispatch] = useReducer(reducer, [])

function addItem(newName) {
  dispatch({ type: "ADD-NAME", payload: { name: newName } });
}


  return (
    <main>
      <Input addItem ={addItem} />
      <List items={name} />
    </main>
  );
  }
export default App;

