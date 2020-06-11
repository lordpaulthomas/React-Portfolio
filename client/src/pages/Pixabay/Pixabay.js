import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './../../components/NavBar'
import Loader from 'react-loader-spinner';
class Pixabay extends Component {
  state = {
    results: [],
    search: '',
    message: 'No Pics Found'
  }

  // componentDidMount = async () => {
  //   const apiKey = '13393320-86e6681b6063b5d9a9b95c0f2';
  //   try {
  //     const pic = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`);
  //     console.log(pic.data.hits[0].largeImageURL)
  //     this.setState({
  //       results: pic.data.hits
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   };
  // };
  handleSearchChange = event => {
    const { value } = event.target;
    this.setState({
      search: value
    });
  };

  submit = async event => {
    event.preventDefault();
    const apiKey = '13393320-86e6681b6063b5d9a9b95c0f2';
    try {
      const pic = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${this.state.search}&image_type=photo`);
      if (pic.data.hits === 0) {
        return (
          <div>
            <Loader
              type="Oval"
              color="purple"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        )
      } else {
        this.setState({
          results: pic.data.hits
        })
      }
    } catch (e) {
      console.log(e);
    };
  };



  render() {
    return (
      <div className="text-center">
        <NavBar />
        <h1 className="text-center">Search for Pictures</h1>
        <div className="text-center">
          
          <input style={{ width: '60vw', height: '2rem' }} type='search'
            onChange={this.handleSearchChange}
            id="search-term"></input>
        </div>
        <button onClick={this.submit} >Search</button>
        {
          this.state.results.map(pic => {
            return (
              <div className="card border-dark" style={{ margin: 'auto', width: "100vw", height: "100vh" }} key={pic.id}>
                <h3 >{pic.tags}</h3>
                <a href={pic.largeImageURL} target="__blank">{pic.largeImageURL}</a>
                <img src={pic.largeImageURL} alt="" />
              </div>
            )
          })
        }
      </div>

    )
  };
};
export default Pixabay;