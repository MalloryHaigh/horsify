import React, { Component } from 'react';
import './App.css';

function FeedButton(props) {
  return (
      <button onClick={props.onClick} className="btn btn-primary">
        Your pony is HUNGRY! Feed it!
      </button>
  );
}

function MoreFeed(props) {
  return (
      <button onClick={props.onClick} className="btn btn-warning">
        Your pony already ate, but you can feed it MORE!
      </button>
  );
}

function SuperFull(props) {
  return (
      <button onClick={props.onClick} className="btn btn-danger">
        Your pony is absolutely STUFFED! Click here to give it a rest.
      </button>
  );
}

class ThisHorse extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hungry: true
    };
  }

  handleHungryPony() {
    this.setState({hungry: false});
  }

  handleNotHungry() {
    this.setState({hungry: "100"});
  }

  handleSuperStuffed() {
    this.setState({hungry: true});
  }

  render() {
    let button;
    let horseImage;

    if (this.state.hungry === true) {
      button = <FeedButton onClick={() => this.handleHungryPony()} />;
      horseImage = <img src='https://www.paulickreport.com/wp-content/uploads/2015/09/Skinny_horse.jpg' width='300px' alt='hungry'></img>;
    }
    if (this.state.hungry === false) {
     button = <MoreFeed onClick={() => this.handleNotHungry()} />;
      horseImage = <img src='http://www.kznbreeders.co.za/Images/Lot94EbonyKnight595x472.jpg' width='300px' alt='content'></img>;
    }
    if (this.state.hungry === "100") {
      button = <SuperFull onClick={() => this.handleSuperStuffed()} />;
      horseImage = <img src='https://www.meme-arsenal.com/memes/7b8bbaf925a0d10eb79748b1f4952d1d.jpg' width='300px' alt='fat'></img>;
    }

    return(
        <div align="center" class="jumbotron">
          <h3>How is your pony feeling?</h3>
          {button}<br/><br/>
          {horseImage}
        </div>
    )
  }
}

class Horsify extends Component {
  render() {
    return (
        <div>
          <nav class="navbar-dark bg-dark navpadding">
            <a className="navbar-brand" href="#"><strong>Hors</strong>ify</a>
          </nav>
          <br/><br/>
          <ThisHorse/>
        </div>
    );
  }
}

export default Horsify;