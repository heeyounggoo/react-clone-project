import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify'
import { useDataLayerValue } from './DataLayer'
import './App.css'

const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    const _token = hash.access_token
    window.location.hash = ''

    if (_token) {
      // setToken(_token)
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token)

      spotify.getMe()
        .then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user
          })
        })
    }
  })

  console.log('user::', user)
  console.log('token::', token)

  return (
    <div className="App">
      {token ? <Player spotify={spotify}/>: <Login/>}
    </div>
  );
}

export default App;
