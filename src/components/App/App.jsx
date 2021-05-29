import React from "react";
import Landing from "../Landing/Landing";
import "./App.css";
import Nav from "../Nav/Nav";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Nav section */}
        <Nav />
        {/* Landing Page */}
        <Landing />
        {/* challenge sectin */}

        {/* Footer */}
      </div>
    );
  }
}
export default App;
