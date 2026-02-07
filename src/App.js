import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

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
    <div>
      {/* ✅ MUST MATCH TEST */}
      <h2>Dictionary App</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {/* ✅ MUST ALWAYS BE PRESENT */}
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default App;
