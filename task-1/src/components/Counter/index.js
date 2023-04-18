import React, { useReducer } from "react";

// 1. import
 // import useReducer from react and remove useState DONE
 // write a useReducer that takes in two parameteres called state and dispatch and gives useReducer with initial state (0) and reducer [DONE]
// 2. write function 
 // call function Reducer DONE
 // include switch that takes in action as "INCREMENT" and "DECREMENT" returns count DONE
 // make another case called default for errors.DONE
//3. render 
 // add to JSX by adding action and a object to dispatch. 
// const initialState ={count:0}
// const [count , dispatch] = useReducer(Reducer, initialState)

function reducer(count, action) {
switch(action.type){
case "INCREMENT":
  return count +1;
  case "DECREMENT":
    return count -1;
    default:
      throw new Error(`unsupported action type ${action.type}`);

}
}

function Counter() {
 
const [count , dispatch] = useReducer(reducer, 0)


  function incrementCount() {
    dispatch({type: "INCREMENT"})
  }

  function decrementCount() {
    dispatch({type: "DECREMENT"})
  }
  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <p>{count}</p>
      <button onClick={decrementCount} >-</button>
    </div>
  );
}

export default Counter;



  // const [count, setCount] = useState(0);

  // function incrementCount() {
  //   dispatch({type: "increment"})
  // }

  // function decrementCount() {
  //   dispatch({type: "decrement"})
  // }
