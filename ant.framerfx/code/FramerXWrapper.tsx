import * as React from "react";
import antd from "antd/dist/antd.less";
// import "./styles.less";
import Helmet from "react-helmet";
import { url } from "framer/resource";

function Wrapper({ children }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href={antd} />
      </Helmet>
      {children}
    </>
  );
}

export const FramerXWrapper = Wrapper;
