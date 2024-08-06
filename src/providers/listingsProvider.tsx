import { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { TListing } from "../assets/types";
import { createContext } from "react";
import { listingsRequests } from "../requests/listingsRequests";

type TListingsContext = {
  allListings: TListing[];
  setAllListings: Dispatch<SetStateAction<TListing[]>>;
};

const ListingContext = createContext<TListingsContext | undefined>(undefined);

export const ListingsProvider = ({ children }: { children: ReactNode }) => {
  const [allListings, setAllListings] = useState<TListing[]>([]);

  const requestListings = () => {
    return listingsRequests.requestListings().then(setAllListings);
  };

  useEffect(() => {
    requestListings();
  }, []);

  console.log(allListings[0]);

  return (
    <ListingContext.Provider value={{ allListings, setAllListings }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("Please use 'useListings' hook within ListingsContext scope.");
  }
  return context;
};
