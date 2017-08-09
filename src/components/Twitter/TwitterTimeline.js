import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TwitterTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            initialized: false 
        };
    }
    componentDidMount() {
        if (this.state.initialized)
            return;
        else {
            if (typeof twttr === 'undefined'){
                const twittertimeline = ReactDOM.findDOMNode(this.refs.twittertimeline);
                const twitterscript = document.createElement('script');
                twitterscript.src = "//platform.twitter.com/widgets.js";
                twitterscript.async = true;
                twitterscript.id = 'twitter-wjs';
                twittertimeline.parentNode.appendChild(twitterscript);
            } else {
                twttr.widgets.load();
            }
            this.setState({ initialized: true });
        }
    }
    render() {
        const { user, limit } = this.props;
        return (   
            <div className="container-fluid">
                <div className="well">
                    <h2>Twitter Feed</h2>
                    <p>Follow Me @{user}</p>
                    <a className="twitter-follow-button"
                        href={`https://twitter.com/${user}`}
                    />
                </div> { /* <!-- End well --> */}
                <a 
                    ref="twittertimeline"
                    className="twitter-timeline" 
                    data-tweet-limit={limit}
                    data-theme="dark"
                    data-lang="en"
                    href={`https://twitter.com/${user}`}>
                    Tweets By {user}
                </a>
            </div>
        );
    }
}

export default TwitterTimeline;
