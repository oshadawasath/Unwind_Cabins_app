import React from 'react';
import './DiscoverCabinPage.css';
import DiscoverCard from '../components/DiscoverCard';
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export default function DiscoverCabinsPage() {
  // Define an array of objects with data for each card
  const cabinData = [
    {
      image: image1,
      text: "HAMPSHINE - ENGLAND",
      title: "Rustic counrty retreat",
      amount: "$210pp",
      paragraph: "Step outside and take in the stunning views. Our cabin sits on a quiet and seclueded property ,providing the prefect setting for peaseceful retreat",
      count: 82
    },
    {
      image: image2,
      text: "NORFOLK - ENGLAND",
      title: "Cozy getway cabin",
      amount: "$312pp",
      paragraph: "Step outside and take in the  stunning views. Our cabin sits a quiet and seclueded property, providing the prefect setting a peaceful retreat.",
      count: 42
    },
    {
      image: image3,
      text: "HAMPSHIRE - ENGLAND",
      title: "Rustic country retreat",
      amount: "$210pp",
      paragraph: "Step outside and take in the  stunning views. Our cabin sits a quiet and seclueded property, providing the prefect setting a peaceful retreat.",
      count: 62
    }
  ];

  return (
    <div className='discoverPa_main'>
      <div className='inspPage_main'>
        <div className='inspPage_secondMain'>
          <div className='inspPage_firstDiv'>
            <p id="dicover_cabins_id"></p>
            <h1>Discover our idyllic countryside cabins</h1>
            <div className="vpage_line-1"></div>
          </div>
          <div className='inspPage_secondDiv'>
            <p className='insPage_left_text'>Fully equipped kitechen and bathroom withplenty of walking and  routes to explore</p>
            <a href="#" className='insPage_right_text'>View all cabins</a>
          </div>
          <div className='inspPage_thirdDiv'>
            {/* Map over the cabinData array and render DiscoverCard for each item */}
            {cabinData.map((item, index) => (
              <DiscoverCard
                key={index} // Make sure to assign a unique key when mapping over arrays in React
                image={item.image}
                text={item.text}
                title={item.title}
                amount={item.amount}
                paragraph={item.paragraph}
                count={item.count}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
