import React from "react";
import Landing from "../Landing/Landing";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ChallengeSec from "../ChallengeSec/ChallengeSec";
import { SAMPLE_PARAGRAPHS } from "../../data/sampledata"
const TotalTIme = 60;

//const serviceurl = "http://metaphorpsum.com/paragraphs/1/9";
const Defaultstate = {
    selectedParagraph: "fetchNewParagraphfallback",
    timerStarted: false,
    testInfo: [],
    timeRemaining: TotalTIme,
    words: 0,
    charecters: 0,
    wpm: 0,
}



class App extends React.Component {
    state = Defaultstate;

    fetchNewParagraphfallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedletter) => {
            return {
                testletter: selectedletter,
                status: "notAttempted",
            };
        });

        // console.log("splitted array-", selectedParagraphArray);
        this.setState({ ...Defaultstate, testInfo, selectedParagraph: data, });


    }

    // fetchNewParagraph = () => {
    //     fetch("http://metaphorpsum.com/paragraphs/1/9")
    //         .then((response) => response.text())
    //         .then((data) => {
    //             // Once the api results are here, break the selectedParagraph into test info
    //             const selectedParagraphArray = data.split("");
    //             const testInfo = selectedParagraphArray.map(
    //                 (selectedLetter) => {
    //                     return {
    //                         testLetter: selectedLetter,
    //                         status: "notAttempted",
    //                     };
    //                 }
    //             );

    //             // Update the testInfo in state
    //             this.setState({
    //                 ...Defaultstate,
    //                 selectedParagraph: data,
    //                 testInfo,
    //             });
    //         });
    // };


    componentDidMount() {
        this.fetchNewParagraphfallback();
    }

    startAgain = () => this.fetchNewParagraphfallback();



    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                const timeSpent = TotalTIme - this.state.timeRemaining;
                const wpm =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * TotalTIme
                        : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };


    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();


        const charecters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = charecters - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testletter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                charecters, words,
            });
            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({ charecters, words });
            return;
        }
        //make a copy of testinfo
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        //check for the correct typed letter
        const isCorrect = inputValue[index] === testInfo[index].testletter;


        //update the testinfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        this.setState({
            testInfo, words, charecters
        })
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
                    fetchNewParagraphfallback={this.state.fetchNewParagraphfallback}
                    words={this.state.words}
                    charecters={this.state.charecters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
export default App;
