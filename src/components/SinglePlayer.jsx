
// Import the generated hook from our RTK Query API slice
import {  useFetchPlayerQuery,useDeletePlayerMutation } from "../API/index"; 

// React Router imports (useParams)
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePlayer() {
  // get the item id from the url parameters
  const { playerId } = useParams();

  const { data = {}, error, isLoading } = useFetchPlayerQuery(playerId)

  const [deletePlayer] = useDeletePlayerMutation();
  const navigate = useNavigate();

  function handleDelete(e) {
    deletePlayer(e.id)
    navigate(`/players`)
  }

if (isLoading) {
    return <div>Loading</div>;
  }
  // Show an error message if the fetch failed
  if (error) {
    console.log(error.data);
    return <div>Error</div>;
  }

 const player = data.data.player
  return (
    <section className="player-wrapper">
      <div className="player-header">
        <div className="player-wrapper">
          <img src={player.imageUrl} alt={player.name} />
        </div>
        <div className="player-title-wrapper">
          <h2> Name: {player.name} </h2>
          <p> Breed: {player.breed} </p>
          <p> Status: {player.status} </p>
        </div>
      </div>
      <button onClick={() => handleDelete(player)}>Delete</button>
    </section>
  );
}

//demo for items, workshop 28
