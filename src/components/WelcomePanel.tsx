import SearchBar from "../elements/SearchBar";

const WelcomePanel = () => {
  return (
    <div className={"welcome-panel"}>
      <div className={"welcome-panel__text"}>
        Hello! I am a simple weather app but I will do my best to help you!
        <br />
        Please allow me to see where are you... Or just search for the location manually below
      </div>
      <SearchBar/>
    </div>
  );
};

export default WelcomePanel;
