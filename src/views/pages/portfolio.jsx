/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Portfolio = () => {
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
        data-image-src="style/images/art/bg9.jpg"
      >
        <div className="container inner pt-120 pb-120 text-center">
          <h1 className="heading"> Latest Works</h1>
          <p className="lead larger text-center mb-0">
            Minimalism meets photography
          </p>
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
              <div className="cbp-item cat2 cat3">
                <figure className="overlay overlay2">
                  <a href="media/children1.jpg">
                    <img src="media/children1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat5">
                <figure className="overlay overlay2">
                  <a href="media/baby1.jpg">
                    <img src="media/baby1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat1 cat5">
                <figure className="overlay overlay2">
                  <a href="media/family1.jpg">
                    <img src="media/family1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat2 cat4">
                <figure className="overlay overlay2">
                  <a href="media/family2.jpg">
                    <img src="media/family2.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat1 cat2">
                <figure className="overlay overlay2">
                  <a href="media/pregnancy1.jpg">
                    <img src="media/pregnancy1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat5 cat3">
                <figure className="overlay overlay2">
                  <a href="media/family3.jpg">
                    <img src="media/family3.jpg" alt="" />
                  </a>
                </figure>
              </div>
              {/*/.cbp-item */}
              <div className="cbp-item cat5 cat2">
                <figure className="overlay overlay2">
                  <a href="media/weddin2.jpg">
                    <img src="media/weddin2.jpg" alt="" />
                  </a>
                </figure>
              </div>
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
      <Footer/>
    </div>
  );
};

export default Portfolio;
