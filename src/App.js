import React from "react";
import "./App.scss";
import PostHeader from "./components/post-header";
import ReactionFooter from "./components/reaction-footer/reaction-footer";
import PostImage from "./assets/images/post.jpg";
import { reaction_data, user_content_reaction, users } from "./data/dummy_data";

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

export default () => {
  return (
    <div className="container">
      <div className="surface">
        {[1, 2, 3].map((item) => (
          <div className="post" key={item}>
            <PostHeader />
            <img
              style={{ width: "100%", paddingBottom: 10 }}
              src={PostImage}
              alt="post"
            />
            <ReactionFooter
              id={item}
              user={"Gaurav"}
              counters={counters}
              user_group={user_group}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
