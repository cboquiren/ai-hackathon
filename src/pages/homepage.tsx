import { useState } from "react";

export const Homepage = () => {
  const [locationInput, setLocationInput] = useState<undefined | string>(undefined);

  return (
    <>
      <section id="homepage">
        <div className="hero-container">
          <div className="container">
            <h1>Find Your Dream Home Today</h1>
            <div className="location-container">
              <form action="post">
                <input
                  type="text"
                  value={locationInput === undefined ? "" : locationInput}
                  placeholder="City, Zipcode or Neighborhood"
                  onChange={(e) => {
                    setLocationInput(e.target.value);
                  }}
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass-location"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="transition"></div>
        </div>
      </section>
      <section id="options">
        <div className="container">
          <div className="option-button">
            <div className="icon-container">
              <i className="fa-solid fa-money-bill-trend-up"></i>
            </div>
            <h3>Affordable Homes</h3>
            <p>
              Discover budget-friendly options without compromising on quality. Start your journey
              to affordable homeownership today.
            </p>
            <div className="button">
              <p>Start Here</p>
            </div>
          </div>
          <div className="option-button">
            <div className="icon-container">
              <i className="fa-solid fa-house-circle-exclamation"></i>
            </div>
            <h3>New Listings</h3>
            <p>
              Be the first to explore the newest properties on the market. Don't miss out on fresh
              opportunities.
            </p>
            <div className="button">
              <p>Start Here</p>
            </div>
          </div>
          <div className="option-button">
            <div className="icon-container">
              <i className="fa-solid fa-money-bill-trend-up"></i>
            </div>
            <h3>Affordable Homes</h3>
            <p>
              Discover budget-friendly options without compromising on quality. Start your journey
              to affordable homeownership today.
            </p>
            <div className="button">
              <p>Start Here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
