import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { TListing } from "../assets/types";
import { createContext } from "react";

type TListingsContext = {
  allListings: TListing[];
  setAllListings: Dispatch<SetStateAction<TListing[]>>;
};

const ListingContext = createContext<TListingsContext | undefined>(undefined);

export const ListingsProvider = ({ children }: { children: ReactNode }) => {
  return <ListingContext.Provider value={undefined}>{children}</ListingContext.Provider>;
};

export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("Please use 'useListings' hook within ListingsContext scope.");
  }
  return context;
};
