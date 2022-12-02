import { createContext, useState } from 'react';
import { Player } from '../types/playerType';

// ===> Context to make the Grouplist from the useState public
type ContextProps = {
    group: Player[];
    setGroup: any;
  }
//context variable with initial values
const initValues: ContextProps = {
    group: [],
    setGroup: function (): void {
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

    return (
        <GroupContext.Provider
            value={{
                group: group,
                setGroup: setGroup,
            }}
        >
            {props.children}
        </GroupContext.Provider>
    );
};
