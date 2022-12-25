import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Divider, Paper, Stack, Typography } from '@mui/material';

export default function AboutIhnnDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                color="inherit"
                onClick={handleClickOpen}
                startIcon={<InfoIcon />}
            >
                INFO
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>What is IHNN: BucketList Edition?</DialogTitle>
                <Divider />
                
                <Box
                    component="img"
                    /*                         sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }} */
                    alt="IHNN Cover"
                    src="images/ihnn-cover.png"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                />
                

                <Typography 
                align="justify" sx={{ ml: 3, mr: 3, mt: 1, mb: 1 }}
                color="inherit"
                >
                    IHNN steht für <i>Ich habe noch nie</i> und basiert auf dem
                    belieben Trinkspiel mit identischen namen. In diesem Spiel
                    wird der Gruppe bezüglich einer beliebigen Aktivität eine
                    Frage gestellt. Unsere Version des Spiels bezieht sich auf
                    Dinge die man auf eine <i>Bucketliste</i> schreiben würde, daher
                    muss die Person mit der meisten Erfahrung in diesem Gebiet,
                    im gegensatz zum namensgebenden Trinkspiel, nur davon
                    erzählen anstatt einen <i>Shot</i> zu nehmen. Da es sich bei
                    diesem Projekt um eine Studienleistung handelt, haben wir
                    natürlich, vernünftig wie wir sind, diese Spielregel
                    angepasst.
                </Typography>

                <DialogActions sx={{ mr: 2 }}>
                    <Button
                        variant="outlined"
                        color="inherit"
                        onClick={() =>
                            window.open(
                                'https://github.com/se-ws22-ihnn/ihnn',
                                '_blank',
                            )
                        }
                    >
                        zum GitHub Repo
                    </Button>
                    <Button 
                    variant="outlined" onClick={handleClose}
                    color="inherit"
                    >
                        verstanden
                    </Button>
                </DialogActions>

                {/* Handler einfügen für das Prüfen der Eingabe und Übertragen der Daten an die Datenbank/Mongo */}
            </Dialog>
        </>
    );
}
