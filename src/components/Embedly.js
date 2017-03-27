'use strict';

import React, {Component} from 'react';

class Embedly extends Component {
  static apiKey = '91e3372e58ec4e4597ed351398d1026b';

  state = {
    data: null
  };

  componentWillMount() {
    fetch(`https://api.embedly.com/1/oembed?url=${this.props.url}&key=${Embedly.apiKey}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => this.setState({data}));
  }

  render() {
    if (!this.state.data) {
      return null;
    }

    const URL = new RegExp('((ftp|http|https):\/\/)?');

    return (
      <a href={this.state.data.url} target="_blank">
        <div className="chat-embedly-container">
          <div className="chat-emedly-img"><img src={this.state.data.thumbnail_url}/></div>
          <div>
            <div className="chat-embedly-title">{this.state.data.title}</div>
            <div className="chat-embedly-description">{this.state.data.description}</div>
            <div className="chat-embedly-url">{this.state.data.url}</div>
          </div>
        </div>
      </a>
    );
  }
}


Embedly.displayName = 'Embedly';
Embedly.propTypes = {
  url: React.PropTypes.string
};

export default Embedly;
