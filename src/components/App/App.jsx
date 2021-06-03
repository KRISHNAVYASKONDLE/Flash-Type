import React from "react";
import Landing from "../Landing/Landing";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ChallengeSec from "../ChallengeSec/ChallengeSec";

const TotalTIme = 60;

//const serviceurl = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {
    state = {
        selectedParagraph: "I am Krishnavyass",
        timerStarted: false,
        testInfo: [],
        timeRemaining: TotalTIme,
        words: 0,
        charecters: 0,
        wpm: 0,
    };

    componentDidMount() {
        //     fetch(serviceurl)
        //         .then((response) => response.text())
        //         .then((data) => {
        //             console.log(data);

        //             this.setState({ selectedParagraph: data });
        //         });

        const selectedParagraphArray = this.state.selectedParagraph.split("");
        const testInfo = selectedParagraphArray.map((selectedletter) => {
            return {
                testletter: selectedletter,
                status: "notAttempted",
            };
        });
        // console.log("splitted array-", selectedParagraphArray);
        this.setState({ testInfo: testInfo });
    }

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();
    };
    render() {
        return (
            <div className="app">
                {/* Nav section */}
                <Nav />

                {/* Landing Page */}
                <Landing />

                {/* challenge sectin */}
                <ChallengeSec
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    charecters={this.state.charecters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                />
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
export default App;
