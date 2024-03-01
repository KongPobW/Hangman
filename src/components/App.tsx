import { useState } from "react";
import words from "../word-list.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import HangmanKeyboard from "./HangmanKeyboard";

function App() {

  const [wordGuess, setWordGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  return (
    <div className="max-w-[800px] flex flex-col gap-8 mx-auto items-center">
      <div className="text-center text-[2rem]">Win</div>
      <HangmanDrawing numberOfGuesses={6} />
      <HangmanWord />
      <HangmanKeyboard />
    </div>
  );
}

export default App;
