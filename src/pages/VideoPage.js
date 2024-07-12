import React from 'react';
import './VideoPage.css';
import videoSrc from '../assets/video.mp4'; // Import the video file

export default function VideoPage() {
  return (
    <div className='vPage_main'>
      <div className='vPage_semi_main'>
        <div className='vPage_left'>
          <p id="video_id"></p>
          <h1>Get ready to unwind</h1>
          <div className="vpage_line-1"></div>
          <p>A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are located in beautiful, secluded areas, surrounded by trees and other natural beauty.</p>
          <p>A cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with nature.</p>
          <button className="vPage_button">Learn more <span className="arrow">&gt;</span></button>
        </div>
        <div className='vPage_right'>
          <div className="video-wrapper">
            <video className="video-player" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
