const HEAD = (
    <div className="h-[50px] w-[50px] rounded-full border-[10px] border-black absolute top-[50px] right-[-20px]" />
);

const BODY = (
    <div className="h-[100px] w-[10px] bg-black absolute top-[100px] right-0" />
);

const RIGHT_ARM = (
    <div className="h-[10px] w-[100px] bg-black absolute top-[150px] right-[-100px] transform rotate-[-30deg] origin-bottom-left" />
);

const LEFT_ARM = (
    <div className="h-[10px] w-[100px] bg-black absolute top-[150px] right-[10px] transform rotate-[30deg] origin-bottom-right" />
);

const RIGHT_LEG = (
    <div className="h-[10px] w-[100px] bg-black absolute top-[190px] right-[-90px] transform rotate-[60deg] origin-bottom-left" />
);

const LEFT_LEG = (
    <div className="h-[10px] w-[100px] bg-black absolute top-[190px] right-0 transform rotate-[-60deg] origin-bottom-right" />
);

type HangmanDrawingProps = {
    numberOfGuesses: number
}

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
    return (
        <div className="relative">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
            <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
            <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
            <div className="h-[10px] w-[250px] bg-black" />
        </div>
    );
}

export default HangmanDrawing;
