import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)" value={this.props.defaultValue} />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER"
              onKeyPress={(ev) => this.props.postMessage(ev.target.value, ev)} />
      </footer>

    );
  }
}
export default ChatBar;


// someFunction = () => {

// }

// <input onChange={someFunction} />
    // this.props.someFunc(ÿ