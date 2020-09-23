import React, { Component } from "react";
import Modal from "./modal";
import FacebookSelector from "./facebook/FacebookSelector";
import FacebookCounter from "./facebook/FacebookCounter";
import "./reaction-footer.scss";

export default class ReactionFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_selector: false,
      show_modal: false,
      icon_class: "likeIcon",
      icon_text: "Like",
      icon_text_class: "",
    };
  }

  openModal = () => {
    this.setState({ show_modal: true });
  };

  closeModal = () => {
    this.setState({ show_modal: false });
  };

  onSelect = (reaction, e) => {
    console.log(reaction);

    if (reaction === "like") {
      this.setState({
        icon_class: "activelikeIcon",
        icon_text: "Like",
        icon_text_class: "likeactive",
      });
    } else if (reaction === "love") {
      this.setState({
        icon_class: "loveIcon",
        icon_text: "Love",
        icon_text_class: "loveactive",
      });
    } else if (reaction === "haha") {
      this.setState({
        icon_class: "hahaIcon",
        icon_text: "Haha",
        icon_text_class: "hahaactive",
      });
    } else if (reaction === "wow") {
      this.setState({
        icon_class: "wowIcon",
        icon_text: "Wow",
        icon_text_class: "hahaactive",
      });
    } else if (reaction === "sad") {
      this.setState({
        icon_class: "sadIcon",
        icon_text: "Sad",
        icon_text_class: "hahaactive",
      });
    } else if (reaction === "angry") {
      this.setState({
        icon_class: "angryIcon",
        icon_text: "Angry",
        icon_text_class: "angryactive",
      });
    }
    document
      .getElementById("reaction-group-" + this.props.id)
      .classList.add("hide");

    setTimeout(() => {
      document
        .getElementById("reaction-group-" + this.props.id)
        .classList.remove("hide");
    }, 1000);
    e.stopPropagation();
  };

  onClickLikeIcon = () => {
    const { icon_text_class } = this.state;
    if (icon_text_class === "") {
      this.setState({
        icon_class: "activelikeIcon",
        icon_text: "Like",
        icon_text_class: "likeactive",
      });
    } else {
      this.setState({
        icon_class: "likeIcon",
        icon_text: "Like",
        icon_text_class: "",
      });
    }
    document
      .getElementById("reaction-group-" + this.props.id)
      .classList.add("hide");

    setTimeout(() => {
      document
        .getElementById("reaction-group-" + this.props.id)
        .classList.remove("hide");
    }, 1000);
  };

  render() {
    const {
      show_selector,
      show_modal,
      icon_class,
      icon_text,
      icon_text_class,
    } = this.state;
    return (
      <div className="top">
        <div
          style={{ marginLeft: 10, marginRight: 10 }}
          className="borderBottom paddingBottom"
        >
          <FacebookCounter
            onClick={this.openModal}
            user={"Gaurav"}
            counters={this.props.counters}
            important={
              this.props.counters.length > 0
                ? this.props.counters.slice(0, 2).map((obj) => obj.by)
                : []
            }
          />
        </div>

        <div className="footerLink">
          <a
            className={`button ${icon_text_class}`}
            style={{ position: "relative" }}
            onClick={this.onClickLikeIcon}
          >
            <span className={`icons ${icon_class}`}></span>
            {icon_text}
            <div
              id={"reaction-group-" + this.props.id}
              className="reactionGroup"
            >
              <FacebookSelector onSelect={this.onSelect} />
            </div>
          </a>
          <a className="button">
            <span className="icons commentIcon"></span> Comment
          </a>
          <a className="button">
            <span className="icons shareIcon"></span> Share
          </a>
        </div>
        {show_modal && (
          <Modal
            isModalVisible={show_modal}
            onModalClose={this.closeModal}
            user_group={this.props.user_group}
          ></Modal>
        )}
      </div>
    );
  }
}
