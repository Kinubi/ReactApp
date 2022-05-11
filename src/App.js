import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };
    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }

    handleDelete = (counterId) => {
        console.log("Trying to Delete");
        this.setState({
            counters: this.state.counters.filter((c) => c.id !== counterId),
        });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        //counters[counters.findIndex((c) => c.id === counter.id)].value++;
        counters[counters.indexOf(counter)].value++;
        this.setState(counters);
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        console.log(counters)
        this.setState(counters);
    };
}

export default App;
