import { Grid, Typography, Button, Container } from "@mui/material";
import HeroImg1 from "../images/hero-img.jpg";
import HeroImg2 from "../images/hero-img2.jpg";
import HeroImg3 from "../images/hero-img3.jpg";
import HeroImg4 from "../images/hero-img4.jpg";

export default function Hero() {
  return (
    <>
      {/* <section className="hero-section">
        <Container maxWidth="false">
          <Grid container justifyContent="center">
            <Grid item xs={10}>
              <Typography variant="h1" align="center">
                Welcome to our Furniture Store!
              </Typography>
              <Typography variant="subtitle1" align="center">
                Discover a wide range of stylish and comfortable furniture
                pieces for your home and office.
              </Typography>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Button variant="contained" color="primary">
                  Shop Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section> */}
      <section className="section hero">
        <Container className="container">
          <Grid container className="hero-wrap">
            <Grid item md={6} className="hero-left-content">
              <Typography className="tag" component="div">
                Trusted for Quality
              </Typography>
              <Typography variant="h1" className="title">
                We make your home classic & elegant
              </Typography>
              <Typography className="summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit quam
                scelerisque a tincidunt urna. Nisl, quam orci malesuada
              </Typography>
              <Button className="btn btn-primary">Shop Now</Button>
            </Grid>
            <Grid item md={6} className="hero-right-content">
              <Grid item md={6} className="image-wrap first">
                <div className="image">
                  <img src={HeroImg1} alt="Image1" />
                </div>
                <div className="image">
                  <img src={HeroImg3} alt="Image3" />
                </div>
              </Grid>
              <Grid item md={6} className="image-wrap second">
                <div className="image">
                  <img src={HeroImg2} alt="Image2" />
                </div>
                <div className="image">
                  <img src={HeroImg4} alt="Image4" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
