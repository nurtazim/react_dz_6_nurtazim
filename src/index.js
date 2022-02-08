import React from 'react';
import ReactDOM from 'react-dom';


class Counter extends React.Component {

    state = {
        count: 0
    }
    onInCreate = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count + 1
            }
        })
    }
    DeCreate = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count - 1
            }
        })
    }

    UNSAFE_componentWillMount() {
        console.log("WillMount new version")
    }

    componentWillMount() {
        console.log("WillMount")
    };

    componentDidMount() {
        console.log("DidMount")
    };

    componentWillUnmount() {
        console.log("WillUnmount")
    }
     UNSAFE_componentWillUpdate() {
        console.log("WillUpdate new version")
    }

    componentWilUpdate() {
        console.log("WilUpdate")
    }

    componentDidUpdate() {
        console.log("DidUpdate")
    }

    componentDidCatch() {
        console.log("Проверка на ошибки")
    }


    UNSAFE_componentWillReceiveProps() {
        console.log("WillReceiveProps")
    }

    componentWillReceiveProps() {
        console.log("WillReceiveProps")
    }


    render() {
        console.log("render")
        return (
            <div>
                <p>{this.state.count}</p>
                <input type="button" onClick={this.onInCreate} value="InCase"/>
                <input type="button" onClick={this.DeCreate} value="DeCreate"/>
            </div>
        )
    }


}

class App extends React.Component {

    state = {
        showCounter: true
    }

    onToggleCounter = () => {
        this.setState((oldState) => {
            return {
                showCounter: !oldState.showCounter
            }
        })
    }

    render() {
        const content = this.state.showCounter ? <Counter/> : null
        return (
            <>
                {content}
                <button onClick={this.onToggleCounter}> ToggleContent</button>
            </>

        )
    }
}

ReactDOM
    .render(
        <App/>,
        document
            .getElementById(
                'root'
            )
    )

