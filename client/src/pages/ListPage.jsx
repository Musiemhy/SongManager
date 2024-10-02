import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import {
  CTAButton,
  ListContainer,
  ListContent,
  AddSong,
  AppBar,
  NavBar,
  WelcomeHeader,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { addSongsRequest } from "../redux/songRedux/songSlice";
import Table from "../components/Table";

const ListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("name");
  const User = {
    User: userId,
  };
  const { songs, loading, error } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [dispatch, navigate, userId]);

  const handleAdd = (song) => {
    dispatch(addSongsRequest(song));
    setRefresh((prev) => !prev);
    closeModal();
  };

  return (
    <ListContainer>
      <Header />
      <AppBar>
        <NavBar>
          <WelcomeHeader>Welcome {name}</WelcomeHeader>
          <p>
            This is your list of songs, you can create a new song or update or
            delete an existing song.
          </p>
          <div className="choice"></div>
        </NavBar>
        <AddSong>
          <CTAButton className="add" onClick={openModal}>
            Add new transaction
          </CTAButton>
          <Modal open={isOpen} onClose={closeModal}>
            <Form onSave={handleAdd} />
          </Modal>
        </AddSong>
      </AppBar>
      <ListContent>
        <Table refresh={refresh} />
      </ListContent>
      <Footer />
    </ListContainer>
  );
};

export default ListPage;
