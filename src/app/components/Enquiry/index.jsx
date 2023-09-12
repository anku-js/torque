"use client";

import React, { useState } from "react";
import Loader from "../Loader";
import styles from "./styles.module.scss";

import { Ultra, Barlow } from "next/font/google";

export const ultra = Ultra({ weight: ["400"], subsets: ["latin"], variable: '--font-ultra' });
export const barlow = Barlow({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const initializeForm = () => {
    setFormSubmitted(false);
    setSubmissionError(false);
    setApiResponse("");
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobileNumber, message } = formData;
    const isFormFieldsValid = true;
    if (isFormFieldsValid) {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        sheet1: {
          date: new Date(),
          name,
          phone: mobileNumber,
          email,
          message,
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch(
        "https://api.sheety.co/7ea08598bd4b3ce50248a7c8fe2ca9fb/torqueEngineeringLeads/sheet1",
        requestOptions
      )
        .then((response) => {
          setFormSubmitted(true);
          setApiResponse(
            "Thank you for your submission. We will get back to you soon."
          );
          setLoading(false);
        })
        .catch((error) => {
          setFormSubmitted(true);
          setSubmissionError(true);
          setApiResponse(
            "Currently, we are not able to take your submission. Please call us on 8459982237"
          );
          setLoading(false);
        });
    }
  };

  return (
    <section id="Enquire" className={styles.fullScreenBackground}>
      <div className={styles.modal}>
        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            poster="/images/poster.jpg"
          >
            <source src="/ship.mp4" type="video/mp4" />
          </video>
          <p className={styles.info + " " + ultra.className}>
            If you have any query, feel free to contact us.
          </p>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.formContainer}>
          {!loading && !formSubmitted && (
            <form onSubmit={handleSubmit}>
              <div className={styles.formField}>
                <label className={ultra.className}>Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={barlow.className}
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formField}>
                <label className={ultra.className}>Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={barlow.className}
                  placeholder="Enter your email"
                />
              </div>
              <div className={styles.formField}>
                <label className={ultra.className}>Mobile Number</label>
                <input
                  required
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={barlow.className}
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className={styles.formField}>
                <label className={ultra.className}>Message (optional)</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={barlow.className}
                  placeholder="Enter a message for us"
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          )}
          {loading && <Loader />}
          {formSubmitted && !loading && (
            <div className={styles.success}>
              <div className={styles.icon}>
                <img src="/images/success.png" alt="Success" />
              </div>
              <p className={ultra.className}>{apiResponse}</p>
              <button
                type="button"
                className={styles.submitButton}
                onClick={initializeForm}
              >
                Submit a new form
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
