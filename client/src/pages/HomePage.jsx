import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SongArtist from "../components/SongArtist";
import SongGenre from "../components/SongGenre";
import Footer from "../components/Footer";
import { SongChoice } from "../styles";
import { logoutStart } from "../redux/authRedux/authSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutStart());
  }, []);

  return (
    <div className="homePage">
      <Header />
      <HeroSection />
      <SongChoice>
        <SongGenre />
        <SongArtist />
      </SongChoice>
      <Footer />
    </div>
  );
};

export default HomePage;
