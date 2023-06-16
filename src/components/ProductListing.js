import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductItem from "./ProductItem";
import { Container, Typography } from "@mui/material";

export default function ProductListing() {
  const { productList, searchResult } = useContext(GlobalContext);
  console.log(searchResult);
  return (
    <>
      <section className="section section-product-list">
        <Container>
          <div className="product-list">
            {searchResult.length > 0 ? (
              searchResult.map((item) => (
                <ProductItem key={item.id} product={item} />
              ))
            ) : (
              <div> No Product Found</div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
