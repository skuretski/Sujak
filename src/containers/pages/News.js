import React, { Component } from 'react';
import TwitterTimeline from '../Twitter/TwitterTimeline';

class News extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-8">
                        <div className="well">
                            <h1>Top News</h1>   
                                <h3>This site has officially launched!</h3>
                                <p>I'm very excited to announce that this site is slightly functional.
                                </p><br/>
                            <h1>This Stack</h1>
                                <p>Developers throw the word "stack" around. There are actually 
                                    different kinds of references to stack in the tech world!
                                </p><br/>
                            <div className="row">
                                <div className="col-sm-4" id="media-col">
                                    <div className="media-left">
                                        <img className="image-responsive" src="http://i.imgur.com/dPtQnjHm.png" alt="sujak_stack"/>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                </div>
                                <div className="col-sm-7">
                                    <h3 className="image-responsive">Last-In, First-Out Data Structure</h3>
                                    <p>
                                        This structure holds data like a cart line at a grocery store. A leaving shopper 
                                        puts the cart in the line, and another person comes along and takes 
                                        that same cart because it's the top-most. The very first cart of the 
                                        line will not see a shopper until all the other carts before it are taken. 
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4" id="media-col">
                                    <div className="media-left">
                                        <img className="image-responsive" src="http://i.imgur.com/DEDjvQYm.png" alt="net_prot"/>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                </div>
                                <div className="col-sm-7">
                                    <h3 className="media-heading">Network Protocol Stack</h3>
                                    <p>
                                    </p>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <p>
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
                        </div>
                    </div>
                    <div className="col-md-3">
                        <TwitterTimeline user="TheSushiQ" limit="4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;