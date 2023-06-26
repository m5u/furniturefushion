import { Container } from "@mui/system";
import { Typography, Grid, Box } from "@mui/material";
import Img1 from "../images/hero1.png";
import Img2 from "../images/about1.jpg";
import Img3 from "../images/about2.jpg";
import Img4 from "../images/about3.jpg";
import Img5 from "../images/about4.jpg";
import Img6 from "../images/about5.jpg";
import Avatar from "../images/male.jpg";
import { BsQuote } from "react-icons/bs";
import {
  BiBox,
  BiCube,
  BiHappyHeartEyes,
  BiWallet,
  BiAward,
  BiPackage,
} from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import Testimonial from "../components/Testimonial";

export default function About() {
  return (
    <>
      <section className="section section-margin">
        <Container>
          <Grid container className="about-introduction">
            <Grid item md={7} className="introduction">
              <Typography variant="h4" className="heading">
                About Us
              </Typography>
              <Typography>
                We prioritize delivering top-notch furniture quality, focusing
                on excellence in craftsmanship, utilizing advanced technology,
                and striving to ensure customer satisfaction. Our utmost goal is
                to provide the best quality furniture that brings happiness to
                our customers.
              </Typography>
              <Typography>
                Enjoy a seamless and secure shopping experience with our
                reliable payment system. Stay updated with our latest trends and
                promotions. Thank you for choosing us as your trusted furniture
                provider.
              </Typography>
            </Grid>
            <Grid item md={5} className="owner-testimonial">
              <BsQuote />
              <Typography>
                Welcome to our furniture website! As the owner, I want to
                express my gratitude for choosing us. We offer a wide range of
                high-quality furniture for your home or office. Our team is here
                to assist you in finding the perfect pieces that suit your
                style.
              </Typography>
              <Box className="detail">
                <img src={Avatar} alt="Victor Smith" />
                <Box>
                  <Typography variant="h6">Victor Smith</Typography>
                  <Typography component="span">CEO, Founder</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="section section-0">
        <Container>
          <Box className="about-image-container">
            <Box className="image">
              <img src={Img1} alt="Image 1" />
            </Box>
            <Box className="image small">
              <img src={Img2} alt="Image 1" />
            </Box>
            <Box className="image small">
              <img src={Img3} alt="Image 1" />
            </Box>
            <Box className="image small">
              <img src={Img4} alt="Image 1" />
            </Box>
            <Box className="image">
              <img src={Img5} alt="Image 1" />
            </Box>
            <Box className="image small">
              <img src={Img6} alt="Image 1" />
            </Box>
          </Box>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Grid container className="why-us">
            <Grid item md={7} className="">
              <Typography variant="h4" className="heading">
                What makes us the best?
              </Typography>
              <Typography>
                We prioritize delivering top-notch furniture quality, focusing
                on excellence in craftsmanship, utilizing advanced technology.
              </Typography>
              <Box
                className="content-wrap"
                sx={{ display: "flex", flexWrap: "wrap" }}
              >
                <Box className="item" sx={{ display: "flex" }}>
                  <Box className="icon">
                    <BiPackage />
                  </Box>
                  <Box className="content">
                    <Typography variant="h4">Free Shipping</Typography>
                    <Typography>
                      Enjoy free home delivery when you purchase products worth
                      $100 or more.
                    </Typography>
                  </Box>
                </Box>
                <Box className="item" sx={{ display: "flex" }}>
                  <Box className="icon">
                    <BiCube />
                  </Box>
                  <Box className="content">
                    <Typography variant="h4">Easy Return Policy</Typography>
                    <Typography>
                      Provide 30 day easy Return policy for all of our customer
                    </Typography>
                  </Box>
                </Box>
                <Box className="item" sx={{ display: "flex" }}>
                  <Box className="icon">
                    <BiWallet />
                  </Box>
                  <Box className="content">
                    <Typography variant="h4">Secure Payment</Typography>
                    <Typography>
                      We assure you that our payment system is completely
                      secure.
                    </Typography>
                  </Box>
                </Box>
                <Box className="item" sx={{ display: "flex" }}>
                  <Box className="icon">
                    <BiAward />
                  </Box>
                  <Box className="content">
                    <Typography variant="h4">Best Quality</Typography>
                    <Typography>
                      We never make compromises when it comes to our quality and
                      are always attentive.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box className="image-container">
                <img src={Img1} alt="About Image" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Testimonial />
    </>
  );
}
