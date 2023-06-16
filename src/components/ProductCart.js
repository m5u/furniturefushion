import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";

import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BiPlus, BiMinus } from "react-icons/bi";

export default function ProductCart() {
  const { cart, quantityIncrement, quantityDecrement } =
    useContext(GlobalContext);
  // const updatedCart = cart.reduce((acc, product) => {
  //   const existingProduct = acc.find((item) => item.id === product.id);
  //   if (existingProduct) {
  //     existingProduct.quantity += product.quantity || 1;
  //   }
  //   return acc;
  // }, []);

  const handleDecrement = (productId) => {
    quantityDecrement(productId);
  };

  const handleIncrement = (productId) => {
    quantityIncrement(productId);
  };

  return (
    <>
      <section className="section section-margin">
        <Container>
          <Typography className="heading">Your Cart</Typography>
          <Grid container>
            <Grid item md={8}>
              <TableContainer className="cart-table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>SubTotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart && cart.length > 0 ? (
                    cart.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="product-thumbnail">
                            <img src={product.image} alt={product.title} />
                          </div>
                        </TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <div className="quantity-wrap">
                            <IconButton
                              className="icon minus"
                              onClick={() => handleDecrement(product.id)}
                            >
                              <BiMinus />
                            </IconButton>
                            <TextField
                              className="input-text-field"
                              type="number"
                              value={product.quantity}
                              readOnly
                            />
                            <IconButton
                              className="icon add"
                              onClick={() => handleIncrement(product.id)}
                            >
                              <BiPlus />
                            </IconButton>
                          </div>
                        </TableCell>
                        <TableCell>{product.price}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5}>No data</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </TableContainer>
            </Grid>
            <Grid item md={4}>
              <Typography>Summary</Typography>
              <Typography>Do you have a Promo Code?</Typography>
              <form>
                <TextField placeholder="Enter Promo Code" />
              </form>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="label">Subtotal</Typography>
                <Typography>100</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="label">Discount</Typography>
                <Typography>1.99</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="label">Shipping</Typography>
                <Typography>1.99</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="label">Order Total</Typography>
                <Typography>100</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
