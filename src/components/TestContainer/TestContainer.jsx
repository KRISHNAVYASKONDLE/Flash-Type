import React from "react";
import Tryagain from "../Tryagain/Tryagain";
import TypingChalContainer from "../TypingChalContainer/TypingChalContainer";
import "./TestContainer.css";

const TestContainer = ({ selectedParagraph, words, charecters, wpm, timeRemaining, timerStarted, testInfo, onInputChange, startAgain,
}) => {
    //   const timeRemaining = ;

    return (
        <div className="test-container">
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChalContainer
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
            ) : (
                <div className="try-again-cont">
                    <Tryagain words={words} charecters={charecters} wpm={wpm} startAgain={startAgain} />
                </div>
            )}
        </div>
    );
};

export default TestContainer;
