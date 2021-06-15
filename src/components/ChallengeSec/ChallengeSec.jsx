import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSec.css";

const ChallengeSec = ({
    selectedParagraph,
    words,
    charecters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain,
}) => {
    // console.log("From challenge section", props.selectedParagraph);
    return (
        <div className="challenge-sec-container">
            <h1 data-aos="fade-down" className="challenge-sec-header">
                Take a speed Test down
            </h1>
            <TestContainer
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                words={words}
                charecters={charecters}
                wpm={wpm}
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
            />
        </div>
    );
};

export default ChallengeSec;
