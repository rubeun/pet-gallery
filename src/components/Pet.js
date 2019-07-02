import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {

  // handle the modal 
  handleOpenModal = () => {
    const { openModal, petURL } = this.props;
    openModal(petURL);
  }

  render() {
    const { petType, petId, petURL } = this.props;
    const imageAlt = "Thumbnail of " + petType + " " + petId;

    return (
      <div className='pet-box' onClick={this.handleOpenModal}>
        <img className="pet-img" src={petURL} alt={imageAlt} />
      </div>
    )
  }
}

// Pet is passed in the petType, petInfo and openModal function from App as props
function mapStateToProps({}, {petType, petInfo, openModal}) {

  return {
    petType,
    petId: parseInt(petInfo[0]) + 1,
    petURL: petInfo[1].url,
    openModal
  }
}

// 
export default connect(mapStateToProps)(Pet);