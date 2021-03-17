/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import "./SignupStyle.css";

const How_it_works = () => {
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
      <div
        className="wrapper image-wrapper bg-image inverse-text"
        data-image-src="style/images/art/bg6.jpg"
      >
        <div className="container inner pt-120 pb-120 text-center">
          <h1 className="heading mb-0">How It Works </h1>
        </div>
        {/* /.container */}
      </div>
      {/* /.wrapper */}
      {/* /.container */}
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
                      Book A Session
                    </a>
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
      <div className="wrapper light-wrapper">
        <div className="container inner">
          <p className="lead larger text-center">
            Ogaphotos is a creative service provider
            <br className="d-none d-xl-block" />
            connecting people with the best hands in the industry
          </p>
          <div className="space30" />
          <div className="row text-center">
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-love_hearts" />
                </span>
                <h5>Wedding Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-gambling_diamond-2" />
                </span>
                <h5>Jewelry Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
            <div className="space30 d-lg-none d-xl-none" />
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-party_christmas-cake" />
                </span>
                <h5>Birthday Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-clothes_lady-bag-3" />
                </span>
                <h5>Fashion Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="row text-center">
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-love_hearts" />
                </span>
                <h5>
                  Family <br /> Photography
                </h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-clothes_lady-bag-3" />
                </span>
                <h5>Personal Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
            <div className="space30 d-lg-none d-xl-none" />
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-gambling_diamond-2" />
                </span>
                <h5>Corperate Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
            <div className="col-md-6 col-lg-3">
              <div className="box box-border">
                <span className="icon icon-color color-default fs-48 mb-20">
                  <i className="si-party_christmas-cake" />
                </span>
                <h5>Commercial Photography</h5>
                {/* <p>Nulla vitae elit libero elit non porta gravida eget metus cras egestas.</p> */}
              </div>
              {/*/.box */}
            </div>
            {/*/column */}
          </div>
        </div>
        <div className="wrapper gray-wrapper">
          <div className="container inner">
            <h2 className="sub-heading text-center">
              Let's make something great together.
            </h2>
            <div className="space10" />
            <div className="text-center">
              <a
                href="portfolio.html"
                className="btn fixed-width btn-full-rounded mb-0"
              >
                {" "}
                selected Works
              </a>
              <div className="space10 d-md-none" />
              <a
                href="contact.html"
                className="btn fixed-width btn-green btn-full-rounded mb-0"
              >
                Get in Touch
              </a>{" "}
            </div>
            {/* /.text-center */}
          </div>
          {/* /.container */}
        </div>
        {/* /.wrapper */}
        {/* /.wrapper */}
        <div className="wrapper gray-wrapper" style={{ marginTop: "-120px" }}>
          <div className="container inner">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="swiper-container-wrapper basic-slider">
                  <div className="swiper-container text-center">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top larger">
                          <p>
                            Taking pictures is savoring life intensely, every
                            hundredth of a second.
                          </p>
                          {/* <footer class="blockquote-footer">Connor Gibson</footer> */}
                        </blockquote>
                      </div>
                      {/* /.swiper-slide */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top larger">
                          <p>
                            if you see something that moves you, and then snap
                            it, you keep a moment.
                          </p>
                          {/* <footer class="blockquote-footer">Coriss Ambady</footer> */}
                        </blockquote>
                      </div>
                      {/* /.swiper-slide */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top larger">
                          <p>
                            Beauty can be seen in all things, seeing and
                            composing the beauty is what separates the snapshot
                            from the photograph
                          </p>
                          {/* <footer class="blockquote-footer">Barclay Widerski</footer> */}
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
      </div>
      <Footer/>
    </div>
  );
};

export default How_it_works;
