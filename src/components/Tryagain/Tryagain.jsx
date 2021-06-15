import React from "react";
import "./Tryagain.css";

const Tryagain = ({ words, charecters, wpm, startAgain }) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>charecters:</b>
                    {charecters}
                </p>

                <p>
                    <b>words:</b>
                    {words}
                </p>

                <p>
                    <b>speed:</b>
                    {wpm}
                </p>
            </div>
            <div>
                <button onClick={() => startAgain()} className="end-buttons start-again">Re-try</button>

                <button
                    className="end-buttons Share"
                    onClick={() => {
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=https://github.com/krishnavyaskondle",
                            "facebook-share-dialog",
                            "width=800,height=600"
                        );
                    }}
                >
                    share
                </button>
                <button
                    className="end-buttons tweet"
                    onClick={() => {
                        window.open(
                            "https://twitter.com/intent/tweet?text=https://github.com/KRISHNAVYASKONDLE",
                            "twitter-share-dialog",
                            "width=800,height=600"
                        );
                    }}
                >
                    tweet
                </button>
            </div>
        </div>
    );
};
export default Tryagain;
