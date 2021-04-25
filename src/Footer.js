import React from 'react'
import './Footer.css'
import { Grid, Slider } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

export default function Footer () {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://w.namu.la/s/0617245209c297a1ec6ecfbfde7c16945fa17b02fe0065e8ca4453cea6128f5315d83af3aa20aebad3cc15d1626bc25e7943d30bc7b776bf381f839e40b31aa5fa900acc74b44c50d18cd4be099c933fdc9709c4fed0eec22017a2f230d313471db7ccd622b9f97b078216e8dfd883de"
          alt=""/>
        <div className="footer__songInfo">
          <h4>hello</h4>
          <p>user</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
