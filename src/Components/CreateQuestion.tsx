import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function CreateQuestion() {
  return (
    <Card sx={{ maxWidth: 750 }}>
          
    <CardActionArea>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
                Reiche deine eigene Frage ein:
        </Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </CardContent>
    </CardActionArea>
  </Card>


  );
}