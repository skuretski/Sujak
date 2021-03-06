import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row">
                    <h1 className="jumbotron"><img src="http://i.imgur.com/DZCvEMA.png?1" className="img-responsive" id="jumbo-logo" alt="logo" /></h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="well">
                                <ul className="list-unstyled">
                                    <li><h2>Software Developer</h2></li>
                                    <li><h2>Learner</h2></li>
                                    <li><h2>Nurse</h2></li>
                                    <li><h2>Gamer</h2></li>
                                </ul><br />
                                <p>For a long time, I have managed two different blogs on WordPress and shared
                                    various projects on GitHub. SujakStack is my one-stop shop for all these things
                                    plus some new content like games, computer science topics, online course reviews, 
                                    and PC building! 
                                </p><br />
                                <p>I strongly believe in life-long learning to open the mind and explore the world. 
                                    I love to experience new things, whether it is in the realm of computer science or outside of it. 
                                    I want to share my journey of learning to pique interest, give guidance, and provide some laughs.  
                                </p>
                                <br />
                            </div>
                        </div> {/* <-- End col-md-6 --> */}
                        <div className="col-md-6">
                            <img src="http://i.imgur.com/fZjtZUKl.png?2" className="img-responsive img-rounded" alt="susie_bw" />
                        </div>
                    </div> {/* <-- End row --> */}
                </div> {/* <!-- END Page content --> */}
            </div> 
        );
    }
}

export default Home;
