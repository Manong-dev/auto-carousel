import Carousel from "./components/Carousel";

import img1 from "./assets/arch-girl.png";
import img2 from "./assets/arch-girl2.jpg";
import img3 from "./assets/arch-girl3.png";



const IMAGES = [
  { url: img1, alt: "", title: "Image 1", text: "hey bro" },
  { url: img2, alt: "", title: "Image 2", text: "hey bro" },
  { url: img3, alt: "", title: "Image 3", text: "hey bro" },

];
function App() {
  return (
    <div className="App">
      <Carousel>
        {IMAGES.map((image, title, index) => {
          return (
            <div key={index} className="slider__item">
              <img src={image.url} alt={image.alt} />
              <h2>{title.title}</h2>
              <p>{image.text}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default App;
