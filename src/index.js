import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, err: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => this.setState({ lat: postion.coords.latitude }),
      (err) => this.setState({ err: err.message })
    );


  }

  renderContent() {
    if (this.state.lat && !this.state.err) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }
    if (!this.state.lat && this.state.err) {
      return <div>Error : {this.state.err}</div>;
    }
    return <Spinner massage="Please Accept Location Request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
