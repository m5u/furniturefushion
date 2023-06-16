import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BiCartAlt, BiCheck } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

export default function ProductItem({ product }) {
  const { addToCart } = useContext(GlobalContext);
  const [isClicked, setIsClicked] = useState(false);
  let [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    debugger;
    const cartItem = {
      ...product,
      quantity: quantity,
    };
    addToCart(cartItem);
    setIsClicked(true);
  };
  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  return (
    <>
      <Card className="product">
        <div className="product-link">
          <CardMedia component="div" className="image">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
            <button
              className={
                isClicked
                  ? "btn btn-primary btn-cart btn-addCart clicked"
                  : "btn btn-primary btn-cart btn-addCart"
              }
              onClick={handleAddToCart}
            >
              <span className="text">Add To Cart</span>
              <div className="cart">
                <BiCartAlt className="cart-icon" />
              </div>
              <BsBoxSeam className="box-icon" />
            </button>
          </CardMedia>

          <CardContent
            className="content"
            component={Link}
            to={`/product/${product.id}`}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography className="category">{product.category}</Typography>
              <Rating
                name="simple-controlled"
                value={product.rating}
                size="small"
              />
            </Box>
            <Typography variant="h6" component="div" className="title">
              {product.title.length > 18
                ? product.title.substring(0, 22) + "..."
                : product.title}
            </Typography>

            <div className="price-wrap">
              <Typography className="price" comonent="div">
                <span>$</span>
                {product.price}
              </Typography>
              <Typography className="old-price" component="div">
                {product.oldPrice.length > 0
                  ? "$" + product.oldPrice
                  : product.oldPrice}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
