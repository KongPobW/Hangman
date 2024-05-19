import { useEffect, useState } from "react";
import words from "../word-list.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import HangmanKeyboard from "./HangmanKeyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {

  const [wordGuess, setWordGuess] = useState(getWord);
  const [guessLetters, setGuessLetters] = useState<string[]>([]);

  const incorrectLetters = guessLetters.filter(letter => !wordGuess.includes(letter));
  const correctLetters = guessLetters.filter(letter => wordGuess.includes(letter));

  const isLose = incorrectLetters.length >= 6;
  const isWin = wordGuess.split("").every(letter => guessLetters.includes(letter));

  const addGuessLetter = (letter: string) => {
    if (guessLetters.includes(letter) || isLose || isWin) return;

    setGuessLetters(currentLetters => [...currentLetters, letter]);
  };

  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };

  }, [guessLetters]);

  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        window.location.reload();
      }
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };

  }, []);

  return (
    <div className="max-w-[800px] flex flex-col gap-8 mx-auto items-center my-5">
      <div className="text-center text-[2rem]">
        {isWin && (
          <div className="text-green-600 font-bold">Win!</div>
        )}
        {isLose && (
          <div className="text-red-600 font-bold">Lose!</div>
        )}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessLetters={guessLetters} wordGuess={wordGuess} display={isLose} />
      <div className="self-stretch">
        <HangmanKeyboard
          disabled={isWin || isLose}
          activeLetters={correctLetters}
          inactiveLetters={incorrectLetters}
          addGuessLetter={addGuessLetter}
        />
      </div>
    </div>
  );
}

export default App;
