import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Typography, Box, IconButton, Button } from "@mui/material";
import { BiTrash, BiX, BiCartAlt, BiCart, BiShoppingBag } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ReactComponent as SadFace } from "../images/sad-face.svg";

export default function DrawerCart({ onClose }) {
  const { cart, deleteProductFromCart } = useContext(GlobalContext);
  debugger;

  const handleDeleteProduct = (productId) => {
    deleteProductFromCart(productId);
  };

  const getProductQuantity = (productId) => {
    debugger;
    const cartItem = cart.filter((item) => item.id === productId);
    return cartItem.length;
  };

  // const updatedCart = cart.filter((product, index) => {
  //   return cart.indexOf(product) === index;
  // });

  // const updatedCart = cart.reduce((acc, product) => {
  //   const existingProduct = acc.find((item) => item.id === product.id);
  //   if (existingProduct) {
  //     existingProduct.quantity += product.quantity || 1;
  //   } else {
  //     const newProduct = { ...product };
  //     newProduct.quantity = product.quantity;
  //     acc.push(newProduct);
  //   }
  //   return acc;
  // }, []);

  const totalPrice = cart
    .map((product) => parseFloat(product.price))
    .reduce((acc, price) => acc + price, 0)
    .toFixed(2);

  // console.log(cart);

  return (
    <>
      <div className="drawer-cart">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography className="heading">Your Cart</Typography>
          <IconButton className="icon-btn close" onClick={onClose}>
            <BiX />
          </IconButton>
        </Box>

        {cart && cart.length > 0 ? (
          <Box className="cart-item-wrap">
            {cart.map((product) => (
              <Box key={product.id} className="cart-item">
                <div className="cart-item-image">
                  <Link to={`/product/${product.id}`} onClick={onClose}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                </div>
                <div className="cart-item-info">
                  <div>
                    <Typography
                      className="title"
                      component={Link}
                      to={`/product/${product.id}`}
                    >
                      {product.title}
                    </Typography>
                    <Typography className="price">
                      {product.quantity} x ${product.price}
                    </Typography>
                  </div>
                  <Button
                    startIcon={<BiTrash />}
                    className="btn-text btn-text-delete"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Remove
                  </Button>
                </div>
              </Box>
            ))}
          </Box>
        ) : (
          <div className="empty-cart">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BsBag className="cart" />
              <SadFace className="sadface" />
            </Box>
            <Typography className="heading">
              Oops! Your cart is empty
            </Typography>
            <Typography className="message">
              Looks like you have not added anything to your cart. Go explore
              our products.
            </Typography>
            <Button
              className="btn btn-primary"
              component={Link}
              to={`/products`}
              onClick={onClose}
            >
              Shop Now
            </Button>
          </div>
        )}

        {cart.length > 0 ? (
          <Box className="drawer-cart-bottom">
            <Box
              className="sub-total-wrap"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Sub Total</Typography>
              <Typography className="total-price"> ${totalPrice}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              className="btn-wrapper"
            >
              <Link to={`/cart`} onClick={onClose}>
                <Button className="btn btn-primary">View Cart</Button>
              </Link>

              <Button className="btn btn-dark">Checkout </Button>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
