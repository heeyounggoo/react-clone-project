const redirectUri = 'http://localhost:3000/'
const clientId = '4596788eeaf84d1d9fdbf16b7cc40f87'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]

export function getTokenFromUrl () {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((acc, cur) => {
      acc[cur.split('=')[0]] = decodeURIComponent(cur.split('=')[1])
      return acc
    }, {})
}

export const authEndPoint = 'https://accounts.spotify.com/authorize'

export const loginUrl = `${authEndPoint}?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(scopes.join('%20'))}&redirect_uri=${encodeURIComponent(redirectUri)}`
