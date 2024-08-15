import homeBanner from "../../../assets/homeBanner.png";

const HomePage = () => {
  return (
    <div>
      <div className="h-[600px] bg-red-400 flex">
        <h2 className="text-6xl flex-grow">Get anything you want</h2>
        <img className="w-64" src={homeBanner} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
