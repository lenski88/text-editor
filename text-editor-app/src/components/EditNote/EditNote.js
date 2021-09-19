import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./EditNote.scss";

import { changeMode } from "../../redux/actions/workModeAC";
import { changeNote } from "../../redux/actions/createNoteAC";

class EditNote extends React.Component {
  static propTypes = {
    notes: PropTypes.array.isRequired, //from Redux
    editNote: PropTypes.string.isRequired, //from parent
  };

  state = {
    inputValue: this.props.notes[this.props.editNote].note,
    tag: this.props.notes[this.props.editNote].tag,
    disabled: false,
  };

  changeInput = (eo) => {
    let input = eo.target.value;

    this.setState({
      inputValue: input,
      tag: input.indexOf("#") !== -1 ? input.slice(input.indexOf("#")) : "",
    });
    if (!eo.target.value) {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  };

  save = () => {
    let newNote = {
      ...this.props.notes[this.props.editNote],
      note: this.state.inputValue,
      tag:this.state.tag
    };
    this.props.dispatch(changeNote(newNote));
    this.props.dispatch(changeMode(1))
  };

  cancel = () => {
    this.props.dispatch(changeMode(1));
  };

  render() {
    return (
      <div className="edit-note">
        <div className="edit-note-input">
          <textarea
            rows="3"
            cols="80"
            maxLength="80"
            value={this.state.inputValue}
            onChange={this.changeInput}
          />
          <div className="edit-btn">
            <button
              className={this.state.disabled ? "dis-btn" : "avl-btn"}
              onClick={this.save}
              disabled={this.state.disabled ? true : false}
            >
              Save
            </button>
            <button className="avl-btn" onClick={this.cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(EditNote);
