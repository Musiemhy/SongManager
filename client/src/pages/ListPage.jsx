import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <Header />
      {/* <CardItem
        coverImage="https://res.cloudinary.com/dlzndjevg/image/upload/f_auto,q_auto/v1/SongManger/CoverImg/uuqsvilr057bgr89tjqb?_a=BAMAH2ZU0"
        title="Shape of You"
        artist="Ed Sheeran"
        album="Divide"
        genre="Pop"
        releaseDate="2017-01-06"
        duration="2:33"
      /> */}
    </div>
  );
};

export default ListPage;
