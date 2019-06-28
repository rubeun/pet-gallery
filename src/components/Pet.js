import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {
  state = {
    showModal:  false
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { petType, petId, petURL } = this.props;
    const imageAlt = "Photo of " + petType + " " + petId;

    return (
      <div className='pet-box' onClick={this.showModal}>
        <img className="pet-img" src={petURL} alt={imageAlt} />
      </div>
    )
  }
}

// Pet needs pets from store. Pet is also passed in id as prop (of Pet to be displayed)
function mapStateToProps({}, {petType, petInfo}) {

  return {
    petType,
    petId: parseInt(petInfo[0]) + 1,
    petURL: petInfo[1].url
  }
}

// 
export default connect(mapStateToProps)(Pet);