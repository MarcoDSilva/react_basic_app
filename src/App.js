import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const addName = (e) => {
    e.preventDefault();
    console.log("clicked the btn", e.target);

    const nameObj = {
      name: newName
    }

    setPersons(persons.concat(nameObj))
    setNewName('')
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
    </div>
  );
};

export default App;
