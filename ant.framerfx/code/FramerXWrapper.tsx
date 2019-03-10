import * as React from "react";
// import "./styles.less";
import Helmet from "react-helmet";
import { url } from "framer/resource";
import theme from "./theme";

class FramerXWrapper extends React.Component {
  //// Below does NOT work!
  // componentDidMount = () => {
  //   try {
  //     window.less.modifyVars({ "@primary-color": "red" });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet/less"
            type="text/css"
            href={url("node_modules/antd/dist/antd.less")}
          />
          <script>{`less = { javascriptEnabled: true, async: false, fileAsync: false }`}</script>
          <script
            src={url("node_modules/less/dist/less.js")}
            data-env="development"
          />
          <script>{`setTimeout(()=>less.modifyVars(${JSON.stringify(
            theme
          )}), 500)`}</script>
        </Helmet>
        {children}
      </>
    );
  }
}

export { FramerXWrapper };
