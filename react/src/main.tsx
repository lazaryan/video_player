import React from 'react'
import { createRoot } from 'react-dom/client'
import VideoPlayer from './VideoPlayer'


if (import.meta.env.DEV) {
  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <VideoPlayer />
    </React.StrictMode>
  )
}

export default VideoPlayer;
