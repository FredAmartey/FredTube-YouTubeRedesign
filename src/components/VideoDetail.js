import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div>Search for a video above</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper
        elevation={6}
        style={{
          height: "70vh",
          // width: "830px",
          borderRadius: "14px",
          marginBottom: "14px"
        }}
      >
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          style={{
            // height: "520px",
            // width: "830px",
            borderRadius: "14px",
            marginBottom: "14px"
          }}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px", height: "30vh", backgroundColor:"black" }}>
        <Typography variant="h4" 
        style={{color:"white", fontFamily:"poppins"}}
        >
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1"
        style={{color:"white", fontFamily:"poppins"}}
        >
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2"
        style={{color:"white", fontFamily:"poppins"}}
        >{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
