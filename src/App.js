import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Pet from './components/Pet';
import Modal from './components/Modal';

class App extends Component {

  // state = {
  //   catsArr: [],
  //   //dogsArr: [],
  //   catsLoaded: false,
  //   showModal: false,
  //   selectedIndex: null
  // }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    /* eslint-disable jsx-a11y/href-no-hash */
    let catsArr = [];
    let catsLoaded = false;
    //let dogsArr = [];
    //let dogsLoaded = false;

    let { loading, cats, dogs } = this.props;

    // CATS
    // put all cats info into an array for easier mapping
    if (!loading) {
      Object.entries(cats).forEach(cat => {
        catsArr.push(cat);
      })
      catsLoaded = true;
    }

    // if (!loading) {
    //   let tempArr = [];
    //   Object.entries(cats).forEach(cat => {
    //     tempArr.push(cat);
    //   })

    //   this.setState({
    //     catsArr: tempArr,
    //     catsLoaded: true,
    //     showModal: false,
    //     selectedIndex: null
    //   })
      
    // }


    // DOGS
    // put all dogs info into an array
    // if (!loading) {
    //   Object.entries(dogs).forEach(dog => {
    //     dogsArr.push(dog);
    //   })
    //   dogsLoaded = true;
    // }

    return (
      <div className='container'>
        <h1 className='page-title'>Pet Gallery</h1>
        <div className='pet-grid'>
          {catsLoaded === true 
            ? catsArr.map((cat) => (
              <Pet key={cat[0]} petType="cat" petInfo={cat} />
            ))
            : null 
          }
        </div>
        {/* <Modal show={this.state.show} handleClose={this.hideModal}>
          <img src={} alt={} />
        </Modal> */}

        {/* <div className='pet-grid'>
          {dogsLoaded === true 
            ? dogsArr.map((dog) => (
              <Pet petType="dog" petInfo={dog} />
            ))
            : null 
          }
        </div> */}


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