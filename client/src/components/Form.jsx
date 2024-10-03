import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  FormContainer,
  FormContent,
  FormItem1,
  FormItem2,
  FormItem3,
  FormItem4,
  FormItem5,
  FormItem6,
  FormItem7,
  FormItem8,
  FormLabel,
  FormInput,
  FormSelect,
  Register_Login_Formerror,
  FormButton,
  StyledDatePicker,
} from "../styles";

const Form = ({ initialData, onSave }) => {
  const userId = localStorage.getItem("userId");
  const [error, setError] = useState(null);
  const [coverImages, setCoverImage] = useState("");

  const [input, setInput] = useState({
    songId: initialData ? initialData.id : "",
    User: userId,
    title: initialData ? initialData.title : "",
    artist: initialData ? initialData.artist : "",
    album: initialData ? initialData.album : "",
    genre: initialData ? initialData.genre : "",
    releaseDate: initialData ? initialData.releaseDate : null,
    duration: initialData ? initialData.duration : "",
    coverImages: initialData ? initialData.coverImage : "",
  });

  useEffect(() => {
    if (initialData && initialData.coverImage) {
      setCoverImage(initialData.coverImage);
      setInput((prevInput) => ({
        ...prevInput,
        coverImages: initialData.coverImage,
      }));
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setInput({
      ...input,
      releaseDate: format(new Date(date), "MM/dd/yyyy"),
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
        setInput((prevInput) => ({ ...prevInput, coverImages: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (
      !input.User ||
      !input.title ||
      !input.artist ||
      !input.genre ||
      !input.duration ||
      !input.coverImages
    ) {
      setError("Please fill all required fields!");
      return;
    }

    onSave({
      ...input,
      id: initialData?.id,
    });
  };

  return (
    <FormContainer>
      <FormContent onSubmit={handleSubmit}>
        <FormItem1>
          <FormLabel htmlFor="title">TITLE:</FormLabel>
          <FormInput
            type="text"
            name="title"
            id="title"
            required
            value={input.title}
            onChange={handleChange}
          />
        </FormItem1>

        <FormItem2>
          <FormLabel htmlFor="artist">ARTIST:</FormLabel>
          <FormInput
            type="text"
            name="artist"
            id="artist"
            required
            value={input.artist}
            onChange={handleChange}
          />
        </FormItem2>

        <FormItem3>
          <FormLabel htmlFor="album">ALBUM:</FormLabel>
          <FormInput
            type="text"
            name="album"
            id="album"
            required
            value={input.album}
            onChange={handleChange}
          />
        </FormItem3>

        <FormItem4>
          <FormLabel htmlFor="genre">GENRE:</FormLabel>
          <FormSelect
            name="genre"
            id="genre"
            required
            value={input.genre}
            onChange={handleChange}
          >
            <option value="">Select Genre</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="R&B">R&B</option>
            <option value="Classical">Classical</option>
            <option value="Hiphop">Hip Hop</option>
            <option value="Reggae">Reggae</option>
            <option value="Country">Country</option>
            <option value="Disco">Disco</option>
            <option value="Other">Other</option>
          </FormSelect>
        </FormItem4>

        <FormItem5>
          <FormLabel htmlFor="releaseDate">RELEASE DATE:</FormLabel>
          <StyledDatePicker
            id="releaseDate"
            selected={input.releaseDate}
            onChange={handleDateChange}
            maxDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            required
          />
        </FormItem5>

        <FormItem6>
          <FormLabel htmlFor="duration">DURATION(SECONDS):</FormLabel>
          <FormInput
            type="number"
            name="duration"
            id="duration"
            min="0"
            required
            value={input.duration}
            onChange={handleChange}
          />
        </FormItem6>

        <FormItem7>
          <FormLabel htmlFor="coverImages">IMAGE:</FormLabel>
          <FormInput
            type="file"
            required={!coverImages}
            accept="image/*"
            multiple={false}
            onChange={handleImageChange}
            placeholder="Upload Image"
          />
          {coverImages && (
            <img
              src={coverImages}
              alt="Uploaded"
              style={{ maxWidth: "150px", maxHeight: "150px" }}
            />
          )}
        </FormItem7>

        <Register_Login_Formerror>{error}</Register_Login_Formerror>

        <FormItem8>
          <FormButton type="submit">
            {initialData ? "Update Song" : "Add Song"}
          </FormButton>
          <FormButton
            type="reset"
            onClick={() => {
              setCoverImage("");
              setInput({
                songId: initialData ? initialData.id : "",
                User: userId,
                title: "",
                artist: "",
                album: "",
                genre: "",
                duration: "",
                releaseDate: null,
                coverImages: "",
              });
            }}
          >
            Clear
          </FormButton>
        </FormItem8>
      </FormContent>
    </FormContainer>
  );
};

export default Form;
