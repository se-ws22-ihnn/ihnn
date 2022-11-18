    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { CardActionArea } from '@mui/material';
    
    export default function ThisIsIHNN() {
      return (
        <Card sx={{ maxWidth: 750 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image="images/ihnn-cover.avif"
              alt="IHNN Cover"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What is IHNN: BucketList Edition?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                IHNN steht für Ich habe noch nicht und basiert auf einem belieben Trinkspiel. 
                Bei diesem wird der Gruppe in der man sich befindet eine Frage gestellt nach einer Sache die die Personen noch nicht getan haben. Hat eine Person diese Sache bzw. Frage noch nie getan muss diese Person einen Shot trinken.
                
                Da es sich bei diesem Projekt um eine Studienleistung handelt, haben wir uns gedacht, das Spielprinzip anzupassen.
                Ziel ist Fragen zu stellen die man auf seiner BucketListe haben könnte. Wie z.b 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }