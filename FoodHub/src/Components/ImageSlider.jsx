import Carousel from "react-bootstrap/Carousel";
import { Images } from "../data/images";

function ImageSlider() {
  return (
    <div>

    <Carousel interval={5000} pause="hover" controls indicators>
      {Images.map((img) => (
        <Carousel.Item key={img.id}>
          <img
            className="d-block w-100"
            src={img.path}
            alt={img.heading}
            style={{ height: "400px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3 className="!text-5xl !font-bold">{img.heading}</h3>
            <p className="!text-3xl">{img.desc}</p>
            <button className="p-2 bg-green-500 !pl-4 !pr-4">Explore</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default ImageSlider;
