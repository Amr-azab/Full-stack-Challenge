import { FC } from "react";
import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { LeftNav } from "../LeftNav/LeftNav";
export interface LayoutProps {}
export const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className={classes.leftNavLayout}>
      <LeftNav />
      <div className={classes.right}>
        <Outlet />
      </div>
    </div>
  );
};
