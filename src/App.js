import React, { useState, useEffect } from 'react'
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css'

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    window.location.hash = ''

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe()
        .then((user) => {
          console.log('user::', user)
        })
    }
  }, [])

  return (
    <div className="App">
      {token ? <Player/>: <Login/>}
    </div>
  );
}

export default App;
