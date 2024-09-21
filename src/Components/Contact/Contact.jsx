import React from "react";
import "./Contact.css";
import logo from "../../assets/logo.svg";
import message from "../../assets/message.svg";
import call from "../../assets/call.svg";
import location from "../../assets/location.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c819bdd7-263c-4da9-b24a-926a34c130c0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={logo} alt="logo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
          I’m currently available for new job opportunities and eager to contribute my skills to exciting projects. Whether you're looking for a passionate developer or just want to discuss potential collaborations, feel free to get in touch. I'm always open to connecting and exploring new possibilities!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={message} alt="" /> <p>negisuraj080@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91 9882200229</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Paonta Sahib,Himachal Pradesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
