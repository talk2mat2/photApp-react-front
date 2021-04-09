/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Sliders from "../../components/Sliders";
import { Scripts } from "../../script";

const Homepage = () => {
  // useEffect(() => {
  //   const loadScript = async () => {
  //     await Scripts.forEach(async (item) => {
  //       const script = document.createElement("script");
  //       script.src = item.src;
  //       script.async = true;
  //       document.body.appendChild(script);
  //     });
  //   };
  //   loadScript();
  // },[]);
  return (
    <div>
      <Header />
      <section id="home" className="pt-0 mt-0">
        <div className="rev_slider_wrapper fullscreen-container">
          <div
            id="slider"
            className="rev_slider fullscreenbanner bg-dark"
            data-version="5.4.8"
          >
            <ul>
              <li
                data-transition="fade"
                data-thumb="style/images/art/slider-bg34.jpg"
              >
                <img src="style/images/art/home.jpg" alt="" />
                <p />
              </li>
              <li
                data-transition="fade"
                data-thumb="style/images/art/slider-bg35.jpg"
              >
                <img src="style/images/art/home2.jpg" alt="" />
              </li>
            </ul>
            <div className="tp-static-layers">
              <div
                className="tp-caption tp-static-layer font-weight-500 text-uppercase color-white text-center"
                data-x="center"
                data-y="middle"
                data-voffset="['-110','-110','-110','-110']"
                data-fontsize="['16','16','16','16']"
                data-lineheight="['26','26','26','26']"
                data-width="['600','600','600','600']"
                data-textalign="['center','center','center','center']"
                data-whitespace="['normal','normal','normal','normal']"
                data-frames='[{"delay":1000,"speed":1200,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-startslide={0}
                data-endslide={3}
                data-responsive="on"
                data-responsive_offset="on"
                style={{ zIndex: 9, letterSpacing: "3px" }}
              >
                ogaphotos
              </div>
              <div
                className="tp-caption tp-static-layer font-weight-700 text-lowercase color-white text-center"
                data-x="center"
                data-y="middle"
                data-voffset="['-5','-5','-5','-5']"
                data-fontsize="['55','55','45','45']"
                data-lineheight="['70','70','60','60']"
                data-width="['900','900','700','700']"
                data-textalign="['center','center','center','center']"
                data-whitespace="['normal','normal','normal','normal']"
                data-frames='[{"delay":1500,"speed":1200,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-startslide={0}
                data-endslide={3}
                data-responsive="on"
                data-responsive_offset="on"
                style={{ zIndex: 9, letterSpacing: "-0.5px" }}
              >
                Built For <br /> Photographers
              </div>
              <Link
                className="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"
                data-x="center"
                data-y="middle"
                data-voffset="['130','130','130','130']"
                data-width="['auto','auto','auto','auto']"
                data-textalign="['center','center','center','center']"
                data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-startslide={0}
                data-endslide={3}
                data-responsive="on"
                data-responsive_offset="on"
                style={{ zIndex: 9 }}
                to="/How_it_works"
              >
                learn more
              </Link>{" "}
            </div>
            <div className="tp-bannertimer tp-bottom" />
          </div>
          {/* /.rev_slider */}
        </div>
        {/* /.rev_slider_wrapper */}
      </section>
      <div
        className="wrapper image-wrapper bg-image inverse-text"
        data-image-src="style/images/art/bg22.jpg"
      >
        <div className="container inner pt-150 pb-150">
          <h2 className="heading text-center">
            Do you need a Photographer <br className="d-none d-xl-block" />
            or Are you a photographer?
            <br />
            <Link
              className="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"
              data-x="center"
              data-y="middle"
              data-voffset="['130','130','130','130']"
              data-width="['auto','auto','auto','auto']"
              data-textalign="['center','center','center','center']"
              data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              data-startslide={0}
              data-endslide={3}
              data-responsive="on"
              data-responsive_offset="on"
              style={{ zIndex: 9, marginTop: "20px" }}
              to="/dashboard"
            >
              Hire a photographer
            </Link>
            <Link
              className="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"
              data-x="center"
              data-y="middle"
              data-voffset="['130','130','130','130']"
              data-width="['auto','auto','auto','auto']"
              data-textalign="['center','center','center','center']"
              data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              data-startslide={0}
              data-endslide={3}
              data-responsive="on"
              data-responsive_offset="on"
              style={{ zIndex: 9, marginTop: "20px" }}
              to="photographer/signup"
            >
              Become a photographer
            </Link>
          </h2>
        </div>
        {/* /.container */}
      </div>
      {/* /section */}
      <section id="about">
        <div className="wrapper dark-wrapper inverse-text">
          <div className="container inner">
            <h2 className="section-title section-title-upper text-center">
              About ogaphotos
            </h2>
            <div className="space20" />
            <div className="row">
              <div className="col-lg-5 text-md-center">
                <figure>
                  <img src="media/camera1.jpg" alt="" />
                </figure>
              </div>
              {/* /column */}
              <div className="space30 d-lg-none d-xl-none" />
              <div className="col-lg-7">
                <p className="lead larger">
                  With our vast network of photographers and cinimatographers,
                  you can book a photo-shoot session for your birthdays,
                  weddings, commercials meeting etc. and within minuetes, a
                  competent photographer of cinematographer is assigned to you.{" "}
                </p>
                <p>
                  It is simple and fast. no need to worry about your location,
                  as creatives from your chosen location will be readily
                  available to you.
                </p>
                <Link
                  className="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"
                  data-x="center"
                  data-y="middle"
                  data-voffset="['130','130','130','130']"
                  data-width="['auto','auto','auto','auto']"
                  data-textalign="['center','center','center','center']"
                  data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-startslide={0}
                  data-endslide={3}
                  data-responsive="on"
                  data-responsive_offset="on"
                  style={{ zIndex: 9, marginTop: "20px" }}
                  to="/about"
                >
                  Learn More
                </Link>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
        <div
          className="wrapper image-wrapper bg-image inverse-text"
          data-image-src="style/images/art/bg20.jpg"
        >
          <div className="container inner pt-150 pb-150">
            <h2 className="heading text-center">
              Life is an adventure.
              <br className="d-none d-md-block" />
              Capture every minute
            </h2>
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
      </section>
      {/* /section */}
      <div
        className="wrapper image-wrapper bg-image inverse-text"
        data-image-src="style/images/art/bg11.jpg"
      >
        <div className="container inner pt-120 pb-120">
          <div className="row counter">
            <div className="col-md-3 text-center">
              <div className="icon fs-54 icon-color color-dark mb-15">
                {" "}
                <i className="si-photo_camera" />{" "}
              </div>
              <h3 className="value">7518</h3>
              <p className="text-uppercase color-dark mb-0">Subscribers</p>
            </div>
            {/*/column */}
            <div className="col-md-3 text-center">
              <div className="icon fs-54 icon-color color-dark mb-15">
                {" "}
                <i className="si-cafe_hot-coffee" />{" "}
              </div>
              <h3 className="value">3472</h3>
              <p className="text-uppercase color-dark mb-0">Photographers</p>
            </div>
            {/*/column */}
            <div className="col-md-3 text-center">
              <div className="icon fs-54 icon-color color-dark mb-15">
                {" "}
                <i className="si-electronics_tv" />{" "}
              </div>
              <h3 className="value">2184</h3>
              <p className="text-uppercase color-dark mb-0">Photoshoots</p>
            </div>
            {/*/column */}
            <div className="col-md-3 text-center">
              <div className="icon fs-54 icon-color color-dark mb-15">
                {" "}
                <i className="si-sports_medal-2" />{" "}
              </div>
              <h3 className="value">4523</h3>
              <p className="text-uppercase color-dark mb-0">Photos</p>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}
      </div>
      <section id="portfolio">
        <div className="wrapper dark-wrapper inverse-text">
          <div className="container inner">
            <h2 className="section-title section-title-upper text-center">
              Selected Works
            </h2>
            <div className="space20" />
            <div
              id="cube-grid-large-filter"
              className="cbp-filter-container text-center"
            >
              <div
                data-filter="*"
                className="cbp-filter-item-active cbp-filter-item"
              >
                All
              </div>
              <div data-filter=".cat1" className="cbp-filter-item">
                Family
              </div>
              <div data-filter=".cat2" className="cbp-filter-item">
                Wedding
              </div>
              <div data-filter=".cat3" className="cbp-filter-item">
                Personal
              </div>
              <div data-filter=".cat4" className="cbp-filter-item">
                corporate
              </div>
              <div data-filter=".cat5" className="cbp-filter-item">
                Commercials 5
              </div>
            </div>
            <div className="clearfix" />
            <div className="space20" />
            <div id="cube-grid-large" className="cbp light-gallery">
              <div className="cbp-item cat1 cat5">
                <figure className="overlay overlay2">
                  <a href="media/wedding1.jpg" data-sub-html="#caption1">
                    <img src="media/wedding1.jpg" alt="" />
                    <div id="caption1" className="d-none">
                      {/* <p>Cras mattis consectetur purus sit amet fermentum.</p> */}
                    </div>
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat2">
                <figure className="overlay overlay2">
                  <a href="media/model1.jpg">
                    <img src="media/model1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat2 cat3">
                <figure className="overlay overlay2">
                  <a href="media/birthday1.jpg" data-sub-html="#caption2">
                    <img src="media/birthday1.jpg" alt="" />
                    <div id="caption2" className="d-none">
                      {/* <p>Nulla vitae elit libero, a pharetra augue.</p> */}
                    </div>
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat1 cat5">
                <figure className="overlay overlay2">
                  <a href="media/corporate1.jpg">
                    <img src="media/corporate1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat5 cat4">
                <figure className="overlay overlay2">
                  <a href="media/model2.jpg">
                    <img src="media/model2.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              {/*/.cbp-item */}
              {/*/.cbp-item */}
              {/*/.cbp-item */}
            </div>
            {/*/.cbp */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
      </section>
      {/* /section */}
      <section id="portfolio2">
        <div className="wrapper dark-wrapper inverse-text">
          <div className="container inner">
            <h2 className="section-title section-title-upper text-center">
              Advertorial Shots
            </h2>
            <div className="space20" />
            <div
              className="swiper-container-wrapper image-grid swiper-col3-20"
              data-aos="fade"
            >
              <div className="swiper-container text-center">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="media/model 6.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/model7.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/model8.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/model9.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/proposal.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/family4.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/lady.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/model10.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="media/model11.jpg" alt="" />
                  </div>
                </div>
                {/* .swiper-wrapper */}
              </div>
              {/* .swiper-container */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
            {/* .swiper-container-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
        <div
          className="wrapper image-wrapper bg-image inverse-text"
          data-image-src="style/images/art/bg21.jpg"
        >
          <div className="container inner pt-120 pb-120">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="swiper-container-wrapper basic-slider">
                  <div className="swiper-container text-center">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top larger">
                          <h2>
                            All in one Creative platform.
                            <footer className="blockquote-footer">...</footer>
                          </h2>
                        </blockquote>
                      </div>
                      {/* /.swiper-slide */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top larger">
                          <h2>For Creatives</h2>
                          <footer className="blockquote-footer">...</footer>
                        </blockquote>
                      </div>
                      {/* /.swiper-slide */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top larger">
                          <h2>By Creatives</h2>
                          <footer className="blockquote-footer">...</footer>
                        </blockquote>
                      </div>
                      {/* /.swiper-slide */}
                    </div>
                    {/* /.swiper-wrapper */}
                  </div>
                  {/* /.swiper-container */}
                  <div className="swiper-pagination gap-small" />
                </div>
                {/* .swiper-container-wrapper */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
      </section>
      {/* /section */}
      <section id="services">
        <div className="wrapper dark-wrapper inverse-text">
          <div className="container inner">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h2 className="section-title section-title-upper text-center">
                  How it Works{" "}
                </h2>
                {/* <p class="text-center">How It Works</p> */}
                <div className="space40" />
                <div className="row d-flex align-items-center">
                  <div className="col-md-6 order-md-2 text-center">
                    <figure>
                      <img className="octagon" src="media/model5.jpg" alt="" />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="space20 d-block d-sm-none" />
                  <div className="col-md-6">
                    <h3>STEP 1</h3>
                    <p className="lead mb-0">
                      Get The best photographer/ videographer at your disposal,
                      any time, any day. All you need to do is book an
                      appointment with us, and a Photographer/Videographer will
                      be assigned to you
                    </p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <div className="space20 d-none d-md-block" />
                <div className="space50 d-md-none" />
                <div className="row d-flex align-items-center">
                  <div className="col-md-6 text-center">
                    <figure>
                      <img className="octagon" src="media/model4.jpg" alt="" />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="space20 d-block d-sm-none" />
                  <div className="col-md-6">
                    <h3>STEP 2</h3>
                    <p className="lead mb-0">
                      {" "}
                      Trust us to arrive with our gadgets, indoors or Outdoors,
                      Our Creatives are ready to give you the best of
                      experience.
                    </p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <div className="space20 d-none d-md-block" />
                <div className="space50 d-md-none" />
                <div className="row d-flex align-items-center">
                  <div className="col-md-6 order-md-2 text-center">
                    <figure>
                      <img
                        className="octagon"
                        src="media/group models.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="space20 d-block d-sm-none" />
                  <div className="col-md-6">
                    <h3>STEP 3</h3>
                    <p className="lead mb-0">
                      Time is important to us as it is to you, Withine 3 working
                      days, your work is ready in all required and desired
                      formats, soft/hard copy, diligently edited and perfected
                      fory our memories
                    </p>
                    <Link
                      className="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"
                      data-x="center"
                      data-y="middle"
                      data-voffset="['130','130','130','130']"
                      data-width="['auto','auto','auto','auto']"
                      data-textalign="['center','center','center','center']"
                      data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                      data-startslide={0}
                      data-endslide={3}
                      data-responsive="on"
                      data-responsive_offset="on"
                      style={{ zIndex: 9, marginTop: "20px" }}
                      to="/SignUp"
                    >
                      Get Started
                    </Link>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
      </section>
      {/* /section */}
      <section id="are-you-photographer">
        {/* /.wrapper */}
        <div className="wrapper dark-wrapper inverse-text" id="contact">
          <div className="container inner">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="section-title section-title-upper text-center">
                  Reach Out To Us
                </h2>
                <p className="text-center">
                  Ogaphotos has both Video and Phtography specialist all over
                  the cities for all your events. Trust us to do a good job in
                  matching you with the best in-demand photographers
                  <br />
                  Book multiple photoshoots with ease or Contact Us for more
                </p>
                <div className="space20" />
                <div className="row text-center">
                  <div className="col-md-4">
                    {" "}
                    <span className="icon icon-color color-white fs-48 mb-10">
                      <i className="si-camping_map" />
                    </span>
                    <p>
                      Moon Street Light Avenue
                      <br />
                      14/05 Jupiter, JP 80630
                    </p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4">
                    {" "}
                    <span className="icon icon-color color-white fs-48 mb-10">
                      <i className="si-phone_phone-ringing" />
                    </span>
                    <p>
                      00 (123) 456 78 90
                      <br />
                      00 (987) 654 32 10{" "}
                    </p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4">
                    {" "}
                    <span className="icon icon-color color-white fs-48 mb-10">
                      <i className="si-mail_mail-2" />
                    </span>
                    <p>
                      <a className="nocolor" href="mailto:#">
                        manager@email.com
                      </a>
                      <br />
                      <a className="nocolor" href="mailto:#">
                        asistant@email.com
                      </a>
                    </p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
                <div className="space30" />
                {/*/.form-container */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
