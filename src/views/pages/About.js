/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  useEffect(() => {
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);
  return (
    <div>
      <Header/>
      <section id="home" className="pt-0 mt-0">
        <div
          className="wrapper image-wrapper bg-image inverse-text"
          data-image-src="media/about_bg.jpg"
        >
          <div className="container inner pt-120 pb-120 text-center">
            <h1 className="heading mb-0">About Ogaphotos </h1>
          </div>
          {/* /.container */}
        </div>
      </section>
      {/* <div class="wrapper image-wrapper bg-image inverse-text" data-image-src="style/images/art/bg22.jpg">
    <div class="container inner pt-150 pb-150">
      <h2 class="heading text-center">Do you need a Photographer <br class="d-none d-xl-block" />or Are you a photographer?<br>
        <a class="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"  
        data-x="center" 
        data-y="middle" 
        data-voffset="['130','130','130','130']"
        data-width="['auto','auto','auto','auto']"
        data-textAlign="['center','center','center','center']"
        data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
        data-startslide="0" 
        data-endslide="3"
        data-responsive="on" 
        data-responsive_offset="on" 
        style="z-index: 9; margin-top: 20px;" href="sign_up.html">Register To book a photographer</a> 

        <a class="tp-caption tp-static-layer btn btn-full-rounded btn-l btn-white scroll"  
        data-x="center" 
        data-y="middle" 
        data-voffset="['130','130','130','130']"
        data-width="['auto','auto','auto','auto']"
        data-textAlign="['center','center','center','center']"
        data-frames='[{"delay":2000,"speed":1200,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
        data-startslide="0" 
        data-endslide="3"
        data-responsive="on" 
        data-responsive_offset="on" 
        style="z-index: 9; margin-top: 20px;" href="photography_sign-up.html">Register To be a photographer</a> 
      </h2>
        
    </div>
     /.container -
  </div> */}
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
                <a
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
                  href="sign_up.html"
                >
                  Get Started
                </a>
                {/* <ul class="social social-mute social-s">
            <li><a href="#"><i class="fa fa-flickr"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-500px"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
          </ul> */}
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
              "Photography is a record <br className="d-none d-md-block" />
              of your living..."
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
      <div className="wrapper light-wrapper">
        <div className="container inner">
          <h2 className="section-title mb-40 text-center">Meet the Team</h2>
          <div className="swiper-container-wrapper swiper-col4" data-aos="fade">
            <div className="swiper-container text-center">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <figure className="mb-20">
                    {" "}
                    <img src="style/images/art/t1.jpg" alt="" />{" "}
                  </figure>
                  <h5 className="mb-5">Coriss Ambady</h5>
                  <div className="meta">Art Director</div>
                  <p>
                    Project Lead, Graphic Designer and Art Director, among many
                    other things, and publishes about the web at Repeat Penguin.
                  </p>
                  <ul className="social social-color social-s">
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-flickr" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*/.swiper-slide */}
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <img src="style/images/art/t2.jpg" alt="" />
                  </figure>
                  <h5 className="mb-5">Cory Zamora</h5>
                  <div className="meta">Photographer</div>
                  <p>
                    Patrick's background in mathematics gives him a
                    sophisticated grasp on even the most theoretical aspects of
                    programming
                  </p>
                  <ul className="social social-color social-s">
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*/.swiper-slide */}
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <img src="style/images/art/t3.jpg" alt="" />
                  </figure>
                  <h5 className="mb-5">Barclay Widerski</h5>
                  <div className="meta">Photographer &amp; Editor</div>
                  <p>
                    Dan graduated from Cornell University in 2004 with a
                    Bachelor degree in computer science and a specialization in
                    mathematics.
                  </p>
                  <ul className="social social-color social-s">
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*/.swiper-slide */}
                <div className="swiper-slide">
                  <figure className="mb-20">
                    <img src="style/images/art/t4.jpg" alt="" />
                  </figure>
                  <h5 className="mb-5">Nikola Brooten</h5>
                  <div className="meta">Videographer</div>
                  <p>
                    After graduating from college with a degree in Multimedia,
                    Mat quickly got his feet wat in the freelance world of web
                    design.
                  </p>
                  <ul className="social social-color social-s">
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*/.swiper-slide */}
                {/* <div class="swiper-slide">
              <figure class="mb-20"> <img src="style/images/art/t5.jpg" alt="" /> </figure>
              <h5 class="mb-5">Connor Gibson</h5>
              <div class="meta">Photographer</div>
              <p>Nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis donec.</p>
              <ul class="social social-color social-s">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div> */}
                {/*/.swiper-slide */}
                {/* <div class="swiper-slide">
              <figure class="mb-20"><img src="style/images/art/t6.jpg" alt="" /></figure>
              <h5 class="mb-5">Jackie Sanders</h5>
              <div class="meta">Intern</div>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna ullamcorper.</p>
              <ul class="social social-color social-s">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
              </ul>
            </div> */}
                {/*/.swiper-slide */}
              </div>
              {/* .swiper-wrapper */}
            </div>
            {/* .swiper-container */}
            <div className="swiper-pagination gap-large" />
          </div>
          {/* .swiper-container-wrapper */}
        </div>
        {/* /.container */}
      </div>
      <div className="wrapper gray-wrapper">
        <div className="container inner">
          {/* /.row */}
          <div className="space70" />
          <div className="row">
            <div className="col-md-4">
              <h4>What is Our Process?</h4>
              <p>
                Our Processes are as seemless at it can be, All you need to do
                is <a href="sign_up.html"> Sign Up</a> choose your service type
                and the best hands in the industry will be assigned you{" "}
              </p>
              <ol>
                <li>
                  Get The best photographer/ videographer at your disposal
                </li>
                <li>
                  Trust us to arrive with our gadgets, indoors or Outdoors
                </li>
                <li>
                  Withine 3 working days, your work is ready in all required and
                  desired formats, soft/hard copy
                </li>
                {/* <li>Nulla vitae elit libero, a pharetra augue.</li> */}
              </ol>
            </div>
            {/* /column */}
            <div className="col-md-4">
              <h4>Why Choose Us?</h4>
              <p>
                Over ther years, Ogaphotos has networked with several
                photographersto bring you the best hand in the industry
              </p>
              <ul className="unordered-list list-default">
                <li>We hire the best hands for the job</li>
                <li>Our services are cost effective</li>
                <li>Your job is ready within 2 to 3 working days</li>
                <li>You are happy, We are happy, everybody is happy</li>
              </ul>
            </div>
            {/* /column */}
            <div className="col-md-4">
              <h4>Skills </h4>
              <ul className="progress-list">
                <li>
                  <p>Photoshop</p>
                  <div className="progressbar line blue" data-value={90} />
                </li>
                <li>
                  <p>Final Cut</p>
                  <div className="progressbar line green" data-value={80} />
                </li>
                <li>
                  <p>Studio Photography</p>
                  <div className="progressbar line orange" data-value={85} />
                </li>
                <li>
                  <p>Motion Video</p>
                  <div className="progressbar line red" data-value={65} />
                </li>
              </ul>
              {/* /.progress-list */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
          <div className="space10" />
          <div className="text-center">
            <a href="sign_up.html" className="btn btn-full-rounded">
              Hire a Photographer
            </a>
            <a href="photography_sign-up.html" className="btn btn-full-rounded">
              Become a Photographer
            </a>
          </div>
        </div>
        {/* /.container */}
      </div>
      <Footer/>
    </div>
  );
};

export default About;
