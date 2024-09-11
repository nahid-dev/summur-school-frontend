import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "./style.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Container from "../shared/Container/Container";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <SectionTitle
        title={"Gallery"}
        subTitle={"Classroom Images"}
      ></SectionTitle>
      <Container>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          mode="lg-fade"
        >
          <a
            data-lg-size="1406-1390"
            className="gallery-item"
            href="https://i.ibb.co/ZKtPvPS/kelli-tungay-2-LJ4rq-K2qf-U-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/ZKtPvPS/kelli-tungay-2-LJ4rq-K2qf-U-unsplash.jpg"
            />
          </a>
          <a
            data-lg-size="1400-1400"
            className="gallery-item"
            href="https://i.ibb.co/bJQYfXv/yogendra-singh-q-JU9o-H0k-Zdc-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/bJQYfXv/yogendra-singh-q-JU9o-H0k-Zdc-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/XtkxTbS/aaron-burden-1z-R3-WNSTnv-Y-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/XtkxTbS/aaron-burden-1z-R3-WNSTnv-Y-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/g35hNQq/hadis-malekie-EYl5-U-C-GU-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/g35hNQq/hadis-malekie-EYl5-U-C-GU-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/m0DG8Zm/national-cancer-institute-N-aihp118p8-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/m0DG8Zm/national-cancer-institute-N-aihp118p8-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/zhHG7Rz/jerry-wang-Rw-CP91-Rw-Ze-M-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/zhHG7Rz/jerry-wang-Rw-CP91-Rw-Ze-M-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/XtkxTbS/aaron-burden-1z-R3-WNSTnv-Y-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/XtkxTbS/aaron-burden-1z-R3-WNSTnv-Y-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/KqF5DGw/austrian-national-library-Gx-B6-Pbi4-Jzg-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/KqF5DGw/austrian-national-library-Gx-B6-Pbi4-Jzg-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/4gk4Dm7/emmanuel-ikwuegbu-VC6-MGt9-Zo-BA-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/4gk4Dm7/emmanuel-ikwuegbu-VC6-MGt9-Zo-BA-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/cXrqJFZ/kelly-sikkema-ia1p6fqftn-Q-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/cXrqJFZ/kelly-sikkema-ia1p6fqftn-Q-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/9nNH2Th/pim-chu-n-Hd-Jiy-Wg-NQ-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/9nNH2Th/pim-chu-n-Hd-Jiy-Wg-NQ-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/qFyj6gK/salvatore-ventura-n-Ne4-Hw-Y-i-Y0-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/qFyj6gK/salvatore-ventura-n-Ne4-Hw-Y-i-Y0-unsplash.jpg"
            />
          </a>
          <a
            className="gallery-item"
            href="https://i.ibb.co/F7yfZWc/sigmund-OV44gx-H71-DU-unsplash.jpg"
          >
            <img
              alt=""
              src="https://i.ibb.co/F7yfZWc/sigmund-OV44gx-H71-DU-unsplash.jpg"
            />
          </a>
        </LightGallery>
      </Container>
    </div>
  );
};

export default Gallery;
