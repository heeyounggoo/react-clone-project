import React from 'react'
import Header from './Header'
import SongRow from './SongRow'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export default function Body ({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue()

  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt=""/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>

        <div className="body__songs">
          {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track}/>
          ))}
        <div className="body__icons">
          <PlayCircleFilledIcon className="body_shuffle"/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon/>
        </div>
        </div>
      </div>
    </div>
  )
}
