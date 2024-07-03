import classes from "./Services.module.css";
import Service from "./Service/Service";

export default function Services() {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>
          Explore Our
          <br />
          Awesome
          <span className={classes.blue}> Services</span>
        </h1>
      </div>
      <div className={classes.servicesContainer}>
        <Service
          name="Front-End Development"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              id="code"
            >
              <rect fill="none"></rect>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                points="64 88 16 128 64 168"
              ></polyline>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                points="192 88 240 128 192 168"
              ></polyline>
              <line
                x1="160"
                x2="96"
                y1="40"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
            </svg>
          }
        />
        <Service
          name="Backend Development"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          }
        />
        <Service
          name="App Development"
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect fill="none"></rect>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                points="64 88 16 128 64 168"
              ></polyline>
              <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                points="192 88 240 128 192 168"
              ></polyline>
              <line
                x1="160"
                x2="96"
                y1="40"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></line>
            </svg>
          }
        />
        <Service
          name="AI/ML Integration"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
          }
        />
        <Service
          name="Cloud Data Management"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h48v48H0z"></path>
              <path d="M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM38 36H12c-4.42 0-8-3.58-8-8s3.58-8 8-8h1.42c1.31-4.61 5.54-8 10.58-8 6.08 0 11 4.92 11 11v1h3c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
            </svg>
          }
        />
        <Service
          name="UI/UX Design"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M25 9.5H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1Zm-1 15H4v-13h20Z"></path>
              <path d="M29 5.5H7a1 1 0 0 0 0 2h21v14a1 1 0 0 0 2 0v-15a1 1 0 0 0-1-1zM7.73 21.48l3.77-4.42 3.61 4.4A1 1 0 1 0 16.53 20l1.25-1.37 2.47 2.83a1 1 0 0 0 1.51-1.32l-3.21-3.64a1 1 0 0 0-1.49 0l-1.82 2-3-3.59a1 1 0 0 0-1.53 0l-4.5 5.27a1 1 0 0 0 1.52 1.3z"></path>
            </svg>
          }
        />
        <Service
          name="Figma Designs"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              fill="currentColor"
            >
              <path d="M22.92,13.42H12.08a6.59,6.59,0,0,1,0-13.17H22.92a6.59,6.59,0,0,1,0,13.17ZM12.08,2.75a4.09,4.09,0,0,0,0,8.17H22.92a4.09,4.09,0,0,0,0-8.17Z"></path>
              <path d="M17.42,24.08H12.08a6.58,6.58,0,0,1,0-13.16,1.25,1.25,0,0,1,0,2.5,4.08,4.08,0,0,0,0,8.16h4.09V12.17a1.25,1.25,0,0,1,2.5,0V22.83A1.25,1.25,0,0,1,17.42,24.08Z"></path>
              <path d="M12.16,34.75a6.59,6.59,0,1,1,0-13.17,1.25,1.25,0,0,1,0,2.5,4.09,4.09,0,1,0,4.08,4.09V22.83a1.25,1.25,0,0,1,2.5,0v5.34A6.59,6.59,0,0,1,12.16,34.75Z"></path>
              <path d="M22.83,24.25a6.67,6.67,0,1,1,6.67-6.67A6.67,6.67,0,0,1,22.83,24.25Zm0-10.83A4.17,4.17,0,1,0,27,17.58,4.17,4.17,0,0,0,22.83,13.42Z"></path>
              <path d="M17.42,13.42h0a1.25,1.25,0,0,1-1.24-1.26l.08-10.67A1.25,1.25,0,0,1,17.5.25h0a1.25,1.25,0,0,1,1.24,1.26l-.08,10.67A1.26,1.26,0,0,1,17.42,13.42Z"></path>
            </svg>
          }
        />
        <Service
          name="Digital Marketing"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 64 64"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M48 14.5h-4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1S48.6 14.5 48 14.5zM51 10.5h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1S51.6 10.5 51 10.5zM33 5.5h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1S33.6 5.5 33 5.5z"></path>
              <path
                d="M59,5.5H41v-1c0-1.7-1.3-3-3-3H28c-2.2,0-3,1.8-3,3v5c0,1.6,1.3,3,3,3h1.6l2.3,2.3l-20,3.8c0,0-2.6,0.5-4.6,3.1
		c-0.1,0-0.2,0-0.3,0c-1.7,0.3-5,2.3-5,7.9s3.2,7.6,5,7.9c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.9,1.2,2,2,2.8,2.4
		c0,0.1,0.1,0.2,0.2,0.3l14,18c0.1,0.1,0.2,0.2,0.3,0.2c0.8,0.7,1.9,1.1,3,1.1c2.5,0,4.5-2,4.5-4.5c0-1.1-0.4-2.1-1.1-3
		c0-0.1-0.1-0.1-0.1-0.2l-7.6-9.2l20.6,3.9c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3,0c4.8,0,8.5-7.5,8.5-17
		c0-2.1-0.2-4.2-0.5-6l2-2H59c1.6,0,3-1.3,3-3v-10C62,7.3,61.2,5.5,59,5.5z M38.8,36.5c-0.5-2-0.8-4.4-0.8-7c0-2.6,0.3-5,0.8-7
		c0.1,0,0.1,0,0.2,0c2.2,0,4,3.2,4,7s-1.8,7-4,7C38.9,36.5,38.9,36.5,38.8,36.5z M30,10.5h-2c-0.5,0-1-0.4-1-1v-5c0-0.5,0.2-1,1-1
		h10c0.6,0,1,0.4,1,1v5c0,0.6-0.4,1-1,1h-3c-0.6,0-1,0.4-1,1v2.6l-3.3-3.3C30.5,10.6,30.3,10.5,30,10.5z M36,12.5h2v1.1L36,14V12.5z
		 M34.3,17.2c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.3,0,0.4-0.1c0.4-0.2,0.6-0.5,0.6-0.9V16l2-0.4v2.8c-1.2,2.9-2,6.8-2,11
		c0,6,1.5,11.2,3.8,14.2L20.4,40c0,0,0,0,0,0c-1.5-2.8-2.3-6.6-2.3-10.5s0.8-7.7,2.3-10.5c0,0,0,0,0,0l13.2-2.5L34.3,17.2z M4,29.5
		c0-2.8,0.9-4.3,1.8-5.1c-0.5,1.4-0.8,3-0.8,5.1c0,2,0.3,3.7,0.8,5C4.9,33.8,4,32.3,4,29.5z M7,29.5c0-8,5-9,5.2-9l5.7-1.1
		c-1.2,2.9-1.9,6.4-1.9,10.1c0,3.7,0.7,7.2,1.9,10.1l-5.8-1.1C12.1,38.5,7,37.6,7,29.5z M20.2,42.1l8.8,10.8c0,0.1,0.1,0.2,0.2,0.3
		c0.5,0.5,0.7,1.1,0.7,1.8c0,1.4-1.1,2.5-2.5,2.5c-0.7,0-1.3-0.3-1.8-0.7c0,0-0.1-0.1-0.1-0.1L13.2,40.7L20.2,42.1
		C20.2,42.1,20.2,42.1,20.2,42.1z M51,29.5c0,9-3.4,15-6.5,15c-1.9,0-3.9-2.2-5.2-6c3.2-0.3,5.7-4.1,5.7-9c0-3.5-1.3-6.5-3.2-8H48v4
		c0,0.4,0.2,0.8,0.6,0.9c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3l1-1C50.9,26.5,51,28,51,29.5z M60,18.5c0,0.5-0.4,1-1,1h-5
		c-0.3,0-0.5,0.1-0.7,0.3L50,23.1v-2.6c0-0.6-0.4-1-1-1h-8c-0.6,0-1-0.4-1-1v-6.8c0.6-0.5,1-1.3,1-2.2v-2h18c0.8,0,1,0.5,1,1V18.5z"
              ></path>
            </svg>
          }
        />
        <Service
          name="Social Media Management"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M35,7.75H29.08v5.91H35Zm-3,4.64a1.69,1.69,0,1,1,1.69-1.69A1.69,1.69,0,0,1,32,12.39Z"></path>
              <circle cx="32.04" cy="10.7" r=".31"></circle>
              <path d="M60.16,25.1a9.72,9.72,0,0,0-11.28-1.77,18.8,18.8,0,0,0-8.21-8.21,9.7,9.7,0,1,0-17.29,0,18.76,18.76,0,0,0-8.3,8.3,9.7,9.7,0,1,0,0,17.28,18.8,18.8,0,0,0,8.21,8.21,9.7,9.7,0,1,0,17.28,0,18.76,18.76,0,0,0,8.3-8.3A9.7,9.7,0,0,0,60.16,25.1ZM27.08,6.75a1,1,0,0,1,1-1H36a1,1,0,0,1,1,1v7.91a1,1,0,0,1-1,1H28.08a1,1,0,0,1-1-1ZM9.84,35h3.07a1,1,0,1,1,0,2H9.84a2.42,2.42,0,0,1-2.42-2.41v-6.5a1,1,0,0,1,2,0v2.65H13a1,1,0,1,1,0,2H9.43v1.85A.42.42,0,0,0,9.84,35Zm25.1,16.93a3.5,3.5,0,0,1-1.29-.12v3.66a2.79,2.79,0,1,1-2.79-2.79,2.75,2.75,0,0,1,.79.13V49.34a1,1,0,0,1,2-.12c.06.35.3.77,1.13.71a1,1,0,0,1,1.08.91A1,1,0,0,1,34.94,51.92Zm4.58-4.7a9.69,9.69,0,0,0-15.1,0,16.8,16.8,0,0,1-7.61-7.61,9.68,9.68,0,0,0,0-15.1,16.78,16.78,0,0,1,7.7-7.7,9.71,9.71,0,0,0,14.42.78,9.87,9.87,0,0,0,.68-.76,16.8,16.8,0,0,1,7.61,7.61,9.68,9.68,0,0,0,0,15.1A16.78,16.78,0,0,1,39.52,47.22ZM54.62,31a1,1,0,0,1,0,2H53v3a1,1,0,0,1-2,0V30.64A3.64,3.64,0,0,1,54.62,27a1,1,0,0,1,0,2A1.64,1.64,0,0,0,53,30.64V31Z"></path>
              <circle cx="30.86" cy="55.46" r=".79"></circle>
              <path d="M25 40.14a10.7 10.7 0 0014 0zM24.41 38.14V34a1 1 0 012 0v4.16h2.4V31.81a1 1 0 012 0v6.33h2.39v-8.3a1 1 0 012 0v8.3h2.38V26.72a1 1 0 012 0V38.14h1.22a10.71 10.71 0 00-1.87-14.33l-13 7.5a1 1 0 01-1-1.73l12.21-7A10.74 10.74 0 0023.19 38.14z"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
}
