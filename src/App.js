import React, { Component } from "react";
// import { FacebookSelector } from "react-reactions";
import "./App.scss";
import PostHeader from "./components/post-header";
import ReactionFooter from "./components/reaction-footer/reaction-footer";

import PostImage from "./assets/images/post.jpg";
import {
  reaction_data,
  user_content_reaction,
  users,
} from "./components/dummy_data";

const id_to_emoji = reaction_data.reduce((a, v) => {
  a[v.id] = { ...v, name: v.name.toLocaleLowerCase() };
  return a;
}, {});

const user_id_to_emoji_id = user_content_reaction.reduce((a, v) => {
  a[v.user_id] = v.reaction_id;
  return a;
}, {});

const counters = users
  .filter((user) => user.id in user_id_to_emoji_id)
  .map((user) => ({
    ...user,
    by: user.first_name,
    emoji: id_to_emoji[user_id_to_emoji_id[user.id]].name,
    emoji_icon: id_to_emoji[user_id_to_emoji_id[user.id]].emoji,
  }));

const user_group = counters.reduce((a, v) => {
  if (v.emoji in a) {
    a[v.emoji].push(v);
  } else {
    a[v.emoji] = [v];
  }

  return a;
}, {});
user_group["all"] = counters;

export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <div className="surface">
          {[1, 2, 3].map((itm) => (
            <div className="post">
              <PostHeader />
              <img
                style={{ width: "100%", paddingBottom: 10 }}
                src={PostImage}
              />
              <ReactionFooter
                id={itm}
                user={"Gaurav"}
                counters={counters}
                user_group={user_group}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
