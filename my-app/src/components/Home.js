import FormPage from "./Form";

const Home = () => {
  return (
    <div className="Intro">
      <h1>
        Welcome to <span className="highlight">Ease</span>!
      </h1>
      <video
        autoPlay
        muted
        controls
        loop
        src="/images/cars.mp4"
        type="video/mp4"
        width={"40%"}
      ></video>
      <p>
        With our AI tool, save time on daily errand running and plan your day
        with Ease.
      </p>
      <p>
        We take the guesswork out of your route so you can get your tasks done
        faster and have more time for you!
      </p>
      <h2>
        Your <span className="highlight">Day</span>, Your{" "}
        <span className="highlight">Way</span>!
      </h2>
      <FormPage />
    </div>
  );
};

export default Home;
