import React from 'react'
import YouTube from 'react-youtube';

export default function Myvideo({videoId}) {
    const opts = {
        width: '260',
        height: '400',
      };
  return (
    <div>
     <YouTube videoId={videoId} opts={opts}/>
    </div>
  )
}
