import React from 'react'

import style from "./videocard.module.css";

export default function VideoCard({src, description}) {
    
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <iframe
          src={src}
          allowFullScreen=""
          title={description}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <div className={style.descriptionContainer}>
          <p>{description}</p>
      </div>
    </div>
  );
}
