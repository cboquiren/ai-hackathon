export type TListing = {
  id: number;
  streetAddress: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqFootage: number;
  lotSize: number;
  yearBuilt: number;
  type: string;
  description: string;
  elementarySchool: string;
  middleSchool: string;
  highSchool: string;
  listingAgent: {
    name: string;
    number: string;
  };
};
