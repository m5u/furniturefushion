import { Typography, Box, IconButton, Button } from "@mui/material";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ReactComponent as SadFace } from "../images/sad-face.svg";

export default function EmptyCart({ onClose }) {
  return (
    <>
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
        <Typography className="heading">Oops! Your cart is empty</Typography>
        <Typography className="message">
          Looks like you have not added anything to your cart. Go explore our
          products.
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
    </>
  );
}
