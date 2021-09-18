import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import Notes from './components/Notes/Notes';
import Tags from './components/Tags/Tags';


class App extends React.Component {
  static propTypes = {
    notes:PropTypes.array.isRequired, // from Redux **list of notes**
    workMode:PropTypes.number.isRequired //from Redux **1 - view, 2 - filter, 3 - create, 4 - edit**
  }
  render () {
    return (
      <div className='app'>
        <Header/>
        <Tags/>
        <Notes/>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    notes: state.notes,
    workMode: state.workMode
  }
}

export default connect(mapStateToProps)(App);

