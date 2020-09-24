/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Modal from "./modal-component/index";
import "./modal.scss";
import { ReactComponent as Cross } from "./../../assets/images/cross.svg";
const tab_to_data = {
  1: "all",
  2: "like",
  3: "haha",
  4: "wow",
  5: "sad",
  6: "angry",
};

export default class ModalComponent extends Component {
  state = {
    selected_tab: 1,
  };

  render() {
    const { selected_tab } = this.state;
    const { user_group, isModalVisible, onModalClose } = this.props;
    return (
      <>
        {isModalVisible && (
          <Modal onModalClose={onModalClose}>
            <Modal.Body>
              <nav className="navLink">
                {user_group["all"] && (
                  <a
                    onClick={() => this.setState({ selected_tab: 1 })}
                    className={selected_tab === 1 ? "selected" : null}
                    href="#"
                  >
                    All {user_group.all.length}
                  </a>
                )}
                {user_group["like"] && (
                  <a
                    onClick={() => this.setState({ selected_tab: 2 })}
                    className={selected_tab === 2 ? "selected" : null}
                    href="#"
                  >
                    <span role="img" aria-label="like">
                      👍
                    </span>{" "}
                    {user_group.like.length}
                  </a>
                )}
                {user_group["haha"] && (
                  <a
                    onClick={() => this.setState({ selected_tab: 3 })}
                    className={selected_tab === 3 ? "selected" : null}
                    href="#"
                  >
                    <span role="img" aria-label="haha">
                      😂
                    </span>{" "}
                    {user_group.haha.length}
                  </a>
                )}
                {user_group["wow"] && (
                  <a
                    onClick={() => this.setState({ selected_tab: 4 })}
                    className={selected_tab === 4 ? "selected" : null}
                    href="#"
                  >
                    <span role="img" aria-label="wow">
                      😮
                    </span>{" "}
                    {user_group.wow.length}
                  </a>
                )}
                {user_group["sad"] && (
                  <a
                    onClick={() => this.setState({ selected_tab: 5 })}
                    className={selected_tab === 5 ? "selected" : null}
                    href="#"
                  >
                    <span role="img" aria-label="sad">
                      😥
                    </span>{" "}
                    {user_group.sad.length}
                  </a>
                )}
                {user_group["angry"] && (
                  <a
                    onClick={() => this.setState({ selected_tab: 6 })}
                    className={selected_tab === 6 ? "selected" : null}
                    href="#"
                  >
                    <span role="img" aria-label="angry">
                      😡
                    </span>{" "}
                    {user_group.angry.length}
                  </a>
                )}

                <span style={{ margin: 10, paddingTop: 5 }} title="close modal">
                  <Cross onClick={onModalClose} />
                </span>
              </nav>
              <div style={{ height: 500, maxHeight: 500, overflowY: "scroll" }}>
                {user_group[tab_to_data[selected_tab]].map((user) => (
                  <div className="listItem" key={user.email}>
                    <img className="avatar" src={user.avatar} alt="logo" />
                    <div style={{ top: 35, position: "relative", right: 15 }}>
                      {user.emoji_icon}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          top: 10,
                          color: "#1d2129",
                          cursor: "pointer",
                          fontSize: 14,
                        }}
                      >
                        {user.first_name}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          top: 15,
                          color: "#90949c",
                          cursor: "pointer",
                          fontSize: 12,
                        }}
                      >
                        {user.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Modal.Body>
          </Modal>
        )}
      </>
    );
  }
}
