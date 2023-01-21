import "./App.css";
import NavigationDesktop from "./components/NavigationDesktop";
import logo from "./assets/logo.png";
import navLinksData from "./data.json";
import SearchBar from "./components/SearchBar";
import BookData from "./components/Data.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Slide } from "@mui/material";
import Slide from "./Slide";
import Logo from "./assets/headphone.jpg";
import slide1 from "./assets/book.jpg";
import slide2 from "./assets/tshirt.jpg";
import Footer from "./components/Footer";

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const navLinks = [
    {
      name: "link one",
    },
    {
      name: "link two",
      children: [
        {
          name: "link two sub",
        },
        {
          name: "link two sub 2",
        },
      ],
    },
    {
      name: "link three",
      children: [
        {
          name: "link three sub",
        },
        {
          name: "link three sub 2",
          children: [
            {
              name: "deep 3",
            },
            {
              name: "deep 2nd 3",
            },
          ],
        },
        {
          name: "link three sub",
        },
      ],
    },
    {
      name: "link four",
    },
    {
      name: "link five",
      children: [
        {
          name: "link five sub 1",
        },
        {
          name: "link five sub 2",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <div className="header-parent">
        <header className="header">
          <a href="#" className="logo-anchor">
            <img
              className="logo"
              src="https://comtechpng.com/wp-content/uploads/2020/04/A-time-to-shop-Logo.png"
              alt="logo"
            />
          </a>
          <SearchBar placeholder="Search here..." data={BookData} />
          <NavigationDesktop navLinksData={navLinksData} />
        </header>
      </div>
      <body>
        <main>
          <Carousel responsive={responsive}>
            <div className="carousel">
              <Slide />
            </div>
            <div className="carousel">
              <img src={Logo} alt />
            </div>
            <div className="carousel">
              <img src={slide1} alt />
            </div>
            <div className="carousel">
              <img src={slide2} alt />
            </div>
          </Carousel>
        </main>

        <Footer />
      </body>
    </div>
  );
}

export default App;
