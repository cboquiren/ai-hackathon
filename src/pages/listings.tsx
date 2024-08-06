import { ListingCard } from "../components/listingPreview";
import { useListings } from "../providers/listingsProvider";

export const ListingsPage = () => {
  const { allListings } = useListings();
  return (
    <>
      <div>
        <h1>This is the listings page</h1>
        <div className="listing-container">
          {allListings.length > 0 &&
            allListings.map((listing) => {
              return <ListingCard listing={listing} />;
            })}
        </div>
      </div>
    </>
  );
};
