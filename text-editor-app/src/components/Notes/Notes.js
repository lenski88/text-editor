import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Notes.scss";

class Notes extends React.PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired, //from Redux
    filterNotes: PropTypes.array, // from Redux
    workMode: PropTypes.number.isRequired, // from Redux
  };

  render() {
    let notesList = this.props.notes.map((i) => {
      return (
        <div key={i.id} className="notes-item">
          {i.note}
          <div className="btn">
            <button onClick={this.click}>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      );
    });

    let filterNotes = this.props.filterNotes.map((i) => {
      return (
        <div key={i.id} className="notes-item">
          {i.note}
          <div className="btn">
            <button onClick={this.click}>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      );
    });
    return (
      (this.props.workMode === 1 && (
        <div className="notes-list">{notesList}</div>
      )) ||
      (this.props.workMode === 2 && (
        <div className="notes-list">{filterNotes}</div>
      ))
      /* (this.props.workMode === 3 && (<CreateNote/>)) */
    );
  }
}

const mapStateToProps = function (state) {
  return {
    notes: state.notes,
    workMode: state.workMode,
    filterNotes: state.filterNotes,
  };
};

export default connect(mapStateToProps)(Notes);
