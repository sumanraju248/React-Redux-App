import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {

    render() {
        if (!this.props.user) {
            return (
                <h2>Please Select a User</h2>
            );
        }
        return (
            <div>
                <h2> User Name:  {this.props.user.name}</h2>
                <h3>Age: {this.props.user.age} </h3>
                <p>{this.props.user.description}</p>

            </div>

            );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetails);