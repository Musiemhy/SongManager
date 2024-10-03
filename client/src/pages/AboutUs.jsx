import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { logoutStart } from "../redux/authRedux/authSlice";
import { useDispatch } from "react-redux";
import {
  AboutContainer,
  AboutContent,
  AboutCard,
  Artist_Genre_title,
  AboutPara,
  AboutUL,
  AboutList,
} from "../styles";

const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutStart());
  }, []);

  return (
    <AboutContainer>
      <Header />
      <AboutContent>
        <AboutCard>
          <Artist_Genre_title>About Us</Artist_Genre_title>
          <AboutPara>
            Welcome to Song Manager, a dynamic web application designed by me
            Musie Merseeahazen to showcase a full-stack development experience
            for Addis Software Test Project. This website focuses on managing
            songs, allowing users to easily create, update, delete, and browse
            through a collection of music. This project is part of a test to
            evaluate frontend development skills, integrating a REST API for
            seamless data management.
          </AboutPara>
          <Artist_Genre_title>What it does?</Artist_Genre_title>
          <AboutPara>
            This application provides essential music management features,
            allowing users to:
            <AboutUL>
              <AboutList>
                - List Songs: View a catalog of songs with essential details
                such as title, artist, album, and genre.
              </AboutList>
              <AboutList>
                -Create New Songs: Add songs to the catalog using a simple form,
                linked to a REST API.
              </AboutList>
              <AboutList>
                - Update and Delete: Modify or remove songs directly from the
                interface, ensuring a smooth and dynamic interaction.
              </AboutList>
            </AboutUL>
          </AboutPara>
          <Artist_Genre_title>Technologies Used</Artist_Genre_title>
          <AboutPara>
            Modern web development technologies were leveraged to build this
            project:
            <AboutUL>
              <AboutList>
                -ReactJS(Vite): Provides the foundation for our interactive user
                interface.
              </AboutList>
              <AboutList>
                -Redux Toolkit: Ensures efficient and scalable state management
                for handling user interactions and song data.
              </AboutList>
              <AboutList>
                - Redux-Saga: Facilitates smooth communication with the REST
                API, handling side effects like API calls asynchronously.
              </AboutList>
              <AboutList>
                - Emotion & Styled System: Used for styling the application,
                allowing for a sleek and responsive design.
              </AboutList>
              <AboutList>
                - Custom Backend using Express.js and MongoDb: a custom backend
                was used for providing data and enabling full CRUD operations.
              </AboutList>
            </AboutUL>
          </AboutPara>
          <AboutPara>
            To enhance accessibility, this application was hosted on
            Render(backend)/Vercel(frontend).
          </AboutPara>
        </AboutCard>
      </AboutContent>
      <Footer />
    </AboutContainer>
  );
};

export default AboutUs;
