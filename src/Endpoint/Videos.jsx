import { useEffect, useState } from "react"

import Loading from "../Component/Loading"

// External Imports
import Container from "react-bootstrap/Container"
// import YouTube from 'react-youtube';

const Videos = (props) => {
  const { setHeaderMessage } = props

  const [videoIds, setVideoIds] = useState(null)
  const title = "Videos"
  const message = "Recent uploads."

  function onReady() {

  }

  useEffect(() => {
    setHeaderMessage({ title: title, subtitle: message })
  }, [setHeaderMessage])

  useEffect(() => {
    async function getVideos() {
      // DONT LEAVE THESE HERE. PUT IT IN AN ENVIRONMENT VARIABLE!
      const apiToken = `AIzaSyDDVFbBRFCRd_rPaWLh0NaDfkL5m8Q_wEQ`
      const playlistId = `UUH37PXIgfeOlcATGX0IvEbA`
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
    <Container>
      <div 
      style={{display:"flex", flexWrap:"wrap"}}
      >
      {
        // videoIds
        //   ?
        //   videoIds.map((videoId) => {
        //     return (
        //       <YouTube
        //         key={videoId}
        //         videoId={videoId}
        //         onReady={onReady}
        //         opts={{width: "200px", height: "200px"}}
        //       />
        //     )
        //   })
        //   :
        //   <Loading />
      }
      </div>
    </Container>
  )

}
export default Videos