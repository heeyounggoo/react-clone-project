export const authEndPoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:3000/'
const clientId = '4596788eeaf84d1d9fdbf16b7cc40f87'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]
// http://localhost:3000/#access_token=BQCnnBgXYFYmhI0lpfwJmYb8CjGpEY5aHSUp5yZ9jVw_gJgYyzat2gWmT3K5OdFtGQpSTS11FOd1vEnGAtNOAoWlR3OR0ooFWj4nV4fG-qUaY9XfIRuWrvMGKq0Q24rNuLN_TRUt945gC5ojd7C8JCd3CO4EH7MjuFfC3fpzSEWjn-RP&token_type=Bearer&expires_in=3600
export function getTokenFromUrl () {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((acc, cur) => {
      acc[cur.split('=')[0]] = decodeURIComponent(cur.split('=')[1])
      return acc
    }, {})
}

export const loginUrl = `${authEndPoint}?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes.join('%20'))}&redirect_uri=${encodeURIComponent(redirectUri)}`
