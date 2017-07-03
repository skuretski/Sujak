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
                        <h2>Twitter Feed</h2>
                        <p>Follow me @TheSushiQ</p>
                        <a className="twitter-follow-button"
                            href="https://twitter.com/TheSushiQ"/>
                        <a className="twitter-timeline" data-tweet-limit="7" href="https://twitter.com/TheSushiQ">Tweets by TheSushiQ</a> 
                    </div>
                    <div className="col-md-6">
                        <h1>Top News</h1>
                            <p>
                                <h3>This site has officially launched!</h3> After graduation in June 2017, I got to work on this site to 
                                compile everything into one.
                            </p><br/>
                        <h1>This Stack</h1>
                            <p>
                                Developers throw the word "stack" around. There are actually different kinds of references to stack in the tech world!
                                <ul>
                                    <li>Last-In, First-Out Data Structure<img src="http://i.imgur.com/0jAmSgum.png" alt="ds_stack" className="rounded float-left"/></li>
                                    <li>Network Protocol Stack</li>
                                    <li>Layers of Technology to Build an Application</li>
                                </ul> 
                                For this site name, I refer to stack in the latter form: the layers of technologies used to build something.
                                This could be a back-end server which communicates with a database and serves users web pages to view, commonly
                                known as client-server architecture.  
                                I have used <a href="https://facebook.github.io/react/" target="_blank">React</a> for most of the 
                                front-end work, along with <a href="http://getbootstrap.com/" target="_blank">Bootstrap v3.3.7</a> for styling.
                                All of this is "bundled" up with <a href="https://webpack.github.io/" target="_blank">Webpack</a> and hosted with 
                                <a href="https://www.heroku.com" target="_blank"> Heroku.</a> I have been
                                an AWS user for almost a year, but my free tier is expiring, so I switched to Heroku for this application. 
                                I'm still a fan of AWS since it's nice to have my own infrastructures in the cloud, like a Linux box.  
                            </p>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}

export default News;