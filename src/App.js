import React, { Component } from 'react';
import './App.css';

// Set some functions
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

function ActionRide(props) {
  return(
      <button onClick={props.onClick} className="btn btn-primary">
        Ride Your Pony
      </button>
  );
}

function ActionFeed(props) {
  return(
      <button onClick={props.onClick} className="btn btn-primary">
        Feed Your Pony
      </button>
  );
}

function ActionOptions(props) {
  return(
      <button onClick={props.onClick} className="btn btn-primary">
        Back To Options
      </button>
  );
}


// RIDE YOUR PONY
class RideHorse extends Component {
  render() {
    return(
        <div align="center" class="jumbotron">
          <h3>Lets take your pony for a ride!</h3>
          Neigh
        </div>
    );
  }
}

// FEED YOUR PONY
class FeedHorse extends Component {
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
    );
  }
}

// Select what action you want to take - feed your pony, or ride your pony!
class Horsify extends Component {
  constructor (props) {
    super(props);
    this.state = {
      action: false
    };
  }

  handleRideButton() {
    this.setState({action: "Ride"});
  }

  handleFeedButton() {
    this.setState({action: "Feed"});
  }

  handleBackButton() {
    this.setState({action: false});
  }

  render() {

    var buttonRide = <ActionRide onClick={() => this.handleRideButton()} />;
    var buttonFeed = <ActionFeed onClick={() => this.handleFeedButton()} />;
    var buttonBack = <ActionOptions onClick={() => this.handleBackButton()} />;
    if (this.state.action === false) {
      return(
          <div align="center" className="jumbotron">
            <h3>What do you want to do with your pony today?</h3>
            {buttonRide}&nbsp;&nbsp;
            {buttonFeed}
          </div>
      );
    }

    if (this.state.action === "Ride") {
      return (
          <div align="center">
            <RideHorse/><br/><br/>
            {buttonBack}
          </div>
      );
    }

    if (this.state.action === "Feed") {
      return (
          <div align="center">
            <FeedHorse/><br/><br/>
            {buttonBack}
          </div>
      );
    }
  }
}

export default Horsify;