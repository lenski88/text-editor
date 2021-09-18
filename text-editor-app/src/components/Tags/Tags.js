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

  state = {
    filterNotes: this.props.notes,
  };

  filterNotes = (eo) => {
    let tag = eo.target.id;
    let newState = this.props.notes.filter((i) => {
      return i.tag === tag;
    });
    this.setState({
      filterNotes: newState,
    });
    this.props.dispatch(filterNotes(newState));
    this.props.dispatch(changeMode(2));
  };
  allNotes = () => {
    this.props.dispatch(allNotes());
    this.props.dispatch(changeMode(1));
  };
  render() {
    let list = [];
    for (let i = 0; i < this.props.notes.length; i++) {
      if (list.includes(this.props.notes[i].tag)) {
        continue;
      } else {
        list.push(this.props.notes[i].tag);
      }
    }
    let listTags = list.map((i) => {
      return (
        <span key={i} className="tag-item" id={i} onClick={this.filterNotes}>
          {i}
        </span>
      );
    });

    return this.props.workMode === 1 || this.props.workMode === 2 ? (
      <div className="tags-list">
        <span className="tag-item" onClick={this.allNotes}>
          All notes
        </span>
        {listTags}
      </div>
    ) : null;
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
