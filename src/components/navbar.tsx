import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="navbar">
        <div className="container">
          <img
            src="https://img.logoipsum.com/254.svg"
            alt="Logo Holder"
            onClick={() => {
              navigate("/");
            }}
          />
          <ul>
            <li
              onClick={() => {
                navigate("/listings");
              }}
            >
              Buy
            </li>
            <li
              onClick={() => {
                navigate("/listings");
              }}
            >
              Rent
            </li>
            <li>Sell</li>
            <li>Mortgage</li>
            <li>Find an Agent</li>
          </ul>
          <h3>Sign In</h3>
        </div>
      </section>
    </>
  );
};
