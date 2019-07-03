import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Modal from './components/Modal';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

class App extends Component {
  state = {
    petType: "cat",
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

  chooseCats = () => {
    this.setState((state) => ({
      ...state,
      petType: "cat",
    }));    
  }

  chooseDogs = () => {
    this.setState((state) => ({
      ...state,
      petType: "dog",
    }));    
  }


  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    /* eslint-disable jsx-a11y/href-no-hash */
    let { petType } = this.state;

    return (
      <div className='container'>
        <h1 className='page-title'>Pet {petType} Gallery</h1>
        <h3 className='pet-select'>choose gallery</h3>

        <Nav chooseCats={this.chooseCats} chooseDogs={this.chooseDogs} />

        <Gallery petType={petType} openModal={this.openModal} />

        <Modal show={this.state.showModal} closeModal={this.closeModal}>
          <img src={this.state.modalImgURL} alt={`Fullsize ` + petType + ` image`} />
        </Modal>

      </div>
    );
  }
}

// connect App to store
export default connect()(App);