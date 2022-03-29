import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Playlists from "./views/Playlists";
import FavoritePlaylists from "./views/FavoritePlaylists";
import Songs from "./views/Songs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Playlists/>}/>
        <Route path="/favorites" element={<FavoritePlaylists/>}/>
        <Route path="/playlists/:id" element={<Songs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
