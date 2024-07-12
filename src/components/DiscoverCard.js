import React, { useState } from 'react';
import "./DiscoverCard.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function DiscoverCard({ image, text, title, amount, paragraph, count }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div className="card   d-inline-block " style={{ backgroundColor: '#353332' ,height:"450px"}}>
        <img className="card-img-top" src={image} alt="no image" />
        <div className='discoverCard_like' onClick={toggleLike}>
          {liked ? <FaHeart className="heart-icon" /> : <FaRegHeart className="heart-icon" />}
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className='discoverCard_htag'>
            <h5 className="card-title">{title}</h5>
            <h5 className='dicoveredCard_cost'>{amount}</h5>
          </div>
          <p className="card-text-second">{paragraph}</p>
          <div className='dicoverCard_bottom_main'>
            <div className='discoverCard_bottom'>
              <IoStar/>
              <IoStar/>
              <IoStar/>
              <IoStar/>
              <IoStarOutline />
            </div>
            <p  >{count} reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
