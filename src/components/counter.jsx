import React, { Component } from "react";

class Counter extends Component {
    

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }


    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }

}

export default Counter;
