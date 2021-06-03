import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetterInfo }) => {
    const { status } = individualLetterInfo;

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status];

    return (
        <span className={`${statusClass}`}>
            {individualLetterInfo.testletter}
        </span>
    );
};
export default TestLetter;
