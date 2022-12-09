import { createContext, useState } from 'react';
import { Player } from '../types/playerType';

// ===> Context to make the Grouplist from the useState public
type ContextProps = {
    group: Player[];
    setGroup: (value: any) => void;

    roundCounter: number;
    setRoundCounter: (value: any) => void;
  }
//context variable with initial values
const initValues: ContextProps = {
    group: [],
    setGroup: function (value: any): void {
        throw new Error('Function not implemented.');
    },
    roundCounter: 0,
    setRoundCounter: function (value: any): void {
        throw new Error('Function not implemented.');
    }
}
export const GroupContext = createContext<ContextProps>(initValues);

// ===> Provider of the Context
type ProviderProps = {
    children?: React.ReactNode;
  };
export const GroupContextProvider = (props: ProviderProps) => {
    // useState erstellt eine Liste von Type Player die Anfangs leer ist
    // group ist eine Liste von Objekten des Type Player
    const [group, setGroup] = useState<Player[]>([]);

    // Roundcounter gilt für die Gruppe daher in diesem Context
    const [roundCounter, setRoundCounter] = useState(1)

    return (
        <GroupContext.Provider
            value={{
                group: group,
                setGroup: setGroup,

                roundCounter: roundCounter,
                setRoundCounter: setRoundCounter
            }}
        >
            {props.children}
        </GroupContext.Provider>
    );
};
