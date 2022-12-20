import {useState} from "react";

export const GamePlay = (props) => {
    const [questionNr, setQuestionNr] = useState(0);

    return <>
        <Questions questionNr={questionNr}/>
        <VoteHandler key={questionNr} players={props.players}/>
        <Button onClick={() => setQuestionNr(questionNr + 1)}>Nächste Frage</Button>
    </>
}