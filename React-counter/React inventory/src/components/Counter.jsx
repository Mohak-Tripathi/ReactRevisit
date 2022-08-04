import React from "react";
import { useState } from "react";



function App() {

    const [match, setMatch] = useState({

        Score: 76,
        Wicket: 2,
        Ball: 50

    })


    const [win, setWin] = useState(false)





    function handlechange(item, value) {

        if (match.Score > 100) {
            setWin(true);
            return
        }


        if (item === "one") {

            setMatch({ ...match, Score: match.Score + value })
        }
        else if (item === "four") {
            setMatch({ ...match, Score: match.Score + value })
        }
        else if (item === "six") {
            setMatch({ ...match, Score: match.Score + value })
        }
        else if (item === "ball") {
            setMatch({ ...match, Ball: match.Ball + value })

        }

    }

    function wicketFn(item, value) {
        if (match.Score > 100) {
            setWin(true);
            return
        }

        if (item = "wicket") {
            if (match.Wicket >= 12) {
                return
            }
            setMatch({ ...match, Wicket: match.Wicket + value })
        }
    }



    return (
        <div className="App">
            <h3>India:</h3>
            <div className="banner">
                <div>
                    Score:{" "}
                    <h1 className="scoreCount">
                        {
                            match.Score
                        }
                    </h1>
                </div>


                <div>
                    Wicket:{" "}
                    <h1 className="wicketCount">
                        {
                            match.Wicket
                        }
                    </h1>
                </div>

                <div>
                    Over:{" "}
                    <h1 className="overCount">
                        {
                            // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                            // if 1 more ball is thrown then over is now 5.0
                            // you have to write logic to form this string from current ball number.
                            `${Math.floor((match.Ball) / 6)}.${match.Ball % 6}`
                        }
                    </h1>
                </div>
            </div>

            <div className="addScore">
                Add Score
                {/* these buttons should add the respective amount in the score */}
                <button className="addScore1" onClick={() => {
                    handlechange("one", 1)
                }}>Add 1</button>

                <button onClick={() => {
                    handlechange("four", 4)
                }} className="addScore4">Add 4</button>

                <button onClick={() => {
                    handlechange("six", 6)
                }} className="addScore6">Add 6</button>
            </div>

            <div className="addWicket" onClick={() => {
                wicketFn("wicket", 1)
            }}>
                Add Wicket
                {/* Increase the count of wicket */}
                <button>Add 1 wicket</button>
            </div>

            <div className="addBall" onClick={() => {
                handlechange("ball", 1)
            }}>
                Add ball
                {/* Increase the total number of balls thrown here. */}
                <button>Add 1</button>
            </div>

            {win && <h1> India won </h1>}

            {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
        </div>
    );
}

export default App;