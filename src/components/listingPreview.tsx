import { TListing } from "../assets/types";

export const ListingCard = ({ listing }: { listing: TListing }) => {
  return (
    <>
      <h1>{listing.streetAddress}</h1>
      <h3>${listing.price}</h3>
    </>
  );
};
