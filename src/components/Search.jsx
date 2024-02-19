import { useState } from 'react';
// import { useNavigate } from "react-router-dom";

function SearchBar(props) {

  // const [searchBreed, setSearchBreed] = useState('');
  // const [searchStatus, setSearchStatus] = useState('bench');

  const handleNameChange = (e) => {
    props.setSearchName(e.target.value);
    // props.setPlayers(props.playerList.filter(eachPlayer=>eachPlayer.name.includes(searchName)))
  };

  // const handleBreedChange = (e) => {
  //   setSearchBreed(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setSearchStatus(e.target.value);
  // };

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle the form submission logic using searchName, searchBreed, and searchStatus
  //   console.log('Name:', searchName);
  //   navigate(`/players/${playerId}`)
  // };

  return (
    <div className='search'>
      <form>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Search by name..."
          value={props.searchName}
          onChange={handleNameChange}
        />
        {/* <label>Breed:</label>
        <input
          type="text"
          placeholder="Search by breed..."
          value={searchBreed}
          onChange={handleBreedChange}
        />
        <label>Status:</label>
        <select
          value={searchStatus}
          onChange={handleStatusChange}
        >
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select> */}

      </form>
    </div>
  );
}

export default SearchBar;