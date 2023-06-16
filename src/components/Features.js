import { Grid, Typography, Button } from "@mui/material";
import Img from "../images/new-sofa.png";

export default function Features() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="section">
        <Grid container>
          <Grid item md={6}></Grid>
          <Grid item md={6}></Grid>
          <Grid item md={12}>
            <div className="new-arrival-banner">
              <div className="title">
                <Typography variant="h2" className="front">
                  new
                </Typography>
                <Typography variant="h2" className="back">
                  arrival
                </Typography>
                <div className="current-year">
                  <div className="line"></div>
                  <Typography className="year">
                    {currentYear} Edition
                  </Typography>
                </div>
              </div>
              <div className="content">
                <Typography component="div" className="offer">
                  30% offer on your first order
                </Typography>
                <Button className="btn btn-secondary">Shop Now</Button>
              </div>
              <div className="image">
                <img src={Img} />
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
