import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebare.css";

const Sidebare = ({ handleChange }) => {
  return (
   <div>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <div className="amine">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        </div>
      </section>
      </div>
  );
};

export default Sidebare;