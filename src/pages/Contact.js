import { Box, Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { BiEnvelope, BiPhone, BiMapPin } from "react-icons/bi";

export default function Contact() {
  return (
    <>
      <section className="section section-margin">
        <Container>
          <Grid container className="contact-wrap">
            <Grid item md={5} className="contact-information">
              <Typography
                variant="h4"
                className="heading"
                sx={{ marginBottom: "16px" }}
              >
                Get in Touch
              </Typography>

              <Typography sx={{ marginBottom: "24px" }}>
                Let’s talk about future work. Send us a message and we will be
                in touch within one work day.
              </Typography>
              <Box className="detail">
                <Typography component="div">
                  <span>
                    <BiMapPin />
                  </span>
                  123 Demo St, London, SE1 1DD, United Kingdom
                </Typography>
                <Typography component="div">
                  <span>
                    <BiPhone />
                  </span>
                  +1 123-456-7890
                </Typography>
                <Typography component="div">
                  <span>
                    {" "}
                    <BiEnvelope />
                  </span>
                  mail@example.com
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7} className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1687376139480!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
