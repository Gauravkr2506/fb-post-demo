import React, { Component } from "react";
import Modal from "./modal/index";
import "./modal-tab.scss";
import { ReactComponent as Cross } from "./modal/cross.svg";
const tab_to_data = {
  1: "all",
  2: "like",
  3: "haha",
  4: "wow",
  5: "sad",
  6: "angry",
};

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_tab: 1,
    };
  }
  render() {
    const { selected_tab } = this.state;
    const { user_group } = this.props;
    return (
      <>
        {this.props.isModalVisible && (
          <Modal onModalClose={this.props.onModalClose}>
            <Modal.Body>
              <nav className="navLink">
                {"all" in user_group && (
                  <a
                    onClick={() => this.setState({ selected_tab: 1 })}
                    className={selected_tab == 1 ? "selected" : null}
                    href="#"
                  >
                    All {user_group.all.length}
                  </a>
                )}
                {"like" in user_group && (
                  <a
                    onClick={() => this.setState({ selected_tab: 2 })}
                    className={selected_tab == 2 ? "selected" : null}
                    href="#"
                  >
                    👍 {user_group.like.length}
                  </a>
                )}
                {"haha" in user_group && (
                  <a
                    onClick={() => this.setState({ selected_tab: 3 })}
                    className={selected_tab == 3 ? "selected" : null}
                    href="#"
                  >
                    😂 {user_group.haha.length}
                  </a>
                )}
                {"wow" in user_group && (
                  <a
                    onClick={() => this.setState({ selected_tab: 4 })}
                    className={selected_tab == 4 ? "selected" : null}
                    href="#"
                  >
                    😮 {user_group.wow.length}
                  </a>
                )}
                {"sad" in user_group && (
                  <a
                    onClick={() => this.setState({ selected_tab: 5 })}
                    className={selected_tab == 5 ? "selected" : null}
                    href="#"
                  >
                    😥 {user_group.sad.length}
                  </a>
                )}
                {"angry" in user_group && (
                  <a
                    onClick={() => this.setState({ selected_tab: 6 })}
                    className={selected_tab == 6 ? "selected" : null}
                    href="#"
                  >
                    😡 {user_group.angry.length}
                  </a>
                )}

                <span style={{ margin: 10, paddingTop: 5 }} title="close modal">
                  <Cross onClick={this.props.onModalClose} />
                </span>
              </nav>
              <div style={{ height: 500, maxHeight: 500, overflow: "scroll" }}>
                {user_group[tab_to_data[selected_tab]].map((user) => (
                  <div className="listItem ">
                    <img className="avatar" src={user.avatar} />
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
