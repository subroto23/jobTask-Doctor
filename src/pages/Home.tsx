import FilteringForm from "../components/Forms/FilteringForm";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <FilteringForm />
      <ProfileCard />
    </div>
  );
};

export default Home;
