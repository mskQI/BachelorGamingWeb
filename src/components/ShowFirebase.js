import React, {useContext, useEffect, useState} from 'react';
import '../App.css';
import {createRoom, addPlayerToRoom, removePlayerFromRoom, GetRooms, subscribeToRooms, deleteRoom} from "../firebaseUtils";

const ShowFirebase = () => {
    const [rooms, setRooms] = useState([]);
    const [roomName, setRoomName] = useState('');
    const [maxPlayers, setMaxPlayers] = useState(0);
    const [roomId, setRoomId] = useState('');
    const [player, setPlayer] = useState({ playerId: '', playerName: '' });

    useEffect(() => {
        // Subscribe to room updates
        const unsubscribe = subscribeToRooms(setRooms);

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleCreateRoom = () => {
      createRoom(roomName, maxPlayers)
        .then(id => setRoomId(id))
        .catch(error => console.error('Error creating room:', error));
    };

    const handleAddPlayer = (id) => {
      addPlayerToRoom(id)
        .catch(error => console.error('Error adding player:', error));
    };

    const handleRemovePlayer = (id) => {
      removePlayerFromRoom(id)
        .catch(error => console.error('Error removing player:', error));
    };
    const handleGetRooms = async () => {
        const roomArray  = await GetRooms();
        setRooms(roomArray);
        console.log("lenght is: " + roomArray)
        
       // alert(rooms);
    }

   /* 
    const roomList = rooms.map((room, index)=>
        <tr key={index}>
          <td>{room.name}</td>
          <td>{room.maxPlayers}</td>
          <td>{room.players}</td>
        </tr>
    );
    */
    const roomList = rooms.map((room, index)=>
        <div className="item" key={index}>
          <ul>
            <li><h4>{index+1}</h4></li>
            <li><h4>{room.name}</h4></li>
            <li><h4>{room.maxPlayers}</h4></li>
            <li><h4>{room.players}/{room.maxPlayers}</h4></li>
            <li>
              <button onClick={() => handleAddPlayer(room.id)}>+</button>            
              <button onClick={() => handleRemovePlayer(room.id)}>-</button>       
              <button onClick={() => deleteRoom(room.id)}>delete</button>
            </li>
            <li>
            <div className={`main-border-button ${room.players == room.maxPlayers ? 'border-no-active' : ''}`}>
              <a href="#">Join</a>
            </div>
            </li>
          </ul>
        </div>
    );

    return (
      <div>
           {/* ***** Create Matches Start ***** */}
           <div className="gaming-library" id='create'>
                <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>Create matches</h4>
                    </div>
                    <div className="search-input main-nav">
                      <input value={roomName} onChange={e => setRoomName(e.target.value)} placeholder="Type a match name" type='text' onkeypress="handle"/>
                      <input value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} placeholder="Max Players" type="number" />
                      <div >
                      <div className="main-border-button" style={{position: "right"}}>
                        <span> <a onClick={handleCreateRoom}>Create Room</a></span>
                       
                        </div>
                 
                      </div>
                    </div>
                    <div>
                  </div>
                  
                </div>
              </div>
              {/* ***** Create Matches End ***** */}
              
              {/* ***** Find Matches Start ***** */}
              <div className="gaming-library" id='find'>
              <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>Find matches</h4>
                  </div>
                  <div className="item heading-section">
                    <ul>
                      <li><h4>Id</h4></li>
                      <li><h4>Name</h4></li>
                      <li><h4>Max players</h4></li>
                      <li><h4>Joined</h4></li>
                      <li><h4></h4></li>
                      <li><h4></h4></li>
                    </ul>
                  </div>
                  {roomList}
              </div>
                  
              <div className="col-lg-12">
                <div className="main-button">
                  <a href="">More matches</a>
                </div>
              </div>
          </div>
          {/* ***** Find matches End ***** */}

      </div>       
    );
};

export default ShowFirebase;


/*  
 <div className="App">        
             <div>
                <h1>Create Room</h1>
                <input value={roomName} onChange={e => setRoomName(e.target.value)} placeholder="Room Name" />
                <input value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} placeholder="Max Players" type="number" />
                <button onClick={handleCreateRoom}>Create Room</button>

                <h1>Manage Players</h1>
                  <button onClick={handleAddPlayer}>Add Player</button>
                <button onClick={handleRemovePlayer}>Remove Player</button>
                <button onClick={handleGetRooms}>Get rooms</button>
            </div>
            <div>
              
            <table style={{color: "white"}}>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>max players</th>
                    <th>players</th>
                  </tr>
                </thead>
                <tbody>
                {roomList}
                </tbody>
            </table>
            
            </div>
        </div>
*/
