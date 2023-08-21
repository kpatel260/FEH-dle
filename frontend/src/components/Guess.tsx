import { useEffect, useState } from "react";
import GuessBox from "./GuessBox";

interface unit {
  data: Array<string>;
  answer: Array<string>;
  updateCorrect: Function;
}

let matchingAttributes = 0;

const renderBox = (userGuess: String, trueAns: String) => {
  if (userGuess === trueAns) {
    matchingAttributes = matchingAttributes + 1;
    return (
      <div className="guess-box-correct">
        <div className="guess-text">{userGuess}</div>
      </div>
    );
  } else {
    return (
      <div className="guess-box-incorrect">
        <div className="guess-text">{userGuess}</div>
      </div>
    );
  }
};

function Guess(props: unit) {
  return (
    <>
      <div className="guess">
        <div className="guess-box-correct">
          <div className="guess-text">TEST</div>
        </div>
        {renderBox(props.data[0], props.answer[0])}
        {renderBox(props.data[1], props.answer[1])}
        {renderBox(props.data[2], props.answer[2])}
        {renderBox(props.data[3], props.answer[3])}
        {renderBox(props.data[4], props.answer[4])}
        {renderBox(props.data[5], props.answer[5])}
        {renderBox(props.data[6], props.answer[6])}
        {matchingAttributes == 7
          ? props.updateCorrect(true)
          : props.updateCorrect(false)}
        {(matchingAttributes = 0)}
      </div>
    </>
  );
}

export default Guess;
