import React,{ PropTypes } from "react";

class App extends React.Component {
    render(){
        return (
            <div>Dana is the Queen! {this.props.myProp}</div>
        );
    }
}

App.propTypes = {
    myProp : PropTypes.number.isRequired
}
export default App;