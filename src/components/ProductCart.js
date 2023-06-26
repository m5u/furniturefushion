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
  Button,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ProductCart() {
  const { cart, quantityIncrement, quantityDecrement } =
    useContext(GlobalContext);
  const [promoText, setPromoText] = useState("");
  const [discount, setDiscount] = useState(0);
  const validDiscountCodes = [
    "123456",
    "RRD4D32",
    "44F4T11",
    "FF9543D1",
    "YYGWKJD",
  ];

  const handleDecrement = (productId) => {
    quantityDecrement(productId);
  };

  const handleIncrement = (productId) => {
    quantityIncrement(productId);
  };

  const subtotal = cart
    .map((product) => parseFloat(product.price * product.quantity))
    .reduce((acc, price) => acc + price, 0)
    .toFixed(2);

  const shipping = 1.99;

  const handleSubmitApply = (e) => {
    e.preventDefault();
    const discountPercentage = 0.05; // 5% discount
    if (validDiscountCodes.includes(promoText)) {
      setDiscount(parseFloat((subtotal * discountPercentage).toFixed(2)));
      console.log("Promotion code applied successfully!");
    } else {
      setDiscount(0);
      console.log("Promotion code does not match!");
    }
    setPromoText("");
  };

  const grandTotal = (
    parseFloat(subtotal) -
    parseFloat(discount) +
    shipping
  ).toFixed(2);

  return (
    <>
      <section className="section section-margin">
        <Container>
          <Typography className="heading">Your Cart</Typography>
          <Grid
            container
            className="cart-wrapper"
            sx={{ alignItems: "flex-start" }}
          >
            <Grid item md={8}>
              <Paper sx={{ width: "100%", overflowX: "auto" }}>
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
              </Paper>
            </Grid>

            <Grid item md={4}>
              {cart && cart.length > 0 ? (
                <>
                  <Box
                    sx={{
                      boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)",
                      padding: "32px",
                      borderRadius: "8px",
                    }}
                    className="cart-summary"
                  >
                    <Box sx={{ padding: "16px 0" }} className="promotion">
                      <Typography>Do you have a Promo Code?</Typography>
                      <form onSubmit={handleSubmitApply}>
                        <TextField
                          placeholder="Enter Promo Code"
                          value={promoText}
                          onChange={(e) => setPromoText(e.target.value)}
                          className="text-field"
                        />
                        <Button className="btn btn-dark" type="submit">
                          Apply
                        </Button>
                      </form>
                    </Box>
                    <Box
                      className="subtotal"
                      sx={{
                        borderTop: "2px dashed rgba(0,0,0,0.1)",
                        borderBottom: "2px dashed rgba(0,0,0,0.1)",
                        padding: "16px 0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography className="label">Subtotal</Typography>
                        <Typography className="amount">{subtotal}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography className="label">Discount</Typography>
                        <Typography className="amount">{discount}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography className="label">Shipping</Typography>
                        <Typography className="amount">{shipping}</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "16px 0",
                      }}
                    >
                      <Typography className="label">Grand Total</Typography>
                      <Typography className="amount">{grandTotal}</Typography>
                    </Box>
                    <Link to={`/checkout`}>
                      <Button
                        className="btn btn-primary"
                        sx={{ width: "100%" }}
                      >
                        Proceed to Checkout
                      </Button>
                    </Link>
                    {/* <Button
                className="btn btn-secondary"
                sx={{ width: "100%", marginTop: "16px" }}
              >
                Continue Shopping
              </Button> */}
                  </Box>
                </>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
