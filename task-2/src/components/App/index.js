import "./app.css";

import Input from "../Input";
import List from "../List";
import { useState } from "react";

function App() {
  const [names, setNames] = useState([]);

  function addName(addedName) {
    const updatedNames = [...names, addedName];
    setNames(updatedNames);
  }

  return (
    <main>
      <Input addItem={addName} />
      <List items={names} />
    </main>
  );
}

export default App;
