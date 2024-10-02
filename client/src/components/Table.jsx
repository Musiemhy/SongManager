import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Form from "./Form";
import { DataGrid } from "@mui/x-data-grid";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSongsRequest,
  updateSongsRequest,
  deleteSongsRequest,
} from "../redux/songRedux/songSlice";
import Spinner from "../components/Spinner"; // Import Spinner
import {
  Action,
  EditBtn,
  DeleteBtn,
  TableTitleContainer,
  TableImage,
  Register_Login_Formerror,
  LoginButton,
  DeleteContainer,
  DeleteQuestion,
  DeleteButton,
} from "../styles";

const columns = (handleEdit, handleDelete) => [
  { field: "idNum", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    renderCell: (params) => (
      <TableTitleContainer>
        <TableImage src={params.row.coverImage} alt={params.row.title} />
        <span>{params.value}</span>
      </TableTitleContainer>
    ),
  },
  { field: "artist", headerName: "Artist", width: 200 },
  { field: "album", headerName: "Album", width: 150 },
  { field: "genre", headerName: "Genre", width: 100 },
  {
    field: "duration",
    headerName: "Duration",
    type: "number",
    width: 80,
  },
  {
    field: "releaseDate",
    headerName: "Date",
    width: 130,
  },
  {
    field: "action",
    headerName: "Action",
    description: "This column is not sortable.",
    sortable: false,
    width: 200,
    renderCell: (params) => (
      <Action>
        <EditBtn onClick={() => handleEdit(params.row)}>EDIT</EditBtn>
        <DeleteBtn onClick={() => handleDelete(params.row)}>DELETE</DeleteBtn>
      </Action>
    ),
  },
];

const Table = ({ refresh }) => {
  const User = {
    User: localStorage.getItem("userId"),
  };
  const dispatch = useDispatch();
  const { list: songs, loading, error } = useSelector((state) => state.songs); // Access loading state
  const [rows, setRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    dispatch(fetchSongsRequest(User));
  }, [refresh, dispatch]);

  useEffect(() => {
    if (songs.length > 0) {
      setRows(
        songs.map((song, index) => {
          const duration = song.duration === "N/A" ? 0 : Number(song.duration);
          const formattedDate = song.releaseDate
            ? format(new Date(song.releaseDate), "MM/dd/yyyy")
            : "Invalid date";

          return {
            id: song._id,
            idNum: index + 1,
            coverImage: song.coverImage || "../../fallback-image.jfif",
            title: song.title,
            artist: song.artist,
            album: song.album,
            genre: song.genre,
            releaseDate: formattedDate,
            duration: duration,
          };
        })
      );
    }
  }, [songs]);

  const openModal = (type, song) => {
    setModalType(type);
    setCurrentSong(song);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentSong(null);
  };

  const handleEdit = (song) => {
    openModal("edit", song);
  };

  const handleDelete = (song) => {
    openModal("delete", song);
  };

  const handleSave = async (updatedSong) => {
    dispatch(updateSongsRequest(updatedSong));
    closeModal();
  };

  const handleDeleteSong = async (songId) => {
    const SongId = {
      songId: songId,
    };

    dispatch(deleteSongsRequest(SongId));

    closeModal();
  };

  return (
    <div className="table">
      {loading ? ( // Check for loading state
        <Spinner /> // Render Spinner while loading
      ) : error ? (
        <Register_Login_Formerror>{error}</Register_Login_Formerror>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns(handleEdit, handleDelete)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row.id}
        />
      )}
      <Modal open={isOpen} onClose={closeModal}>
        {modalType === "edit" && (
          <Form initialData={currentSong} onSave={handleSave} />
        )}
        {modalType === "delete" && (
          <DeleteContainer>
            <DeleteQuestion>
              Are you sure you want to delete this song?
            </DeleteQuestion>
            <DeleteButton>
              <LoginButton onClick={() => handleDeleteSong(currentSong.id)}>
                Yes
              </LoginButton>
              <LoginButton onClick={closeModal}>No</LoginButton>
            </DeleteButton>
          </DeleteContainer>
        )}
      </Modal>
    </div>
  );
};

export default Table;
