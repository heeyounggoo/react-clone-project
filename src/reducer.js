export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null
  // TODO remove after finished developing
  // token: 'BQCKkFCaWoR1FD4Te3nRnuEMtMT6qZ_hl-KWxkX4rWjnjXxHr1yKaedlI9UP2CYbdrRKpyJSmvySEh-D_qUQpU8hgxlMsN4rDRLRiecE3xTxzqGGXzHoANlImACUW4pIJNzWm3CZunhtm8cHUKIl4UeuRnGcXe-bNmRQYp8FXqJB0Xjz'
}

export default function reducer (state, action) {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playLists: action.playLists
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
}
