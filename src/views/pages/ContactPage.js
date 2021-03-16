/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { Scripts } from "../../script";

const Contact = () => {
  useEffect(() => {
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);
  return (
    <section id="home" className="pt-0 mt-0">
      {/* <div class="rev_slider_wrapper fullscreen-container">
 

  <!/.rev_slider */}
      --&gt;
      {/* /.rev_slider_wrapper */}
      {/* /.wrapper */}
      <div className="wrapper dark-wrapper inverse-text" id="contact">
        <div className="container inner">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="section-title section-title-upper text-center">
                Get in Touch
              </h2>
              <p className="text-center">
                Ogaphotos has both Video and Phtography specialist all over the
                cities for all your events. Trust us to do a good job in
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
              <div className="form-container">
                <form
                  action="http://themes.iki-bir.com/brailie/contact/vanilla-form.php"
                  method="post"
                  className="vanilla vanilla-form"
                  noValidate
                >
                  <div className="row text-center">
                    <div className="col-md-6 pr-10">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your name"
                          required="required"
                        />
                      </div>
                      {/*/.form-group */}
                    </div>
                    {/*/column */}
                    <div className="col-md-6 pl-10">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your e-mail"
                          required="required"
                        />
                      </div>
                      {/*/.form-group */}
                    </div>
                    {/*/column */}
                    <div className="col-md-6 pr-10">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="tel"
                          placeholder="Phone"
                        />
                      </div>
                      {/*/.form-group */}
                    </div>
                    {/*/column */}
                    <div className="col-md-6 pl-10">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      {/*/.form-group */}
                    </div>
                    {/*/column */}
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows={3}
                        placeholder="Type your message here..."
                        required
                        defaultValue={""}
                      />
                      <div className="space20" />
                      <button
                        type="submit"
                        className="btn btn-full-rounded"
                        data-error="Fix errors"
                        data-processing="Sending..."
                        data-success="Thank you!"
                      >
                        Submit
                      </button>
                      <footer className="notification-box" />
                    </div>
                    {/*/column */}
                  </div>
                  {/*/.row */}
                </form>
                {/*/.vanilla-form */}
              </div>
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
  );
};

export default Contact;
