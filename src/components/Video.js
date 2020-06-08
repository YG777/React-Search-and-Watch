import React from 'react';

const Video = ({video}) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url}></img>
        {video.snippet.title}
        </div>

    );
}

export default Video;