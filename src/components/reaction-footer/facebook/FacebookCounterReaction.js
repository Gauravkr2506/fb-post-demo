import React from "react";
import ReactTooltip from "react-tooltip";
import reactCSS from "reactcss";
import icons from "./helpers/icons";

export const FacebookCounterReaction = ({ reaction, bg, index, user_list }) => {
  const styles = reactCSS({
    default: {
      reaction: {
        width: "16px",
        height: "16px",
        backgroundSize: "100% 100%",
        borderRadius: "8px",
        backgroundImage: `url(${icons.find("facebook", reaction)})`,
        boxShadow: `0 0 0 2px ${bg}`,
        position: "relative",
        // zIndex: index,
      },
    },
  });
  return (
    <>
      <div
        data-tip={`${reaction} <br/> ${user_list.join("<br/>")}`}
        // data-tip={"ssfsfs<br/>ndfdfd\nhhh"}
        data-multiline={true}
        style={styles.reaction}
      />
      <ReactTooltip />
    </>
  );
};

export default FacebookCounterReaction;
