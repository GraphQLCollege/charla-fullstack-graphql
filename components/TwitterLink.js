import React from "react";

import TwitterLogo from "./TwitterLogo";

class TwitterLink extends React.Component {
  render() {
    return (
      <a
        href={this.props.to}
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgb(29, 161, 242)",
          fontSize: "2rem"
        }}
      >
        <TwitterLogo style={{ width: 80 }} />
        @juli_mayorga
      </a>
    );
  }
}

export default TwitterLink;
