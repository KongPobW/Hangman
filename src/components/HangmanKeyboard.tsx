const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

type HangmanKeyboardProps = {
    addGuessLetter: (letter: string) => void,
    activeLetters: string[],
    disabled?: boolean,
    inactiveLetters: string[]
}

function HangmanKeyboard({ addGuessLetter, activeLetters, disabled = false, inactiveLetters }: HangmanKeyboardProps) {
    return (
        <div className="grid gap-[0.5rem]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))" }}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        onClick={() => addGuessLetter(key)}
                        className={`btn w-full border-[3px] border-black aspect-w-1 aspect-h-1 text-[2.5rem] uppercase py-2 px-2 font-bold cursor-pointer ${isActive ? "bg-blue-500 text-white" : ""} ${isInactive ? "opacity-30" : ""}`}
                        key={key}
                        disabled={isActive || isInactive || disabled}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    );
}

export default HangmanKeyboard;
