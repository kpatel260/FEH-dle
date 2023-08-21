import { useEffect, useState } from "react";
import AnswersHeader from "./AnswersHeader";
import Guess from "./Guess";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface unit {
  correctAns: String;
}
const inputs = ["Claude", "Dimitri", "Edelgard"];

function Answers(props: unit) {
  const [guesses, setGuesses] = useState<string[][]>([]);

  function addGuess(value: string | null) {
    if (value != null) {
      const api = "http://localhost:5000/";
      let url = api + value;
      let newGuess: string[] = [];
      let apiresponse = fetch(url)
        .then((response) => response.json())
        .then((data) => {
          newGuess = [
            data.Gender,
            data.Group,
            data.Home,
            data.Movement,
            data.Weapon,
            data.Crest,
          ];
          setGuesses([...guesses, newGuess]);
        });
    }
  }

  const [answer, setanswer] = useState(["placeholder"]);
  const [answerName, setAnswerName] = useState("Claude");

  useEffect(() => {
    let url = "http://localhost:5000/" + props.correctAns;
    fetch(url).then((res) =>
      res.json().then((answer) => {
        setanswer([
          answer.Gender,
          answer.Group,
          answer.Home,
          answer.Movement,
          answer.Weapon,
          answer.Crest,
        ]);
      })
    );
  }, []);

  const updateAnswerName = () => {
    console.log("Answer Changed");
    setAnswerName("Dimitri");
  };

  const [correct, setCorrect] = useState<boolean>(false);

  const updateCorrect = (correct: boolean) => {
    setCorrect(correct);
  };

  return (
    <>
      {correct ? <h1>Correct Answer!</h1> : null}
      <div className="input-box">
        <div className="search-box">
          {!correct ? (
            <Autocomplete
              disablePortal
              options={inputs}
              fullWidth={true}
              size="small"
              renderInput={(params) => <TextField {...params} />}
              onChange={(event, value) => addGuess(value)}
            />
          ) : (
            <Autocomplete
              disablePortal
              disabled
              options={inputs}
              fullWidth={true}
              size="small"
              renderInput={(params) => <TextField {...params} />}
              onChange={(event, value) => addGuess(value)}
            />
          )}
        </div>
      </div>
      <div className="answers">
        <AnswersHeader />
        {guesses.length === 0
          ? null
          : guesses.map((guess) => (
              <Guess
                data={guess}
                answer={answer}
                updateCorrect={updateCorrect}
              ></Guess>
            ))}
      </div>
    </>
  );
}

export default Answers;
