import * as React from 'react';
import { Button, Typography } from '@mui/material';

export default function ShowQuestion() {
    return (
        <div>
			<h2>Ich habe noch nie ...</h2>
                <Typography>
                    IHNN steht für "Ich habe noch nie" und basiert auf dem
                    belieben Trinkspiel mit identischen namen. In diesem Spiel
                    wird der Gruppe bezüglich einer beliebigen Aktivität eine
                    Frage gestellt. Unsere Version des Spiels bezieht sich auf
                    Dinge die man auf eine "Bucketliste" schreiben würde, daher
                    muss die Person mit der meisten Erfahrung in diesem Gebiet,
                    im gegensatz zum namensgebenden Trinkspiel, nur davon
                    erzählen anstatt einen 'Shot' zu nehmen. Da es sich bei
                    diesem Projekt um eine Studienleistung handelt, haben wir
                    natürlich, vernünftig wie wir sind, diese Spielregel
                    angepasst.
                </Typography>
				<Button variant='contained' onClick={()=>{}}>Nächste Frage</Button>
        </div>
    );
}
