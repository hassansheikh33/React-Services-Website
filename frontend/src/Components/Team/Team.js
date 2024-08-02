import React from "react";
import classes from "./Team.module.css";
import TeamMember from "./TeamMember/TeamMember";

export default function Team() {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>Meet our Team</h1>
        <p>
          This is our team of well-known professional indivisuals. These are
          some of the brightest minds and most experienced executives in
          business.
        </p>
      </div>
      <section className={classes.membersContainer}>
        <div className={classes.members}>
          <TeamMember
            name="Doctor Faraz"
            designation="CoFounder"
            src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
            alt="woman"
          />
          <TeamMember
            name="Hassan Sheikh"
            designation="CEO"
            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
            alt="man"
            main={true}
          />
          <TeamMember
            name="Taha Khokhar"
            designation="Manager"
            src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
            alt="woman"
          />
        </div>
      </section>
    </div>
  );
}
