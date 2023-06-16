import { Container } from "@mui/system";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LatestProduct() {
  const { productList } = useContext(GlobalContext);
  const latestList = productList.sort((a, b) => b.id - a.id).slice(0, 8);
  return (
    <>
      <section className="section section-latest-product">
        <Container className="container">
          <Typography variant="h4" className="heading text-center">
            Latest Products
          </Typography>
          <div className="product-list">
            {latestList.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
          <div className="btn-wrapper">
            <Button className="btn btn-primary">
              <Link to={`/products`}>View All Product</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
