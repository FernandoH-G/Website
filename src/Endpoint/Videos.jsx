import { useEffect } from "react"

// External Imports
import { Container, Typography } from "@mui/material"

const Videos = (props) => {
  const { setHeaderMessage } = props
  const title = "Videos"
  const message = "Recent uploads."

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
      console.log(videoIds)

    }
    getVideos()
      .then(result => {
        console.log(result)
      })
      .catch((err) => {
        console.error(err)
      })

  }, [])
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bio
      </Typography>
      <Typography paragraph>
        Test
      </Typography>
    </Container>
  )

}
export default Videos