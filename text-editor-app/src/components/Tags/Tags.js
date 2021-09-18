import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { allNotes, filterNotes } from "../../redux/actions/filterAC";
import { changeMode } from "../../redux/actions/workModeAC";

import "./Tags.scss";

class Tags extends React.Component {
  static propTypes = {
    notes: PropTypes.array.isRequired, //from Redux
    filterNotes: PropTypes.array.isRequired, //from Redux
    workMode: PropTypes.number.isRequired, // from Redux
  };

  filterNotes = (eo) => {
    let tag = eo.target.id;
    this.props.dispatch(filterNotes(tag));
    this.props.dispatch(changeMode(2));
  };
  allNotes = () => {
    this.props.dispatch(allNotes());
    this.props.dispatch(changeMode(1));
  };
  render() {
    let listTags = this.props.notes.map((i) => {
      return (
        <span
          key={i.id}
          className="tag-item"
          id={i.tag}
          onClick={this.filterNotes}
        >
          {i.tag}
        </span>
      );
    });
    return (
      this.props.workMode === 1 || this.props.workMode === 2 ? (
        <div className="tags-list">
          <span className="tag-item" onClick={this.allNotes}>
            All notes
          </span>
          {listTags}
        </div>
      ): null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    workMode: state.workMode,
    filterNotes: state.filterNotes,
  };
};

export default connect(mapStateToProps)(Tags);
