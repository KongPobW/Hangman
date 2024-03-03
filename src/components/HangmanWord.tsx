type HangmanWordProps = {
    wordGuess: string,
    guessLetters: string[],
    display?: boolean
}

function HangmanWord({ wordGuess, guessLetters, display = false }: HangmanWordProps) {
    return (
        <div className="flex gap-[0.25rem] text-6xl font-bold uppercase font-mono">
            {wordGuess.split("").map((letter, index) => (
                <div className="border-b-[0.1em] border-black" key={index}>
                    <span
                        className={`${guessLetters.includes(letter) || display ? "visible" : "invisible"} ${!guessLetters.includes(letter) && display ? "text-red-600" : "text-black"}`}
                    >
                        {letter}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default HangmanWord;
