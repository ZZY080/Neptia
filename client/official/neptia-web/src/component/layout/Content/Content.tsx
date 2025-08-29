import "@component/layout/Content/Content.css";
import { Outlet } from "react-router-dom";

const Content = (props: { height: number }) => {
  return (
    <>
      <div style={{ minHeight: props.height, paddingTop: "66px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Content;
