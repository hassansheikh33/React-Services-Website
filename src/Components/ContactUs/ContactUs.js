import classes from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h2 className={classes.h2}>Contact Us for More Information</h2>
        <div className={classes.ContactInfo}>
          <svg
            className={classes.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <p>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>
        </div>
        <div className={classes.ContactInfo}>
          <svg
            className={classes.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <p>+(257) 563-7401</p>
        </div>
        <div className={classes.ContactInfo}>
          <svg
            className={classes.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <p>abc@pumaLanga.com</p>
        </div>
        <div>
          <p>Follow Us</p>
          <div className={classes.ContactInfo}>
            <svg
              onClick={() => {
                window.open("https://www.instagram.com/sheikh.xox/");
              }}
              className={classes.links}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
              <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
              <circle cx="12.3" cy="3.7" r=".533"></circle>
            </svg>
            <svg
              onClick={() => {
                window.open("https://www.facebook.com/hassansheikhh12");
              }}
              className={classes.links}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              onClick={() => {
                window.open("https://www.linkedin.com/in/hassan-bilal-dev");
              }}
              className={classes.links}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="10 10 50 50"
            >
              <g fill="none" fillRule="evenodd">
                <g>
                  <rect fill="currentColor" rx="4"></rect>
                  <path
                    fill="currentColor"
                    d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                  ></path>
                </g>
              </g>
            </svg>
            <svg
              onClick={() => {
                window.open("https://x.com/?lang=en");
              }}
              className={classes.links}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -3 26 26"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L13.348 9.23779L9.07342 3.40865C8.88504 3.15177 8.58555 3 8.267 3H4C3.62317 3 3.27833 3.21184 3.108 3.54798C2.93766 3.88412 2.97075 4.28747 3.19359 4.59135L9.45538 13.1304L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L10.652 14.7622L14.9266 20.5914C15.115 20.8482 15.4145 21 15.733 21H20C20.3768 21 20.7217 20.7882 20.892 20.452C21.0623 20.1159 21.0293 19.7125 20.8064 19.4086L14.5446 10.8696L20.7071 4.70711ZM12.3703 11.2865C12.4012 11.338 12.4371 11.3872 12.4781 11.4336L18.0266 19H16.2398L5.97338 5H7.76026L12.3703 11.2865Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className={classes.links}></div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContainer}>
          <div className={classes.formContainer}>
            <h2 className={classes.h2}>Contact Us Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <label htmlFor="name">Full Name</label>
                <input type="name" id="name" placeholder="eg. John Doe" />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@example.com"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message</label>
                <textarea
                  rows="10"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </fieldset>
              <button type="button" className={classes.submitBtn}>
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
