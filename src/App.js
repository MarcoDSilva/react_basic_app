import React, { useState } from "react";

const App = () => {
  // array of people and method to update it
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "91999999999" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  //adding a new person to our state
  const addPerson = (e) => {
    e.preventDefault();
    console.log("clicked the btn", e.target);

    const resetForm = () => {
      setNewName("");
      setNewPhone("");
    };
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
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  // we update the filter input here
  const handleFilter = (e) => {
    setNewFilter(e.target.value.toLowerCase());
  };

  // we return the persons states conforming the filter state.
  const filteredState = () => {
    if (newFilter === "") {
      return persons;
    } else {
      return persons.filter((a) => a.name.toLowerCase().includes(newFilter));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilter} />
      </div>

      <form onSubmit={addPerson}>
        <h2>Add a new</h2>
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
      <section>
        {filteredState().map((p) => (
          <p key={p.name}>
            {p.name} - {p.number}
          </p>
        ))}
      </section>
    </div>
  );
};

export default App;
