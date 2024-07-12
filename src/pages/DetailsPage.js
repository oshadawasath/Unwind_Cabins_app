import React from 'react';
import "./DetailsPage.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";


export default function DetailsPage() {
  return (
    <div className='details_main'>
        <div className='details_second'>
            <div className='details_div1'>
                <div className='details_container'>
                    <p id='details_about_id'></p>
                    <h5>About us</h5>
                    <p className='details_p'>Why us</p>
                    <p className='details_p'>How its work</p>
                    <p className='details_p'>FAQ</p>
                </div>
                <div className='details_container'>
                    <h5>Our cabins</h5>
                    <p className='details_p'>North of London</p>
                    <p className='details_p'>Oak Treehouse</p>
                    <p className='details_p'>Acocia Restreat</p>
                    <p className='details_p'>Blue Logoan</p>

                    <div className='details_downp_container'>

                        <p className='details_down_p'>South of London</p>
                        <p className='details_down_p'>Lavender Treehouse</p>
                        <p className='details_down_p'>Butterfly Treehouse</p>
                        <p className='details_down_p'>Butterfly Treehouse</p>

                    </div>



                </div>
                <div className='details_container'>
                    <h5>Get inspired</h5>
                    <p className='details_p'>Expolre nature</p>
                    <p className='details_p'>Hicking trails</p>
                    <p className='details_p'>Swimming</p>
                    <p className='details_p'>Fishing</p>
                    <p className='details_p'>Boating</p>
                    <p className='details_p'>Cycling</p>


                    <div className='details_downp_container'>

                        <p className='details_down_p'>Rest.relax and re-set</p>
                        <p className='details_down_p'>Spa treatment</p>
                        <p className='details_down_p'>Hot tubs</p>
                        <p className='details_down_p'>Nature Trails</p>

                    </div>
                </div>
                <div className='details_container'>
                    <h5 className='details_deapier_h'>desapier</h5>
                    <p className='details_p'>Great food and drink</p>
                    <p className='details_p'>Pubs</p>
                    <p className='details_p'>Resturants</p>
                    <p className='details_p'>Picnics</p>

                    <div className='details_downp_container'>
                        <p className='details_down_p'>For you and yours</p>
                        <p className='details_down_p'>Sola or a couple</p>
                        <p className='details_down_p'>Pet friendly</p>
                        <p className='details_down_p'>Accessible cabins</p>
                    </div>
                  
                </div>
                <div className='details_container'>
                    <h5>Support</h5>
                    <p className='details_p'>Help</p>
                    <p className='details_p'>Contact us</p>
                    <p className='details_p'>Privacy Policy</p>
                    <p className='details_p'>Tearms of Services</p>
                    <p className='details_p'>Compiaints Policy</p>

                </div>
            </div>
            <div className='details_div2'>

                <h4>Signin up  to Newstletter</h4>

                <div className='details_div2_container'>
                    
                    <div className='details_div2_left'>
                        <p>For weekcly  coructed collection of 3 things you can wacth,read or listen
                            swich off from busy off day
                        </p>
                    </div>
                    <div className='details_div2_right'>
                    <input  className='details_input' type="text" placeholder="James@thegeianpeacth.com" />
                    <button className='details_join_bttn'>Join the mailing list</button>
                    </div>
                </div>

            </div>
            <div className='details_div3'>

                <div className='details_div3_left'>
                    <h5>UNWINDCABINS</h5>
                </div>

                <div className='details_div3_midle'>
                    <p>@2023UnwindCabins</p>
                </div>

                <div className='details_div3_right'>
                    <SlSocialLinkedin className='social-icon' />
                    <SlSocialTwitter className='social-icon' />
                    <TiSocialFacebook className='social-icon' />
                    <SlSocialInstagram className='social-icon' />
                    <SlSocialYoutube className='social-icon' />
                </div>

            </div>
        </div>
    </div>
  )
}
