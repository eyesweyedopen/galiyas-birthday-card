import React, { Component } from 'react'
import First from './First.js'
import Second from './Second.js'
import Third from './Third.js'
import Fourth from './Fourth.js'

class Card extends Component {
    state = {
        button: "Click here to begin!",
        count: 0,
        curContent: '',
        cards: [
            `First`,
            `Second`,
            `Third`,
            `Fourth`,
            'Fifth'
        ]
    }
    startParty() {
        this.setState({button: "Next"})
        document.querySelector('.happy-birthday').classList.add('clicked')
        if (this.state.count > 5) {
            this.setState({count: 0, curContent: ''})
            document.querySelector('.happy-birthday').classList.remove('clicked');
            document.querySelector('.button').classList.add('clicked');
        } else {
            this.setState((prevState) => { return {count: prevState.count + 1} })
            const { count } = this.state;
            this.setState((prevState) => { return {curContent: prevState.cards[count]} })
        }

    }

    setText() {
        switch (this.state.count) {
            case 1: 
                return (<First/>);
            case 2:
                return (<Second/>);
            case 3:
                return (<Third/>);
            case 4:
                return (<Fourth/>);
            default:
                return (<div class="card">Happy 33rd Birthday!</div>)
        }
    }

    render() {
        return (
            <div className="App-header">
                <h1 className="happy-birthday">{this.props.content}</h1>
                <div className="button" onClick={this.startParty.bind(this)}>
                    <p>{this.state.button}</p>
                </div>
                {this.state.curContent && (
                    <div>{this.setText()}</div>
                )}
            </div>
        )
    }
}

export default Card