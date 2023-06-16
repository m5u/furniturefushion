import React, { useContext, useState } from "react";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
import ProductItem from "./ProductItem";

const TabPanel = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

const PopularProducts = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const { productList } = useContext(GlobalContext);

  const categoryChair = productList.filter(
    (item) => item.category.toLocaleLowerCase() === "chairs"
  );

  const categoryBed = productList.filter(
    (item) => item.category.toLocaleLowerCase() === "bed"
  );

  const categorySofa = productList.filter(
    (item) => item.category.toLocaleLowerCase() === "sofa"
  );

  return (
    <section className="section section-popular-products">
      <Container>
        <Typography className="heading">Popular Category</Typography>
        <Box className="tab-wrapper">
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Chairs" className="tab" />
            <Tab label="Beds" className="tab" />
            <Tab label="Sofa" className="tab" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="tab-container">
          <div className="product-list">
            {categoryChair.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="product-list">
            {categoryBed.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="product-list">
            {categorySofa.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </TabPanel>
      </Container>
    </section>
  );
};

export default PopularProducts;
