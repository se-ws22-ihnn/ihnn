import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {
    Avatar,
    Box,
    Button,
    IconButton,
    MenuItem,
    TextField,
} from '@mui/material';
// Table Imports
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
import Select from '@mui/material/Select';
import { Player } from '../types/playerType';
// icon imports
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import { GroupContext } from '../Context/GroupContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// own palette of colors available for the avatar
const avatarcolors = {
    pink: '#e91e63',
    purple: '#673ab7',
    blue: '#2196f3',
    teal: '#009688',
    green: '#4caf50',
    lime: '#cddc39',
    amber: '#ff9800',
};

const Block = styled(Paper)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(27, 33, 40, 0.8)'
            : 'rgba(145, 115, 94, 1)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));

/* welche daten gehören zu einem Member? */

/* variable um dort alle gruppendaten einzulagern */

export function ListGroupMember() {
    const { group, setGroup } = React.useContext(GroupContext);

    const removePlayerFromGroup = (selectedPlayer: Player) => {
        // get the index of the PlayerObject we like to delete
        const index = group.indexOf(selectedPlayer);

        // make a Copy of Group by array deconstructing
        let copyOfGroup = [...group];

        // remove the PlayerObject from the copyGroup
        copyOfGroup.splice(index, 1);

        // new initialising of the Group by all the values from the copyGroup
        setGroup([...copyOfGroup]);
    };

    if (group.length === 0) {
        return (
            <>
                <Block elevation={10}>
                    <h3>Aktuelle Spieler</h3>
                    <Block sx={{ bgcolor: '#bfb59e' }}>
                        <p>Keine Spieler vorhanden</p>
                    </Block>
                </Block>
            </>
        );
    }

    return (
        <>
            <Block elevation={10}>
                <h3>Aktuelle Spieler</h3>
                <TableContainer component={Paper}>
                    <Table
                        sx={{
                            minWidth: 250,
                        }}
                        aria-label="Spielerliste"
                    >
                        <TableHead></TableHead>
                        <TableBody>
                            {/* Table bauen pro Gruppenmitglied */}
                            {group.map((currentPlayer) => (
                                <TableRow key={currentPlayer.playerId}>
                                    <TableCell align="left">
                                        <Avatar
                                            sx={{
                                                bgcolor: currentPlayer.color,
                                                color: '#ffffff',
                                            }}
                                        >
                                            {currentPlayer.shortname}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell align="left">
                                        {currentPlayer.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            color="error"
                                            aria-label="Eintrag entfernen"
                                            component="label"
                                            onClick={() =>
                                                removePlayerFromGroup(
                                                    currentPlayer,
                                                )
                                            }
                                            /* onClick={() => console.log(currentPlayer)} */
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Block>
        </>
    );
}

export function AddGroupMember() {
    // group per useContext damit group global erreichbar und manipulibar ist
    const { group, setGroup } = React.useContext(GroupContext);

    // useState for playerValues Object
    /*     const [selectedColor, setSelectedColor] = React.useState(avatarcolors.blue);
    const [playername, setPlayername] = React.useState(''); */

    const formik = useFormik<Player>({
        initialValues: {
            playerId: 0,
            name: '',
            shortname: '',
            color: '#ff9800',
            iDidCounter: 0,
            iDidNotCounter: 0,
        },
        onSubmit: (values) => {
            addPlayerToGroup(values.name, values.color);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required')
                .matches(/.*\S.*/, 'Keine Leerzeichen')
                .max(20, 'max. 20 Buchstaben erlaubt')
                .min(3, 'min. 3 Buchstaben nötig'),
        }),
    });

    const addPlayerToGroup = (name: string, color: string) => {
        const newPlayer: Player = {
            playerId: group.length + 1,
            name: name,
            shortname: name.toUpperCase().split(' ')[0][0],
            color: color,
            iDidCounter: 0,
            iDidNotCounter: 0,
        };
        // Debug
        // console.log(newPlayer);
        setGroup([...group, newPlayer]);
    };

    return (
        <>
            <Block elevation={10}>
                <Box component="form" onSubmit={formik.handleSubmit} noValidate>
                    <h3>Spieler hinzuf&uuml;gen</h3>
                    {/* <FormControl fullWidth > */}
                    {/* <InputLabel id="name-label">Name</InputLabel> */}
                    <TextField
                        required
                        label="Spielername"
                        sx={{ marginBottom: 1, mr: 2 }}
                        /* value={playername} */
                        /* onChange={(event) => setPlayername(event.target.value)} */
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name !== undefined}
                        helperText={formik.errors.name}
                        name="name"
                    />
                    <Select
                        /* value={selectedColor}
                        onChange={(event) =>
                            setSelectedColor(event.target.value)
                        } */
                        onChange={formik.handleChange}
                        value={formik.values.color}
                        name="color"
                    >
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.amber }}
                            value={avatarcolors.amber}
                        >
                            Orange
                        </MenuItem>
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.pink }}
                            value={avatarcolors.pink}
                        >
                            Pink
                        </MenuItem>
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.purple }}
                            value={avatarcolors.purple}
                        >
                            Lila
                        </MenuItem>
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.blue }}
                            value={avatarcolors.blue}
                        >
                            Blau
                        </MenuItem>
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.teal }}
                            value={avatarcolors.teal}
                        >
                            Türkis
                        </MenuItem>
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.green }}
                            value={avatarcolors.green}
                        >
                            Grün
                        </MenuItem>
                        <MenuItem
                            sx={{ bgcolor: avatarcolors.lime }}
                            value={avatarcolors.lime}
                        >
                            Limette
                        </MenuItem>
                    </Select>
                    <br></br>
                    <Button
                        type="submit"
                        disabled={!formik.isValid}
                        variant="contained"
                        endIcon={<PersonAddIcon />}
                        /* onClick={addPlayerToGroup} */
                    >
                        Hinzufügen
                    </Button>
                    {/* </FormControl> */}
                </Box>
            </Block>
        </>
    );
}
