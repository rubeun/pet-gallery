import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {


  handleChooseCats = () => {
    let { chooseCats } = this.props;
    chooseCats();
  }

  handleChooseDogs = () => {
    let { chooseDogs } = this.props;
    chooseDogs();
  }

  render() {

    return (
      <nav className='pet-nav'>
        <ul>
          <li onClick={this.handleChooseCats}>CATS</li>
          <li onClick={this.handleChooseDogs}>DOGS</li>
        </ul>
      </nav>
    )
  }
}

//App needs cats and dogs from store
function mapStateToProps({}, {chooseCats, chooseDogs}) {
  return {
    chooseCats,
    chooseDogs
  }
}

export default connect(mapStateToProps)(Nav);