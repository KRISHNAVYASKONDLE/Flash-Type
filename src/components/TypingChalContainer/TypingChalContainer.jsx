import React from "react";
import ChalengeDetCard from "../ChalengeDetCard/ChalengeDetCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge.jsx";
import "./TypingChalContainer.css";

const TypingChalContainer = ({
    selectedParagraph,
    words,
    charecters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,

    onInputChange,
}) => {
    console.log("inside typong chale-", testInfo);
    return (

        <div className="typing-challenge-container">
            {/* details */}
            <div className="details-container">
                {/* speed */}
                <ChalengeDetCard cardName="wpm" cardValue={wpm} />
                {/* words typed */}
                <ChalengeDetCard cardName="words" cardValue={words} />
                {/* char typed */}
                <ChalengeDetCard cardName="characters" cardValue={charecters} />
            </div>
            {/* THe Real Challenge */}
            <div className="typewriter-container">
                <TypingChallenge
                    onInputChange={onInputChange}
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}

                />
            </div>
        </div>
    );
};

export default TypingChalContainer;
