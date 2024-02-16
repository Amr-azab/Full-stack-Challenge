import { FC } from "react";
import classes from "./LeftNav.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import instance from "../../instance";
import { useUserIdStore } from "../../store/userStorge";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import { Home, BarChart, Book, School, Event, Mic } from "@mui/icons-material";
export const LeftNav: React.FC = () => {
  const navigate = useNavigate();
  const user = useUserIdStore((state) => state.userProfile);
  const setUser = useUserIdStore((state) => state.setUser);
  const logOutHandler = async () => {
    const res = await instance.post("/user/logout");
    if (res.data.status === "success") {
      setUser("");
      navigate("/signIn", { replace: true });
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>Coligo</div>
      <div className={classes.links}>
        <div>
          <Home />
          <Link to={`/user/${user._id}`} className={classes.customLink}>
            Dashboard
          </Link>
        </div>
        <div>
          <Event />
          Schedule
        </div>
        <div>
          <School />
          GradeBook
        </div>
        <div>
          <Book />
          Courses
        </div>
        <div>
          <BarChart />
          Performance
        </div>
        <div>
          <VolumeDownOutlinedIcon />
          Announcement
        </div>
        <div>
          <ExitToAppIcon />
          <Link
            to="/logout"
            className={classes.customLink}
            onClick={logOutHandler}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
