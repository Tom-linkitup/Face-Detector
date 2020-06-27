import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import SignIn from "./components/signin/SignIn"
import Register from "./components/register/Register"
import FaceRecognition from './components/facerecognition/FaceRecognition';


const particleOptions = {
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}

const initialState = {
  input: "",
    imageUrl: "",
    box: {},
    route: "signin",
    isSignedIn: false,
    user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
    }
}

class App extends Component {

  state = initialState

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifai = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      left_col: clarifai.left_col * width,
      top_row: clarifai.top_row * height,
      right_col: width - (clarifai.right_col * width),
      bottom_row: height - (clarifai.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box})
  }
  
  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    fetch("https://frozen-sierra-19157.herokuapp.com/imageurl", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if(response){
          fetch("https://frozen-sierra-19157.herokuapp.com/image", {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: this.state.user.id
          })
        })
        .then(res => res.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
      }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === "signout"){
      this.setState(initialState)
    }else if(route === "home"){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }


  render() {
    return (
      <div className="App">
      <Particles className="particles" 
      params={particleOptions}/>
      <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
      {this.state.route === "home" 
      ?
      <div>
      <Logo />
      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
      <ImageLinkForm 
      change={this.onInputChange}
      submit={this.onButtonSubmit}/>
      <FaceRecognition url={this.state.imageUrl} box={this.state.box}/>
      </div>
      : (
        this.state.route === "signin"
        ? <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
        : <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
      )
      
      }
    </div>
    );
  }
}

export default App;
