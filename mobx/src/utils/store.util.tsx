import {createContext, ReactNode, useContext} from "react";
import {Store} from "../stores/store.ts";

const StoreContext = createContext<Store>({} as Store);

export type StoreProviderType = {
    children: ReactNode;
    store: Store;
}

export const StoreProvider = ({store, children}: StoreProviderType) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
