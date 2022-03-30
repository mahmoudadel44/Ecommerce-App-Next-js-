import React from "react";

//Css
import styles from "../../styles/ContactUs.module.css";
const ContactUs = () => {
  return (
    <section className={`${styles.contactUs} text-center mt-5`}>
      <div className={styles.fields}>
        <div className="container">
          <i className="fa fa-headphones fa-5x"></i>
          <h2 className="h1">Tell Us what You Feel</h2>
          <p className="lead">Fell Free To Contact Us Any Time</p>
          <form className="row" role="form" id="login">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="user name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="cell phone"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <textarea
                  className={`${styles.textArea} form-control input-lg`}
                  rows="6"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
          </form>
          <button type="submit" className="btn btn-success">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
