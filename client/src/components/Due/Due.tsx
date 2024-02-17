import { FC } from "react";
import { useEffect, useState } from "react";
import instance from "../../instance";
import classes from "./Due.module.css";

interface Data {
  title: string;
  course: string;
  topic: string;
  dueDate: string;
}
export const Due: FC = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const fetchUserHandler = async () => {
      try {
        const res = await instance.get("user/getQuizzes");
        const data = res.data.data.quizzes;
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserHandler();
  }, []);
  const Time = (dueDate: string) => {
    const time = new Date(dueDate);
    const time1 = time.toLocaleTimeString().slice(0, 4);
    const time2 = time.toLocaleTimeString().slice(7, 11);
    const result = time1 + time2;
    return result;
  };
  return (
    <div className={classes.whatsDue}>
      <h2>What's Due</h2>
      <div className={classes.list}>
        {data.map((item, index) => (
          <div key={index} className={classes.item}>
            <span className={classes.title}> {item.title} </span>
            <span className={classes.course}>Course : {item.course}</span>
            <span className={classes.topic}>Topic : {item.topic}</span>
            <span className={classes.dueDate}>
              Due to : {Time(item.dueDate)}
            </span>
            <button className={classes.Btn}>Start Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};
