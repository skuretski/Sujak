import React, { Component } from 'react';

class News extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        twttr.widgets.load(
            document.getElementById("twitterDiv")
        );
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" id="twitterDiv">
                        <h3>Twitter Feed</h3>
                        <p>Follow me @TheSushiQ</p>
                        <a className="twitter-follow-button"
                            href="https://twitter.com/TheSushiQ"/>
                        <a className="twitter-timeline" data-tweet-limit="5" href="https://twitter.com/TheSushiQ">Tweets by TheSushiQ</a> 
                    </div>
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}

export default News;