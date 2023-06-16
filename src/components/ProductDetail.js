import {
  Container,
  Grid,
  Typography,
  Rating,
  TextField,
  IconButton,
  Button,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import { BiPlus, BiMinus } from "react-icons/bi";
import ImageGallery from "react-image-gallery";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Avatar1 from "../images/female.jpg";
import Avatar2 from "../images/male.jpg";
import { MdStar } from "react-icons/md";
import { BiCartAlt, BiCheck } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const TabPanel = ({ value, index, children }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default function ProductDetail() {
  const { productList, addToCart } = useContext(GlobalContext);
  const { id } = useParams();

  // Find the recipe with the specified id
  const product = productList.find((item) => item.id === parseInt(id));

  let [quantity, setQuantity] = useState(1);
  const handleChangeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };
  const handleIncrement = () => {
    setQuantity((quantity = quantity + 1));
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((quantity = quantity - 1));
    }
  };
  //console.log(quantity);

  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const totalRating = Object.values(product.ratingBar);
  const sum = totalRating.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  // console.log(sum);
  const fivePercantage = (product.ratingBar.five / sum) * 100;
  const fourPercantage = (product.ratingBar.four / sum) * 100;
  const threePercantage = (product.ratingBar.three / sum) * 100;
  const twoPercantage = (product.ratingBar.two / sum) * 100;
  const onePercantage = (product.ratingBar.one / sum) * 100;

  const [isClicked, setIsClicked] = useState(false);
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

  const availability = product.availability;

  return (
    <>
      <section className="section section-product-detail section-margin">
        <Container>
          <Grid container className="product-detail-header">
            <Grid
              item
              xs={12}
              md={6}
              className="product-detail-left product-gallary-image"
            >
              <div className="gallary-image-wrap">
                {/* <img src={product.image} alt={product.title} /> */}
                <ImageGallery
                  items={product.images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
              </div>
              <div className="gallary-thumbnail-collection"></div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className="product-detail-right product-detail"
            >
              <div className="category-header">
                <Typography className="category">{product.category}</Typography>
                <div className="price-wrap">
                  <Typography className="price">${product.price}</Typography>
                  <Typography className="old-price">
                    {product.oldPrice > 0 ? "$" + product.oldPrice : ""}
                  </Typography>
                </div>
              </div>
              <Typography className="title" variant="h1">
                {product.title}
              </Typography>
              <Rating
                className="rating"
                value={product.rating}
                size="small"
                readOnly
              />

              <Typography className="description">
                {product.description}
              </Typography>

              <div className="swatch">
                <Typography className="label">Color:</Typography>
                <div className="swatch-wrap">
                  {product.colorOptions.map((color) => (
                    <div key={color.name}>
                      <input
                        type="radio"
                        id={color.name}
                        name="colorGroup"
                        value={color.hexCode}
                      />
                      <label
                        htmlFor={color.name}
                        style={{ backgroundColor: color.hexCode }}
                      >
                        <div className="check-mark"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="add-to-cart">
                <div className="quantity-wrap">
                  <IconButton className="icon minus" onClick={handleDecrement}>
                    <BiMinus />
                  </IconButton>
                  <TextField
                    className="input-text-field"
                    type="number"
                    value={quantity}
                    onChange={handleChangeQuantity}
                    readOnly
                  />

                  <IconButton className="icon add" onClick={handleIncrement}>
                    <BiPlus />
                  </IconButton>
                </div>
                {availability !== "Out of stock" ? (
                  <>
                    <button
                      className={
                        isClicked
                          ? "btn btn-primary btn-cart clicked"
                          : "btn btn-primary btn-cart"
                      }
                      onClick={handleAddToCart}
                    >
                      <span className="text">Add To Cart</span>
                      <div className="cart">
                        <BiCartAlt className="cart-icon" />
                      </div>
                      {/* <BiCheck className="check-icon" /> */}
                      <BsBoxSeam className="box-icon" />
                    </button>
                    <Button className="btn btn-secondary">Buy Now</Button>
                  </>
                ) : (
                  <button className="btn btn-primary btn-disabled" disabled>
                    Out of Stock
                  </button>
                )}

                {/* <Button className="btn btn-secondary">Add To Basket</Button>*/}
              </div>
            </Grid>
          </Grid>
          {/* <button className="btn btn-primary" onClick={handleBackClick}>
            Back
          </button> */}
          <Grid container className="product-detail-wrap">
            <Grid item md={8} className="product-detail-left">
              <Box className="product-detail-tab tab-wrapper">
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="Description" className="tab" />
                  <Tab label="Specification" className="tab" />
                  <Tab label="Review" className="tab" />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <div className="tab-container">
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="tab-container">
                  <Typography>Width: {product.dimensions.width}</Typography>
                  <Typography>Height: {product.dimensions.height}</Typography>
                  <Typography>Depth: {product.dimensions.depth}</Typography>
                  <Typography>Weight: {product.weight}</Typography>
                  <Typography>Material: {product.material}</Typography>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="tab-container">
                  <Card>
                    <CardContent>
                      <div className="avatar-user">
                        <Avatar
                          src={Avatar1}
                          sx={{ width: 48, height: 48 }}
                          className="avatar"
                        />
                        <div>
                          <Typography className="name">Taylor Swift</Typography>
                          <div className="rating" component="div">
                            <MdStar /> <Typography>4.5</Typography>
                          </div>
                        </div>
                      </div>

                      <Typography className="comment">
                        I am extremely satisfied with the sofa I purchased. It
                        is incredibly comfortable and provides excellent
                        support, allowing me to relax and unwind after a long
                        day. The design of the sofa is simply stunning and adds
                        a touch of elegance to my living room. The high-quality
                        cushioning makes it a joy to sit or lie down on,
                        creating a cozy and inviting atmosphere. I am impressed
                        by its durability, as it has withstood regular use
                        without showing any signs of wear. Additionally, the
                        assembly process was a breeze, requiring minimal effort
                        and time.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </TabPanel>
            </Grid>
            <Grid item md={4} className="product-detail-right">
              <Typography variant="h2">Customer Rating</Typography>
              <div className="rating-bars">
                <div className="bar">
                  <Typography>5 star</Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={fivePercantage}
                  />
                  <Typography>{Math.floor(fivePercantage)}%</Typography>
                </div>
                <div className="bar">
                  <Typography>4 star</Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={fourPercantage}
                  />
                  <Typography>{Math.floor(fourPercantage)}%</Typography>
                </div>
                <div className="bar">
                  <Typography>3 star</Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={threePercantage}
                  />
                  <Typography>{Math.floor(threePercantage)}%</Typography>
                </div>
                <div className="bar">
                  <Typography>2 star</Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={twoPercantage}
                  />
                  <Typography>{Math.floor(twoPercantage)}%</Typography>
                </div>
                <div className="bar">
                  <Typography>1 star</Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={onePercantage}
                  />
                  <Typography>{Math.floor(onePercantage)}%</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
