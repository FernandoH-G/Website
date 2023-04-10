import { useEffect, useState } from "react"

import Loading from "../Component/Loading"

// External Imports
// import Container from "react-bootstrap/Container"
import YouTube from 'react-youtube';
import { Container, Grid } from "@mui/material"

const Videos = (props) => {
  const { setHeaderMessage } = props

  const [videoIds, setVideoIds] = useState(null)
  const title = "Videos"
  const message = "Recent uploads."

  // function onReady() {

  // }

  useEffect(() => {
    setHeaderMessage({ title: title, subtitle: message })
  }, [setHeaderMessage])

  useEffect(() => {
    async function getVideos() {
      // DONT LEAVE THESE HERE. PUT IT IN AN ENVIRONMENT VARIABLE!
      const apiToken = process.env.REACT_APP_YOUTUBE_API_KEY
      const playlistId = process.env.REACT_APP_PLAYLIST_ID
      const playlistItemsUrl = `playlistItems?part=snippet%2CcontentDetails&playlistId=${playlistId}&key=${apiToken}`
      const url = `https://youtube.googleapis.com/youtube/v3/${playlistItemsUrl}`
      const resp = await fetch(url)
      if (!resp.ok) {
        throw new Error("Error fetching youtube video data.")
      }
      const data = await resp.json()
      const videos = data.items
      const videoIds = []
      for (const video of videos) {
        const videoId = video.snippet.resourceId.videoId
        videoIds.push(videoId)
      }
      return videoIds
    }
    getVideos()
      .then(result => {
        setVideoIds(result)
      })
      .catch((err) => {
        console.error(err)
      })

  }, [])
  return (
    // Deal with the left and right margin issue later!
    <Grid container >
      {
        videoIds
          ?
          videoIds.map((videoId) => {
            return (
              <Grid item xs={12} md={4} >
                <YouTube
                  key={videoId}
                  videoId={videoId}
                  opts={{ width: "100%", height: "100%" }}
                />
              </Grid>
            )
          })
          :
          <Loading />
      }
    </Grid>
  )

}
export default Videos