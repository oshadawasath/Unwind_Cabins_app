import React from 'react';
import InspirationCard from '../components/inspirationCard';
import './InspirationPage.css';
import inspiration_1 from "../assets/inspriation_1.jpg";
import inspiration_2 from "../assets/inspiration_2.jpg";
// import inspiration_3 from "../assets/inspiration_3.jpg";
import inspiration_3 from "../assets/inspirations_3.jpg";

const cardData = [
  {
    imageSrc: inspiration_1,
    altText: "FOR THOSE WHO LOVE",
    mainText: "For those who love.",
    title: "To explore nature",
    secondaryText: "Discover some of the mosht beautiful scenery - form the wonders of Snowwodnia to the wonders of Snowdonia to the famous beauty of the scottish  Highlands"
  },
  {
    imageSrc: inspiration_2,
    altText: "Experience Image 2",
    mainText: "For those who love.",
    title: "To Relax,rest & re-set",
    secondaryText: "Experience  miind and body connection through breathing exercises and relaztion with  our yoga inspried get away for you and the family."
  },
  {
    imageSrc: inspiration_3,
    altText: "Experience Image 3",
    mainText: "For those who love.",
    title: "Four-legged friends",
    secondaryText: "When going  on holiday nobody wants to put their dog in a kannel. So, lets  keep the family together with  our pet friendly cabins."
  }
];

export default function InspirationPage() {
  return (
    <div className='inspPage_main'>
      <div className='inspPage_secondMain'>
        <div className='inspPage_firstDiv'>
          <p id="inspired_id"></p>
          <h1>Inspiration for your next getaway</h1>
          <div className="vpage_line-1"></div>

        </div>

        <div className='inspPage_secondDiv'>
          <p className='insPage_left_text'>We've curated some amazing experiences to help you find your next </p>
          <a href="#" className='insPage_right_text'>View all experiences</a>
        </div>

        <div className='inspPage_thirdDiv'>
          {cardData.map((card, index) => (
            <InspirationCard 
              key={index}
              imageSrc={card.imageSrc} 
              altText={card.altText} 
              mainText={card.mainText} 
              title={card.title} 
              secondaryText={card.secondaryText} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
