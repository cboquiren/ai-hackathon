const base_listings_URL = "http://localhost:3000/listings";

const requestListings = () => {
  return fetch(base_listings_URL).then((response) => {
    if (!response.ok) {
      throw new Error("Could not reach the listings server");
    }
    return response.json();
  });
};

export const listingsRequests = {
  requestListings,
};
