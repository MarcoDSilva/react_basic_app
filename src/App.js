import React, { useState } from "react";

const App = () => {
  // array of people and method to update it
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: "91999999999",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  //adding a new person to our state
  const addPerson = (e) => {
    e.preventDefault();
    console.log("clicked the btn", e.target);

    const resetForm = () => {
      setNewName("");
      setNewPhone("");
    }
    // we try to find if this new name already exists
    const nameExists = persons.find((n) => n.name === newName);

    // if the name exists, we alert the user and end this method
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`);
      resetForm();
      return;
    }

    const nameObj = {
      name: newName,
      phone: newPhone,
    };

    setPersons(persons.concat(nameObj));
    resetForm();
  };

  // it gets the info from the input form
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    console.log(e.target.value);
    setNewPhone(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.name}>
            {p.name} - {p.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
