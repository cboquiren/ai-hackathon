import { useState } from "react";

export const Homepage = () => {
  const [locationInput, setLocationInput] = useState<undefined | string>(undefined);

  return (
    <>
      <section id="homepage">
        <div className="hero-container">
          <div className="container">
            <h1>Find Your Dream Home Today</h1>
            <form action="post">
              <input
                type="text"
                value={locationInput === undefined ? "" : locationInput}
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
      </section>
    </>
  );
};
