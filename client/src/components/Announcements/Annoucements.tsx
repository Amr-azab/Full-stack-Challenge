import React, { useState, useEffect } from "react";
import { FC } from "react";
import classes from "./Annoucements.module.css";
import instance from "../../instance";
import defaultImg from "../../components/img/default.jpg";
export interface AnnoucementTextProps {
  name: string; // Make the props optional by adding "?"
  course: string;
  announcementText: string;
}
export const Annoucements: FC = () => {
  const [announcement, setAnnouncement] = useState<AnnoucementTextProps[]>([]);
  useEffect(() => {
    const fetchUserHandler = async () => {
      try {
        const res = await instance.get("user/getAnnouncement");
        const data = res.data.data.announcements;
        setAnnouncement(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserHandler();
  }, []);

  return (
    <div className={classes.Container}>
      <h2>Announcements</h2>
      {announcement.map((item, index) => (
        <div key={index} className={classes.Card}>
          <img className={classes.img} alt="user" src={defaultImg} />
          <div>
            <p className={classes.Name}>{item.name}</p>
            <p className={classes.Course}>{item.course}</p>
          </div>
          <p className={classes.Text}>{item.announcementText}</p>
        </div>
      ))}
    </div>
  );
};
