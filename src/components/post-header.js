import React, { Component } from "react";

import DiscoveryImage from "./../assets/images/discovery.png";
export default class PostHeader extends Component {
  render() {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div style={{ flex: 1 }}>
            <img
              style={{ borderRadius: "50%", width: 50, padding: 5 }}
              src={DiscoveryImage}
            />
          </div>
          <div style={{ flex: 9, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                paddingTop: 10,
                color: "#385898",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Discovery Magazine
            </div>
            <div style={{ color: "#616770" }}>1h</div>
          </div>
        </div>
        <p
          style={{
            paddingLeft: 10,
            fontWeight: -10,
            fontSize: 18,
            lineHeight: 1.38,
            color: "#1c1e21",
          }}
        >
          The water stored in the inner layers of Earth may be more plentiful —
          and important — than scientists previously thought.
        </p>
      </div>
    );
  }
}
