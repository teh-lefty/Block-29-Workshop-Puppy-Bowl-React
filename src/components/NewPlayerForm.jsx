import { useState } from "react";
import { useAddPlayerMutation } from "../API";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("bench");
  const [imgUrl, setImgUrl] = useState("");
  const [addPlayer] = useAddPlayerMutation();
  const navigate = useNavigate();

 async function handleSubmit(e) {
    e.preventDefault();
  let newPlayer = await addPlayer({
      name,
      breed,
      status,
      imgUrl,
    });
   let playerId = newPlayer.data.data.newPlayer.id;
  navigate(`/players/${playerId}`)
  }
  return (
    <>
      <div className="column">
        <h2>Add Player Form</h2>
        <form className="column">
          <label>Name:</label>
          <input onChange={(e) => setName(e.target.value)} name="name"></input>
          <label>Breed:</label>
          <input
            onChange={(e) => setBreed(e.target.value)}
            name="breed"
          ></input>
          <label>Status:</label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            name="status"
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
          <label>Image Url:</label>
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            name="imgUrl"
            type="url"
          ></input>
          <button onClick={handleSubmit} type="submit">
            Add Player
          </button>
        </form>
      </div>
    </>
  );
}

//Workshop 27C
