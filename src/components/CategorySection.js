import React from "react";
import { Grid, Typography, Container, Card, CardContent } from "@mui/material";
import { ReactComponent as DeskIcon } from "../images/desk.svg";
import { ReactComponent as SofaIcon } from "../images/sofa.svg";
import { ReactComponent as ChairIcon } from "../images/chair.svg";
import { ReactComponent as BedIcon } from "../images/bed.svg";
import { ReactComponent as DrawerIcon } from "../images/bureau.svg";
import { ReactComponent as WardrobeIcon } from "../images/wardrobe.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const categoryItem = [
  {
    id: 1,
    icon: <ChairIcon />,
    title: "Chair",
    category: "Chairs",
  },
  {
    id: 2,
    icon: <BedIcon />,
    title: "Bed",
    category: "Bed",
  },
  {
    id: 3,
    icon: <DeskIcon />,
    title: "Desk",
    category: "Table",
  },
  {
    id: 4,
    icon: <SofaIcon />,
    title: "Sofa",
    category: "Sofa",
  },
  {
    id: 5,
    icon: <DrawerIcon />,
    title: "Side Drawer",
    category: "Side Drawer",
  },
  {
    id: 6,
    icon: <WardrobeIcon />,
    title: "Wardrobe",
    category: "Wardrobe",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  // const handleCategoryClick = (category) => {
  //   navigate("/products", { state: { category } });
  // };
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
            {/* <Link
              className="category"
              to={`/products`}
              state={{ category: "Chairs" }}
            >
              <Card className="category-card">
                <CardContent className="category-content">
                  <div
                    className="category-icon"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <ChairIcon />
                  </div>
                </CardContent>
                <Typography className="category-title">Chair</Typography>
              </Card>
            </Link> */}
            <Grid item xs={12} md={12} className="category-card-wrap">
              {categoryItem.map((item) => (
                <Card
                  className="category-card"
                  component={Link}
                  to={`/products`}
                  state={{ category: item.category }}
                  key={item.id}
                >
                  <CardContent className="category-content">
                    <div
                      className="category-icon"
                      sx={{
                        textAlign: "center",
                      }}
                      // key={item.id}
                      // onClick={() => handleCategoryClick(item.category)}
                    >
                      {item.icon}
                    </div>
                  </CardContent>
                  <Typography className="category-title">
                    {item.title}
                  </Typography>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default CategorySection;
