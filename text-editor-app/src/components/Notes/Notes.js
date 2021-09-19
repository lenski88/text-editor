import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Notes.scss";

//componets
import CreateNotes from "../CreateNotes/CreateNotes";
import EditNote from "../EditNote/EditNote";

//AC
import { changeMode } from "../../redux/actions/workModeAC";
import { deleteNote } from "../../redux/actions/createNoteAC";

class Notes extends React.PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired, //from Redux
    filterNotes: PropTypes.array, // from Redux
    workMode: PropTypes.number.isRequired, // from Redux
  };

  state = {
    editNote: null
  }

  deleteNote = (eo) => {
    this.props.dispatch(deleteNote(eo.target.name));
  };

  editNote = (eo) => {
    this.setState({
      editNote: eo.target.name
    })
    this.props.dispatch(changeMode(4));
  };

  render() {
    let notesList = this.props.notes.map((i) => {
      return (
        <div key={i.id} className="notes-item">
          {i.note}
          <div className="btn">
            <button name={i.id} onClick={this.editNote}>
              Edit
            </button>
            <button name={i.id} onClick={this.deleteNote}>
              Delete
            </button>
          </div>
        </div>
      );
    });

    let filterNotes = this.props.filterNotes.map((i) => {
      return (
        <div key={i.id} className="notes-item">
          {i.note}
          <div className="btn">
            <button name={i.id} onClick={this.editNote}>
              Edit
            </button>
            <button name={i.id} onClick={this.deleteNote}>
              Delete
            </button>
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
      )) ||
      (this.props.workMode === 3 && <CreateNotes />) ||
      (this.props.workMode === 4 && <EditNote  editNote={this.state.editNote}/>)
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
