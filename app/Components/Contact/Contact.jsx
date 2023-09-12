"use client";
import React, { useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import Stars from "../Stars";
import styles from "../../styles/contact.module.css";
import { useRouter } from "next/navigation";

// const Result = () => {
//   const router = useRouter()
//   return (
//     <div className={styles.result}>
//       <p>Your message has been sent.</p>
//       <p>Want to send another message? <span onClick={setS}}>Go here</span></p>
//     </div>

//   );
// };

const Contact = () => {
  const form = useRef();
  const [showResult, setShowResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowResult(true);
  };

  return (
    <div className={styles.contact}>
      <Stars />
        {showResult?  <div className={styles.contactConatiner}>
          <div className={styles.result}>
          <p>Your message has been sent. Want to send another message? <span onClick={()=>setShowResult(false)}>Go here</span></p>
          </div>
          
         </div> : 
         <div className={styles.contactConatiner}>
           <div className={styles.text}>
          <h2>Contact.</h2>
          <p>
            Get in touch or shoot me an email directly on{" "}
            <span
              onClick={() => (window.location = "mailto:abelbeworking245@gmail.com")}
            >
              abelbeworking245@gmail.com
            </span>
          </p>
        </div>
  
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className={styles.input} 
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <textarea name="message" placeholder="Message" required />
            <div className={styles.btnContainer}>
              <input
                type="submit"
                value="Send Message"
                className={styles.btn}
              />
            </div>
          </form>
         </div>
       
 }

      </div>
  );
};

export default Contact;
