import React from "react";
import { Grid, Typography, Container, Card, CardContent } from "@mui/material";
import { ReactComponent as DeskIcon } from "../images/desk.svg";
import { ReactComponent as SofaIcon } from "../images/sofa.svg";
import { ReactComponent as ChairIcon } from "../images/chair.svg";
import { ReactComponent as BedIcon } from "../images/bed.svg";
import { ReactComponent as DrawerIcon } from "../images/bureau.svg";
import { ReactComponent as WardrobeIcon } from "../images/wardrobe.svg";

const categoryItem = [
  {
    id: 1,
    icon: <ChairIcon />,
    title: "Chair",
  },
  {
    id: 2,
    icon: <BedIcon />,
    title: "Bed",
  },
  {
    id: 3,
    icon: <DeskIcon />,
    title: "Desk",
  },
  {
    id: 4,
    icon: <SofaIcon />,
    title: "Sofa",
  },
  {
    id: 5,
    icon: <DrawerIcon />,
    title: "Side Drawer",
  },
  {
    id: 6,
    icon: <WardrobeIcon />,
    title: "Wardrobe",
  },
];

const CategorySection = () => {
  return (
    <>
      <section className="section section-category">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h2" align="center" className="heading">
                Shop by Categoies
              </Typography>
            </Grid>
            {categoryItem.map((item) => (
              <Grid item xs={12} md={2} key={item.id} className="category">
                <Card className="category-card">
                  <CardContent className="category-content">
                    <div
                      className="category-icon"
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {item.icon}
                    </div>
                  </CardContent>
                  <Typography className="category-title">
                    {item.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default CategorySection;
