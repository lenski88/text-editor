import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Header.scss";

import { changeMode } from "../../redux/actions/workModeAC";

class Header extends React.Component {
  static propTypes = {
    workMode: PropTypes.number.isRequired, //from Redux
  };

  newNote = () => {
    this.props.dispatch(changeMode(3));
  };
  render() {
    return (
      <div className="header">
        <button
          className={
            this.props.workMode === 3 ? "disabled-button" : "available-button"
          }
          onClick={this.newNote}
          disabled={this.props.workMode === 3 ? true : false}
        >
          Create note
        </button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    workMode: state.workMode,
  };
};

export default connect(mapStateToProps)(Header);
