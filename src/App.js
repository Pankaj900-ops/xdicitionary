import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  // Dictionary state (MANDATORY as per requirement)
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const result = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="container">
      <h2>XDictionary</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Search Button */}
      <button onClick={handleSearch}>Search</button>

      {/* Output */}
      {definition && definition !== "Word not found in the dictionary." && (
        <>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </>
      )}

      {definition === "Word not found in the dictionary." && (
        <p>{definition}</p>
      )}
    </div>
  );
}

export default App;
