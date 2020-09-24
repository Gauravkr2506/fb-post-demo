import React from "react";

export const Active = (Component) => {
  return class Active extends React.Component {
    state = { active: false };
    handleMouseDown = () => this.setState({ active: true });
    handleMouseUp = () => this.setState({ active: false });

    render() {
      return (
        <div onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>
          <Component {...this.props} {...this.state} />
        </div>
      );
    }
  };
};

export default Active;
