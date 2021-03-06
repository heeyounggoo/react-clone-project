import React  from 'react'
import SidebarOption from './SidebarOption'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'

export default function Sidebar () {
  const [{ playLists }, dispatch] = useDataLayerValue()

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""/>
        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

      <br/>

        <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>

      {playLists?.items?.map(playlist => (<SidebarOption title={playlist.name}/>))}
    </div>
  )
}
