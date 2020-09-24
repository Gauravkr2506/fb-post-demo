import React from "react";
import reactCSS from "reactcss";
import ReactTooltip from "react-tooltip";
import _ from "lodash";
import { listOfNames } from "../../../helpers/strings";

import FacebookCounterReaction from "./FacebookCounterReaction";

export const FacebookCounter = ({ counters, user, important, onClick, bg }) => {
  const styles = reactCSS({
    default: {
      counter: {
        display: "flex",
        cursor: "pointer",
        color: "#365899",
        fontFamily: `"San Francisco", -apple-system, BlinkMacSystemFont,
          ".SFNSText-Regular", sans-serif`,
        fontSize: "12px",
        fontWeight: "500",
      },
      name: {
        paddingLeft: "4px",
        marginTop: "2px",
      },
    },
  });

  const groups = _.groupBy(counters, "emoji");
  const names = _.map(counters, "by");

  const nameString = [];
  if (_.includes(names, user)) {
    nameString.push("You");
  }
  if (important.length) {
    if (_.includes(names, important[0])) {
      nameString.push(important[0]);
    }
    if (_.includes(names, important[1])) {
      nameString.push(important[1]);
    }
  }
  nameString.push(`${names.length - nameString.length} others`);

  return (
    <div style={styles.counter} onClick={onClick}>
      {_.map(_.keys(groups), (reaction, i, reactions) => {
        return (
          <FacebookCounterReaction
            key={i}
            user_list={counters
              .filter((user) => user.emoji === reaction)
              .map((user) => user.by)}
            reaction={reaction}
            index={reactions.length - i}
            bg={bg}
          />
        );
      })}
      <div
        data-tip={counters.map((obj) => obj.by).join("<br/>")}
        data-multiline={true}
        style={styles.name}
      >
        {listOfNames(nameString)}
      </div>
      <ReactTooltip />
    </div>
  );
};

FacebookCounter.defaultProps = {
  important: [],
  bg: "#fff",
};

export default FacebookCounter;
