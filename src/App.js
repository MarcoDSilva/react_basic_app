import React, { useState } from "react";

const App = () => {
  // array of people and method to update it
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  //adding a name to the person arr state
  const addName = (e) => {
    e.preventDefault();
    console.log("clicked the btn", e.target);

    // we try to find if this new name already exists 
    const nameExists = persons.find(n => n.name === newName)

    // if the name exists, we alert the user and end this method
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("");
      return;
    }

    const nameObj = {
      name: newName,
    };

    setPersons(persons.concat(nameObj));
    setNewName("");
  };

  // it gets the info from the input form
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
