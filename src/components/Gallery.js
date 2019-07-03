import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pet from './Pet';

// Gallery of Pets class
class Gallery extends Component {

  render() {
    let petsArr = [];
    let petsLoaded = false;

    let { loading, cats, dogs, petType, openModal } = this.props;

    // put all pets info into an array for easier mapping
    if (!loading) {
      console.log(petType);
      if (petType === "cat") {
        Object.entries(cats).forEach(cat => {
          petsArr.push(cat);
        })
      } else if (petType === "dog") {
        Object.entries(dogs).forEach(dog => {
          petsArr.push(dog);
        })
      }
      petsLoaded = true;
    }

    return (
      <div className='pet-grid'>
        {petsLoaded === true 
          ? petsArr.map((pet) => (
            <Pet key={pet[0]} petType={petType} petInfo={pet} openModal={openModal} />
          ))
          : null 
        }
      </div>
    )
  }
}

//App needs cats and dogs from store
function mapStateToProps({cats, dogs}, {petType, openModal}) {
  return {
    loading: cats === null || dogs === null,
    cats,
    dogs,
    petType,
    openModal
  }
}

export default connect(mapStateToProps)(Gallery);