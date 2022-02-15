import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [newAnimals, setNewAnimals] = useState({
    category: "",
    name: "",
  });

  useEffect(() => {
    fetchAnimalsApi();
  }, []);

  const fetchAnimalsApi = async () => {
    await axios
      .get("http://localhost:3002/api/animals")
      .then((res) => setAnimals(res.data));
  };

  const addAnimals = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3002/api/animals", newAnimals)
      .then((response) => console.log(response));
    fetchAnimalsApi();
  };

  return (
    <div className="App">
      {animals.map((animal) => {
        return (
          <>
            <h1>{animal.name}</h1>
            <p>{animal.category}</p>
          </>
        );
      })}

      <form onSubmit={addAnimals}>
        <input
          value={newAnimals.category}
          onChange={(e) =>
            setNewAnimals({ ...newAnimals, category: e.target.value })
          }
        />
        <input
          value={newAnimals.name}
          onChange={(e) =>
            setNewAnimals({ ...newAnimals, name: e.target.value })
          }
        />
        <button type="submit">Add animals</button>
      </form>
    </div>
  );
}

export default Animals;
