import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Img1 from "../images/testimonial1.png";
import Img2 from "../images/testimonial2.png";
import Img3 from "../images/testimonial3.png";
import Img4 from "../images/testimonial5.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Testimonial() {
  const testimonials = [
    {
      image: Img1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius elit sit amet orci tincidunt, vitae feugiat tellus fringilla. Nulla facilisi.",
      author: "John Doe",
    },
    {
      image: Img2,
      quote:
        "Ut consequat turpis ac justo lacinia, in efficitur nulla consequat. Donec eu felis auctor, varius enim sed, consectetur lectus.",
      author: "Jane Smith",
    },
    {
      image: Img3,
      quote:
        "Fusce auctor orci in enim tempor dapibus. Sed fringilla nisi non hendrerit tincidunt. Donec sit amet sapien eu ex fringilla lacinia.",
      author: "David Johnson",
    },
    {
      image: Img1,
      quote:
        "Aliquam ut odio eget tortor maximus varius a in ex. Nam eu mi id nunc condimentum vulputate. Vivamus sit amet ex vel ex facilisis feugiat.",
      author: "Emily Davis",
    },
    {
      image: Img2,
      quote:
        "Ut consequat turpis ac justo lacinia, in efficitur nulla consequat. Donec eu felis auctor, varius enim sed, consectetur lectus.",
      author: "Jane Smith",
    },
    {
      image: Img3,
      quote:
        "Fusce auctor orci in enim tempor dapibus. Sed fringilla nisi non hendrerit tincidunt. Donec sit amet sapien eu ex fringilla lacinia.",
      author: "David Johnson",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: <ChevronLeftIcon />,
    nextArrow: <ChevronRightIcon />,
  };

  return (
    <>
      <section className="section section-testimonial">
        <Container>
          <Typography className="heading">Testimonial</Typography>
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <p className="author">{testimonial.author}</p>
                </div>
                <p className="content">{testimonial.quote}</p>
              </div>
            ))}
          </Slider>
          <Box className="image-container">
            <img src={Img4} alt="sofa" />
          </Box>
        </Container>
      </section>
    </>
  );
}
