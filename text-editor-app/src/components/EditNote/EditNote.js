import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class EditNote extends React.Component {
    static propTypes = {
        notes:PropTypes.array.isRequired, //from Redux
    }
  render() {
    return <div className='edit-note'>
        
    </div>;
  }
}


const mapStateToProps = function (state) {
    return {
        notes:state.notes
    }
}

export default connect(mapStateToProps)(EditNote);