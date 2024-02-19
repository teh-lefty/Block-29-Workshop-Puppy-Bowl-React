// Import the generated hook from our RTK Query API slice
import { useFetchPlayersQuery } from "../API/index";

import NewPlayerForm from "./NewPlayerForm";
import SearchBar from "./Search";

// React Router imports (useNavigate)
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function AllPlayers() {
  const navigate = useNavigate();

  const { data = {}, error, isLoading, refetch } = useFetchPlayersQuery();
  const [players, setPlayers] = useState(data?.data?.players)
  const [searchName, setSearchName] = useState('');
  let playersToDisplay = players
  if (searchName.length>0 && data?.data?.players){
    playersToDisplay = players.filter(eachPlayer=>eachPlayer.name.includes(searchName))
  }
  else {
    playersToDisplay = players;
  }

  useEffect(() => {
    refetch();
  }, []);

  useEffect(()=>{
setPlayers(data?.data?.players)
  },[data])

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading</div>;
  }
  // Show an error message if the fetch failed
  if (error) {
    console.log(error.data);
    return <div>Error</div>;
  }
  console.log(data);
  console.log(players);

  return (
    <>
      {/* FORM */}
      <div className="form">
        <NewPlayerForm />
      </div>

      <div className="form">
        <SearchBar setSearchName={setSearchName}/>
      </div>

      {/* ALL PLAYERS MAP */}
      <div className="players">
        {/* Map through the data array and generate a div for each player 
        players-> to check if players list exits, playersToDisplay depends on if players data is returned from response*/}
        {players && playersToDisplay.map((player) => (
          <button
            key={player.id}
            onClick={() => navigate(`/players/${player.id}`)}
          >
            {/* Use the player's ID as the key for this div */}
            <div className="player-card">
              {/* Display the player's image, with the player's name as alt text */}
              <div className="player-image-container">
                <img className="player-image" src={player.imageUrl} />
              </div>

              <div className="player-details">
                <h2> Name: {player.name} </h2>
                <p> Breed: {player.breed} </p>
                <p> Status: {player.status} </p>
              </div>
            </div>
          </button>
        ))}
        ;
      </div>
    </>
  );
}

//workshop27C
