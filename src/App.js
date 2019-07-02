import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Pet from './components/Pet';
import Modal from './components/Modal';

class App extends Component {

  state = {
    petType: "cats",
    showModal: false,
    modalImgURL: null
  }

  openModal = (petURL) => {
    this.setState((state) => ({
      ...state,
      showModal: true,
      modalImgURL: petURL
    }));
  }

  closeModal = () => {
    this.setState((state) => ({
      ...state,
      showModal: false,
      modalImgURL: null
    }));    
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    /* eslint-disable jsx-a11y/href-no-hash */
    let petsArr = [];
    let petsLoaded = false;

    let { petType } = this.state;
    let { loading, cats, dogs } = this.props;

    // put all pets info into an array for easier mapping
    if (!loading) {
      if (petType === "cats") {
        Object.entries(cats).forEach(cat => {
          petsArr.push(cat);
        })
      } else if (petType === "dogs") {
        Object.entries(dogs).forEach(dog => {
          petsArr.push(dog);
        })
      }
      petsLoaded = true;
    }

    return (
      <div className='container'>
        <h1 className='page-title'>Pet {petType} Gallery</h1>

        <div className='pet-grid'>
          {petsLoaded === true 
            ? petsArr.map((pet) => (
              <Pet key={pet[0]} petType={petType} petInfo={pet} openModal={this.openModal} />
            ))
            : null 
          }
        </div>

        <Modal show={this.state.showModal} closeModal={this.closeModal}>
          <img src={this.state.modalImgURL} />
        </Modal>

      </div>
    );
  }
}

//App only cares about petIds portion of store
function mapStateToProps({cats, dogs}) {
  return {
    loading: cats === null || dogs === null,
    cats,
    dogs,
  }
}

// connect App to store via mapStateToProps which provides only catIds accessible by this.props
export default connect(mapStateToProps)(App);