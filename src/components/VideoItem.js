import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={0} style={{ display: 'block', alignItems: 'center', borderRadius: "14px", cursor: 'pointer', width: "min-content", backgroundColor: "black" }} onClick={() => onVideoSelect(video)}>
        <img style={{ borderRadius: "14px", display:"block" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
        <Typography variant="subtitle1" 
        style={{
          display:"block", 
          color:"white",  
          fontFamily: "quicksand",
          fontSize: "16px", 
          fontWeight: "bold",
          fontStyle: "normal",
          fontStretch: "normal",
          lineHeight: "normal",
          letterSpacing: "normal"
          }}><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem;