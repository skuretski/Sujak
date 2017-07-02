import React, { Component } from 'react';
import NavBar from '../../components/Navigation/NavBar';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid">
                <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                        <li data-target="#homeCarousel" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="http://i.imgur.com/N9AlfPA.jpg" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Love Always.</h3>
                                <p>"Differences of habit and language are nothing at all if our aims are identical and our hearts are open."</p>
                                <p>-J.K. Rowling, "Harry Potter and the Goblet of Fire"</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="http://i.imgur.com/o1EUakp.jpg?1" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Laguna Beach, California</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src="http://i.imgur.com/hhXLQyd.jpg?1" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Anaheim, California</h3>
                                <p>BlizzCon 2013</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="http://i.imgur.com/vhWQsR7.jpg?1" alt="Fourth slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>My mITX</h3>
                                <p>My current PC built in November 2013.</p>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> {/* <!-- END CAROUSEL --> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <h1>Welcome to SujakStack</h1>
                                <p>For a long time, I have managed two different blogs on WordPress and shared
                                    various projects on GitHub. SujakStack is my one-stop shop for all these things
                                    plus some new content!  
                                </p>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div> {/* <!-- END Page content --> */}
            </div>
        )
    }
}

export default Home;