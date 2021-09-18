import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./CreateNotes.scss";

import { changeMode } from "../../redux/actions/workModeAC";
import { createNote } from "../../redux/actions/createNoteAC";

class CreateNotes extends React.Component {
  static propTypes = {
    workMode: PropTypes.number.isRequired, // from Redux
    notes: PropTypes.array.isRequired, //from Redux
  };

  state = {
    inputNote: "",
    tag: "",
  };

  input = (eo) => {
    let input = eo.target.value;
    this.setState({
      inputNote: eo.target.value,
      tag: input.indexOf('#') !== -1 ? input.slice(input.indexOf('#')):''
    });
  };

  cancel = () => {
    this.props.dispatch(changeMode(1));
  };

  create = () => {  
    this.props.dispatch(createNote(this.state.inputNote, this.state.tag));
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
        <span key={i} className="tag-item">
          {i}
        </span>
      );
    });
    return (
      <div className="create-note">
        <div className="create-note-input">
          <textarea
            rows="3"
            cols="80"
            maxLength="80"
            placeholder="Type here to create a note"
            value={this.state.inputNote}
            onChange={this.input}
          />
          <div className="create-btn">
            <button
              className={
                this.state.inputNote === "" ? "disabled-btn" : "available-btn"
              }
              disabled={this.state.inputNote !== "" ? false : true}
              onClick={this.create}
            >
              Create
            </button>
            <button className="available-btn" onClick={this.cancel}>
              Cancel
            </button>
          </div>
          <div className="tags">
            {listTags} {this.state.tag !== '' ? this.state.tag.split(' ')[0]:''}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    workMode: state.workMode,
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(CreateNotes);
