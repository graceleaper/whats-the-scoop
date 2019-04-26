import React from "react";
import "./App.css";

export default class RevealCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="reveal-card">
                {/*if the props passed contains mainstream name in url, 
                reveal THAT */}
                {/* {this.state.revealCard ? <RevealCard url={this.props.url}/> : null} */}
                {this.props.url.includes("nytimes") ? <p className="real_news_reveal">Read more of this article at {this.props.url}</p> : <p className="clickbait_reveal">This is from a clickbait source at {this.props.url}</p>}
                {/* <p>This article is from __, a mainstream source.</p>
                <p>You can read more here:</p>
                <p>{this.props.url}</p> */}
            </div>
        )
    }
}