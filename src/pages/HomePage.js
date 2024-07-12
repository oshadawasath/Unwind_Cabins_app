import React from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import { TfiBook } from "react-icons/tfi"; // Import the specific icon you want
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import Face1 from "../assets/face1.jpg"; // Import your image
import Face2 from "../assets/face2.jpg"; // Import your image
import Face3 from "../assets/face3.jpg"; // Import your image
import Face4 from "../assets/face4.jpg"; // Import your image
import Face5 from "../assets/face5.jpg"; // Import your image
import Star from "../assets/starGreen.png"; // Import your image

export default function HomePage() {
  return (
    <div className="home_main">
      <div className="home_first_main"></div>
      <div className="home_second_main"></div>
      <div className="home_third_main"></div>

      <div className="home_overFlow">
        <div className="home_first_div">
          <Navbar />
        </div>

        <div className="home_two_div">
          <div className="home_left">
            <h1>Leave the office behind</h1>
            <h1>
              and <span>unwind</span>
            </h1>
            <p>
              Welcome to our cabin nested in the heart of the mountains! Our
              cabin is the perfect getaway for those seeking peace and
              relaxation in a natural setting.
            </p>

            <div className="home_items_colector">
              <div className="home_items">
                <img src={Face1} alt="Avatar" className="home_avatar-img" />
                <img src={Face2} alt="Avatar" className="home_avatar-img" />
                <img src={Face3} alt="Avatar" className="home_avatar-img" />
                <img src={Face4} alt="Avatar" className="home_avatar-img" />
                <img src={Face5} alt="Avatar" className="home_avatar-img" />
                <p></p>
                <img src={Star} alt="Avatar" className="home_star-img" />

                <div className="home_sub_items">
                  <p>Trushtpilot</p>

                  <div className="exper_rectangle"></div>
                  <div className="exper_rectangle"></div>

                  <div className="exper_rectangle"></div>
                  <div className="exper_rectangle"></div>

                  <div className="exper_rectangle"></div>

                  <p>4.5 / 5</p>
                </div>
              </div>
            </div>
          </div>

          <div className="home_right"></div>
        </div>

        <div className="home_third_div">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            {/* <span className='search-icon'><TfiBook /></span> */}
          </div>
          <button>
            <MdOutlineCalendarMonth /> Check In
          </button>
          <button>
            <MdOutlineCalendarMonth /> Check Out
          </button>
          <button>
            <IoIosMan /> Travels
          </button>
          <button
            className="home_bttn_find"
            style={{
              backgroundColor: "rgb(3, 60, 3)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 35px",
              fontSize: "1rem",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            Find Available Cabins
          </button>
        </div>
      </div>
    </div>
  );
}
