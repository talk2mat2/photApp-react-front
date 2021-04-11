/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/FooterNew";
import Header from "../../components/headerNew";
// import Sliders from "../../components/Sliders";
import { Scripts } from "../../scriptNew";
import DealsSwiper from "./deals.Swiper";
import styled from "styled-components";
import Swipper from "./swipper";
const ListDiv = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
`;
const ListDiv2 = styled.div`
  @media (min-width: 550px) {
    display: none;
  }
`;

const Homepage = () => {
  useEffect(() => {
    const loadScript = async () => {
      await Scripts.forEach(async (item) => {
        const script = document.createElement("script");
        script.src = item.src;
        // script.async = true;
        document.body.appendChild(script);
      });
    };
    loadScript();
  }, []);
  return (
    <div>
      <main id="HomeBase">
        <section className="section-base" style={{ marginTop: "0px" }}>
          <div className="container">
            <div
              className="row align-items-center"
              // data-anima="fade-in"
              // data-time={1000}
            >
              <div className="col-lg-6">
                <hr className="space-lg" />
                <h1>
                  OGAPHOTOS <br />
                  built for photographers.
                </h1>
                <p>
                  With our vast network of photographers and cinimatographers,
                  you can book a photo-shoot session for your birthdays,
                  weddings, commercials meeting etc. and within minuetes, a
                  competent photographer of cinematographer is assigned to you.
                  It is simple and fast. no need to worry about your location,
                  as creatives from your chosen location will be readily
                  available to you.
                </p>
                <a
                  href="#"
                  className="btn btn-sm text-bold btn-circle shadow-1 full-width-sm"
                >
                  Get In Touch
                </a>
                <span className="space-sm" />
                <Link
                  to="/login"
                  // href="#"
                  className="btn-text active hidden-sm"
                >
                  Explore fetures
                </Link>
                <hr className="space-xs" />
              </div>
              <div className="col-lg-6">
                <hr className="space" />
                <img
                  className="margin-23 margin-md-23"
                  // src="media/photo-1.png"
                  src="media/w4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section id="overview" className="section-base section-bottom-layer">
          <div className="container">
            <ul
              className="slider "
              data-options="type:carousel,perView:5,perViewMd:3,perViewSm:1,focusAt:center,gap:10,nav:true,controls:out,autoplay:3000"
            >
              <li>
                <a
                  className="img-box lightbox icon-photo"
                  href="media/photo/image-4.jpg"
                  data-lightbox-anima="fade-top"
                >
                  <img src="media/photo/image-4.jpg" alt="" />
                  <i className="im-instagram" />
                </a>
              </li>
              <li>
                <a
                  className="img-box lightbox icon-photo"
                  href="media/photo/image-2.jpg"
                  data-lightbox-anima="fade-top"
                >
                  <img src="media/photo/image-2.jpg" alt="" />
                  <i className="im-instagram" />
                </a>
              </li>
              <li>
                <a
                  className="img-box lightbox icon-photo"
                  href="media/photo/image-1.jpg"
                  data-lightbox-anima="fade-top"
                >
                  <img src="media/photo/image-1.jpg" alt="" />
                  <i className="im-instagram" />
                </a>
              </li>
              <li>
                <a
                  className="img-box lightbox icon-photo"
                  href="media/photo/image-3.jpg"
                  data-lightbox-anima="fade-top"
                >
                  <img src="media/photo/image-3.jpg" alt="" />
                  <i className="im-instagram" />
                </a>
              </li>
              <li>
                <a
                  className="img-box lightbox icon-photo"
                  href="media/photo/image-5.jpg"
                  data-lightbox-anima="fade-top"
                >
                  <img src="media/photo/image-5.jpg" alt="" />
                  <i className="im-instagram" />
                </a>
              </li>
              <li>
                <a
                  className="img-box lightbox icon-photo"
                  href="media/photo/image-6.jpg"
                  data-lightbox-anima="fade-top"
                >
                  <img src="media/photo/image-6.jpg" alt="" />
                  <i className="im-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </section> */}
        <section id="overview" className="section-base section-bottom-layer">
          <ListDiv className="container">
            {" "}
            <DealsSwiper />
          </ListDiv>
          <ListDiv2 className="container">
            <div style={{ height: "100px" }}></div>
            <Swipper />
          </ListDiv2>
        </section>
        {/* <div style={{ height: "50px" }}></div> */}
        <section className="section-base section-color section-top-overflow">
          <div className="container">
            <div className="cnt-box cnt-call">
              <i className="im-instagram" />
              <div className="caption">
                <h2>Download the app now.</h2>
                <p>Sign Up to win a Free Photoshoot with our app</p>
                <a href="#" className="btn btn-circle btn-sm">
                  Download App
                </a>
              </div>
            </div>
            <hr className="space-lg" />
            <hr className="space-sm" />
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="grid-list list-gallery grid-wall-1"
                  data-lightbox-anima="fade-top"
                  data-columns={2}
                >
                  <div className="grid-box">
                    <div className="grid-item">
                      <a className="img-box" href="media/music/image-7.jpg">
                        <img src="media/photo/image-7.jpg" alt="" />
                      </a>
                    </div>
                    <div className="grid-item">
                      <a className="img-box" href="media/music/image-5.jpg">
                        <img src="media/music/image-5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="grid-item">
                      <a className="img-box" href="media/music/image-8.jpg">
                        <img src="media/photo/image-8.jpg" alt="" />
                      </a>
                    </div>
                    <div className="grid-item">
                      <a className="img-box" href="media/music/image-7.jpg">
                        <img src="media/music/image-7.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <hr className="space-xs" />
                <h2>
                  Professional features <br />
                  for a pixel perfect editing.
                </h2>
                <p>
                  Ogaphotos has both Video and Phtography specialist all over
                  the cities for all your events. Trust us to do a good job in
                  matching you with the best in-demand photographers Book
                  multiple photoshoots with ease or Contact Us for more
                </p>
                <a href="#" className="btn-text">
                  Explore services
                </a>
              </div>
            </div>
            <hr className="space-lg" />
            <table className="table table-grid table-border align-center table-md-4">
              <tbody>
                <tr>
                  <td>
                    <img src="media/logos/logo-1.png" alt="" />
                  </td>
                  <td>
                    <img src="media/logos/logo-2.png" alt="" />
                  </td>
                  <td>
                    <img src="media/logos/logo-7.png" alt="" />
                  </td>
                  <td>
                    <img src="media/logos/logo-5.png" alt="" />
                  </td>
                  <td>
                    <img src="media/logos/logo-4.png" alt="" />
                  </td>
                  <td>
                    <img src="media/logos/logo-6.png" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="pricing" className="section-base section-bottom-layer">
          <div className="container">
            <div style={{ height: "100px" }}></div>
            <h2 className="align-center">Simple cheap plans for everyone.</h2>
            <p className="align-center width-650">
              Ogaphoto gives you stunning visuals for every budget, with no
              hidden costs or fees, you get what you pay for. We also provide
              after shoot support and access to storage till you are ready to
              receive them. We recommend the best-matched photographers in
              realtime based on your need.
            </p>
            <hr className="space" />
            <div className="tab-box" data-tab-anima="fade-in">
              <ul className="tab-nav align-center">
                <li className="active">
                  <a href="#">Per min Plan</a>
                </li>
                <li>
                  <a href="#">Annual plan</a>
                </li>
              </ul>
              <div className="panel active">
                <div
                  className="row"
                  data-anima="fade-bottom"
                  data-timeline="asc"
                  data-time={1000}
                >
                  <div className="col-lg-4 anima">
                    <div className="cnt-box cnt-pricing-table">
                      <div className="top-area">
                        <h2>Photography</h2>
                        <div className="price">
                          $<span>19</span>
                        </div>
                        <p>Per month</p>
                      </div>
                      <ul>
                        <li> Portraits,</li>
                        <li> Personal Branding,</li>
                        <li> Social Content Headshots,</li>
                        <li>Premium support</li>
                        <li>Family Shoots</li>
                        <li> Lifestyle</li>
                        <li> Fashion</li>
                      </ul>

                      <div className="bottom-area">
                        <a
                          className="btn btn-circle btn-sm btn-border"
                          href="#"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 anima">
                    <div className="cnt-box cnt-pricing-table pricing-table-big">
                      <div className="top-area">
                        <h2>Videography</h2>
                        <div className="price">
                          $<span>49</span>
                        </div>
                        <p>Per month</p>
                      </div>
                      <ul>
                        <li>Kickstarter Campaigns</li>
                        <li>Instructional Videos</li>
                        <li>Company Profiles</li>
                        <li>Family Moments</li>
                        <li>Weddings</li>
                        <li>Webisodes,</li>
                        <li>Makeup Shoots</li>
                      </ul>

                      <div className="bottom-area">
                        <a
                          className="btn btn-circle btn-sm btn-border"
                          href="#"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 anima">
                    <div className="cnt-box cnt-pricing-table">
                      <div className="top-area">
                        <h2>Events</h2>
                        <div className="price">
                          $<span>89</span>
                        </div>
                        <p>Per month</p>
                      </div>
                      <ul>
                        <li>Special Events</li>
                        <li>Parties</li>
                        <li> Sports & Activities,</li>
                        <li> Real Estate Home Tours</li>
                        <li>Bachelorette Showers</li>
                        <li>Concerts & Birthdays</li>
                        <li>Venues</li>
                      </ul>

                      <div className="bottom-area">
                        <a
                          className="btn btn-circle btn-sm btn-border"
                          href="#"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="cnt-box cnt-pricing-table">
                      <div className="top-area">
                        <h2>Photography</h2>
                        <div className="price">
                          $<span>190</span>
                        </div>
                        <p>Per year</p>
                      </div>
                      <ul>
                        <li> Portraits,</li>
                        <li> Personal Branding,</li>
                        <li> Social Content Headshots,</li>
                        <li>Premium support</li>
                        <li>Family Shoots</li>
                        <li> Lifestyle</li>
                        <li> Fashion</li>
                      </ul>
                      <div className="bottom-area">
                        <a
                          className="btn btn-circle btn-sm btn-border"
                          href="#"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cnt-box cnt-pricing-table pricing-table-big">
                      <div className="top-area">
                        <h2>Videography</h2>
                        <div className="price">
                          $<span>599</span>
                        </div>
                        <p>Per year</p>
                      </div>
                      <ul>
                        <li>Kickstarter Campaigns</li>
                        <li>Instructional Videos</li>
                        <li>Company Profiles</li>
                        <li>Family Moments</li>
                        <li>Weddings</li>
                        <li>Webisodes,</li>
                        <li>Makeup Shoots</li>
                      </ul>
                      <div className="bottom-area">
                        <a
                          className="btn btn-circle btn-sm btn-border"
                          href="#"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cnt-box cnt-pricing-table">
                      <div className="top-area">
                        <h2>Events</h2>
                        <div className="price">
                          $<span>999</span>
                        </div>
                        <p>Per year</p>
                      </div>
                      <ul>
                        <li>Special Events</li>
                        <li>Parties</li>
                        <li> Sports & Activities,</li>
                        <li> Real Estate Home Tours</li>
                        <li>Bachelorette Showers</li>
                        <li>Concerts & Birthdays</li>
                        <li>Venues</li>
                      </ul>
                      <div className="bottom-area">
                        <a
                          className="btn btn-circle btn-sm btn-border"
                          href="#"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="space" />
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-6">
                <h2>
                  Great experience with a <br />
                  state of art modern application.
                </h2>
                <p>
                  We are pleased to announce that the official app for Ogaphoto
                  now available
                </p>
                <hr className="space" />
                <ul className="text-list text-list-image">
                  <li>
                    <img src="media/photo/square-1.png" alt="" />
                    <div className="content">
                      <h3>Slow battery usage and high performance</h3>
                      <p>Super fast and easy on battery life.</p>
                      <div />
                    </div>
                  </li>
                  <li>
                    <img src="media/photo/square-2.png" alt="" />
                    <div className="content">
                      <h3>optimized Search </h3>
                      <p>Search For Photographers/videographers within reach</p>
                      <div />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 align-center">
                <hr className="space-sm visible-sm" />
                <ul
                  className="slider slider-side"
                  data-options="type:slider,arrows:false,nav:true,autoplay:3000,controls:out"
                >
                  <li>
                    <img src="media/phone-screen-7.png" alt="" />
                  </li>
                  <li>
                    <img src="media/phone-screen-8.png" alt="" />
                  </li>
                  <li>
                    <img src="media/phone-screen-9.png" alt="" />
                  </li>
                  <li>
                    <img src="media/phone-screen-4.png" alt="" />
                  </li>
                  <li>
                    <img src="media/phone-screen-5.png" alt="" />
                  </li>
                  <li>
                    <img src="media/phone-screen-6.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <hr className="space-lg" />
            <div
              className="grid-list list-gallery grid-wall-2"
              data-lightbox-anima="fade-top"
              data-columns={2}
            >
              <div className="grid-box">
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-7.jpg">
                    <img src="media/photo/image-8.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-5.jpg">
                    <img src="media/photo/image-2.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-8.jpg">
                    <img src="media/photo/image-1.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-7.jpg">
                    <img src="media/photo/image-4.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-7.jpg">
                    <img src="media/music/image-7.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-5.jpg">
                    <img src="media/photo/image-6.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-8.jpg">
                    <img src="media/photo/image-7.jpg" alt="" />
                  </a>
                </div>
                <div className="grid-item">
                  <a className="img-box" href="media/music/image-7.jpg">
                    <img src="media/music/image-1.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="align-center">
              <h2>Dreams don't work unless you take action</h2>
              <p className="width-650">
                Just Turn Up! Your photographer will bring their
                professional-grade equipment to your location at your chosen
                time, and you can relax knowing that you are in the hands of an
                experienced creative, a vetted specialist who takes your ideas
                and vision and crafts them into amazing visuals. We have local
                specialists for every kind of shoot or video, and work with you
                to take your brand to the next level.
              </p>
              <hr className="space-sm" />
              <Link
                className="nav-link scroll"
                to="/LoginSignUpNew"
                style={{ color: "#000" }}
              >
                <button className="signup">Hire A Photographer Now</button>
              </Link>
              {/* <a className="btn-store" href="#">
                <img src="media/store-google.png" alt="" />
              </a>
              <a className="btn-store" href="#">
                <img src="media/store-apple.png" alt="" />
              </a> */}
            </div>
            <hr className="space-sm hidden-md" />
          </div>
        </section>
        <section
          id="features"
          className="section-base section-color section-top-overflow"
        >
          <div className="container">
            <div
              className="grid-list"
              data-columns={4}
              data-columns-md={2}
              data-columns-xs={1}
            >
              <div className="grid-box">
                <div className="grid-item">
                  <div className="cnt-box cnt-box-top-icon boxed">
                    <i className="im-instagram" />
                    <div className="caption">
                      <h2>Creative filters</h2>
                      <p>Perfect picture editing.</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="cnt-box cnt-box-top-icon boxed">
                    <i className="im-aquarius" />
                    <div className="caption">
                      <h2>Shape modelling</h2>
                      <p>Get the best after effects on every shape.</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="cnt-box cnt-box-top-icon boxed">
                    <i className="im-cookie-man" />
                    <div className="caption">
                      <h2>Emojicons</h2>
                      <p>On demand emojicons.</p>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="cnt-box cnt-box-top-icon boxed">
                    <i className="im-film-strip" />
                    <div className="caption">
                      <h2>Video conversion</h2>
                      <p>Converts Video in all formats.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="space-lg" />
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-3">
                <ul className="text-list text-list-base align-right align-left-sm">
                  <li>
                    <h3>STEP 1</h3>
                    <p>
                      Get The best photographer/ videographer at your disposal,
                      any time, any day. All you need to do is book an
                      appointment with us, and a Photographer/Videographer will
                      be assigned to you
                    </p>
                    <div />
                  </li>
                  <li>
                    <h3>STEP 2</h3>
                    <p>
                      Trust us to arrive with our gadgets, indoors or Outdoors,
                      Our Creatives are ready to give you the best of
                      experience.
                    </p>
                    <div />
                  </li>
                  {/* <li>
                    <h3>STEP 3</h3>
                    <p>
                      Time is important to us as it is to you, Withine 3 working
                      days, your work is ready in all required and desired
                      formats, soft/hard copy, diligently edited and perfected
                      fory our memories
                    </p>
                    <div />
                  </li> */}
                </ul>
              </div>
              <div
                className="col-lg-4 col-md-6 align-center"
                data-anima="fade-bottom"
                data-time={1000}
              >
                <img
                  className="animation-shake-vertical"
                  src="media/phone-screen-7.png"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-3">
                <ul className="text-list text-list-base">
                  <li>
                    <h3>STEP 3</h3>
                    <p>
                      Time is important to us as it is to you, Withine 3 working
                      days, your work is ready in all required and desired
                      formats, soft/hard copy, diligently edited and perfected
                      fory our memories
                    </p>
                    <div />
                  </li>
                  {/* <li>
                    <h3>Organize your photos in albums</h3>
                    <p>
                      Artese orci commodo, amet quo rem archite artesso marto
                      possimuselio
                    </p>
                    <div />
                  </li>
                  <li>
                    <h3>Free for personal use</h3>
                    <p>
                      Placeat orci commodo, amet quo rem archite artesso marto
                      possimuse artesso
                    </p>
                    <div />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="section-base">
          <div className="container">
            <div style={{ height: "100px" }}></div>
            <div className="row">
              <div className="col-lg-6 col-md-4">
                <ul
                  className="slider slider-side"
                  data-options="type:carousel,arrows:false,nav:true,perView:2,perViewMd:1,controls:out,gap:10"
                >
                  <li>
                    <div className="cnt-box cnt-box-team align-left">
                      <img src="media/t1.jpg" alt="" />
                      <div className="caption">
                        <h2>Coriss Ambady</h2>
                        <span>Founder</span>
                        <span className="icon-links">
                          <a href="#" target="_blank">
                            <i className="icon-facebook" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-twitter" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-instagram" />
                          </a>
                        </span>
                        <p>
                          Project Lead, Graphic Designer and Art Director, among
                          many other things
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cnt-box cnt-box-team align-left">
                      <img src="media/t2.jpg" alt="" />
                      <div className="caption">
                        <h2>Cory Zamora</h2>
                        <span>Marketing</span>
                        <span className="icon-links">
                          <a href="#" target="_blank">
                            <i className="icon-facebook" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-twitter" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-instagram" />
                          </a>
                        </span>
                        <p>
                          Her background in mathematics gives her a
                          sophisticated grasp{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cnt-box cnt-box-team align-left">
                      <img src="media/users/user-5.jpg" alt="" />
                      <div className="caption">
                        <h2>Brad Manson</h2>
                        <span>Videographer</span>
                        <span className="icon-links">
                          <a href="#" target="_blank">
                            <i className="icon-facebook" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-twitter" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-instagram" />
                          </a>
                        </span>
                        <p>
                          A graduate from Arts With passion for image perfection
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cnt-box cnt-box-team align-left">
                      <img src="media/users/user-4.jpg" alt="" />
                      <div className="caption">
                        <h2>Richard Pall</h2>
                        <span>Marketing</span>
                        <span className="icon-links">
                          <a href="#" target="_blank">
                            <i className="icon-facebook" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-twitter" />
                          </a>
                          <a href="#" target="_blank">
                            <i className="icon-instagram" />
                          </a>
                        </span>
                        <p>One of our top rated digital marketers</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-8 order-md-first">
                <h2>
                  We love what we <br />
                  do and this is important.
                </h2>
                <p>
                  Our Processes are as seemless at it can be, All you need to do
                  is Sign Up choose your service type and the best hands in the
                  industry will be assigned you
                </p>
                <a href="#" className="btn-text">
                  View details
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="section-base section-color">
          <div className="container">
            <div style={{ height: "100px" }}></div>
            <ul
              className="slider"
              data-options="type:carousel,arrows:true,nav:false,perView:3,perViewMd:2,perViewSm:1,gap:30,controls:out"
            >
              <li>
                <div className="cnt-box cnt-box-testimonials-bubble rating-5">
                  <p>
                    Thank you so so so so much!! The photos are absolutely
                    beautiful! We love every single one of them. Thank
                  </p>
                  <div className="thumb-bar">
                    <img src="media/users/user-5.jpg" alt="" />
                    <p>
                      <span>Robert Junior</span>
                      {/* <span>Slack</span> */}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="cnt-box cnt-box-testimonials-bubble rating-5">
                  <p>
                    Oh my goodness, we received our photos!!!!!❤ From the bottom
                    of our hearts we would like to say the biggest THANK YOU!!!
                  </p>
                  <div className="thumb-bar">
                    <img src="media/users/user-4.jpg" alt="" />
                    <p>
                      <span>Brad Manson</span>
                      {/* <span>Google</span> */}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="cnt-box cnt-box-testimonials-bubble rating-4">
                  <p>
                    OgaPhoto, you are a real gem, you have a bright shining
                    personality and that’s what made it such a fun day.
                  </p>
                  <div className="thumb-bar">
                    <img src="media/users/user-2.jpg" alt="" />
                    <p>
                      <span>Jessica Poster</span>
                      {/* <span>Facebook</span> */}
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="cnt-box cnt-box-testimonials-bubble rating-4">
                  <p>
                    My wife and I both knew it was very important to have
                    beautiful photos for future memories of our wedding leading
                    up to our big day.
                  </p>
                  <div className="thumb-bar">
                    <img src="media/users/user-1.jpg" alt="" />
                    <p>
                      <span>Richard Oyster</span>
                      {/* <span>Microsoft</span> */}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <i className="scroll-top-btn scroll-top show" />

      {/* Mirrored from templates.themekit.dev/codrop/index-photo.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 31 Mar 2021 14:19:30 GMT */}
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
