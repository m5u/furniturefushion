import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const pages = ["Home", "About", "Products", "Contact"];
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="section section-footer">
        <Container>
          <Grid container spacing={4} className="footer-top">
            <Grid item md={4}>
              <Link to={`/home`} className="logo">
                Furniture.
              </Link>

              <Typography className="description">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography className="title">Company</Typography>
              <List className="list">
                {pages.map((page) => (
                  <ListItem
                    key={page}
                    component={Link}
                    to={`/${page}`}
                    className="item"
                  >
                    {page}
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={2}>
              <Typography className="title">Follow Us</Typography>
              <List className="list">
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </ListItem>
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </ListItem>
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </ListItem>
                <ListItem
                  className="item"
                  component="a"
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </ListItem>
              </List>
            </Grid>
            <Grid item md={4}>
              <Typography className="title">Newsletter</Typography>
              <Typography className="description subscribe">
                Subscribe to the weekly newsletter for all the latest updates
              </Typography>
              <div className="text-field-wrap">
                <TextField
                  placeholder="Email Address"
                  className="input-text-field"
                  autoFocus={false}
                  InputProps={{
                    classes: {
                      root: "input-text-field-root",
                      focused: "input-text-field-focused",
                      notchedOutline: "input-text-field-focused",
                    },
                  }}
                />
                <Button className="btn btn-primary">Subscribe</Button>
              </div>
            </Grid>
          </Grid>
          <div className="footer-copyright">
            <Typography>
              © {currentYear} All rights reserved. Designed &amp; Coded by
              Manjushree Ranjikar
            </Typography>
          </div>
        </Container>
      </section>
    </>
  );
}
