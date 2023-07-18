import FormNameUser from "../components/components/home/FormNameUser";
import "./stylespages/home.css";

const Home = () => {
  return (
    <div className="home__app">
      <img
        className="/header__principal-home"
        src="68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67.png"
      />
      <div>
        <h1>Hi Trainer!</h1>
        <p>Please, give us your trainer name to star.</p>
      </div>
      <FormNameUser />
    </div>
  );
};

export default Home;
