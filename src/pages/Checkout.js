import { Container } from "@mui/system";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { useContext, useState, useMemo } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import countryList from "react-select-country-list";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function Checkout() {
  const { cart } = useContext(GlobalContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [postcode, setPostcode] = useState("");
  const [flatNum, setFlatNum] = useState("");

  const [value, setValue] = useState("");
  const options = countryList()
    .getData()
    .map((country) => ({
      label: country.label,
      value: country.value,
    }));

  const [formErrors, setFormErrors] = useState({});
  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const subtotal = cart
    .map((product) => parseFloat(product.price * product.quantity))
    .reduce((acc, price) => acc + price, 0)
    .toFixed(2);

  const handlePaymentClick = () => {
    let errors = {};
    debugger;
    if (firstName.trim() === "") {
      errors.firstName = "First Name is required";
    }
    if (lastName.trim() === "") {
      errors.lastName = "Last Name is required";
    }
    if (email.trim() === "") {
      errors.email = "Email address is required";
    }
    if (value.trim() === "") {
      errors.value = "Country is required";
    }
    if (city.trim() === "") {
      errors.city = "Town / city is required";
    }
    if (postcode.trim() === "") {
      errors.postcode = "Postcode is required";
    }
    if (phone.trim() === "") {
      errors.phone = "Phone number is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <>
      <section className="section section-margin">
        <Container>
          <Grid container className="checkout-wrap">
            <Grid item md={8} className="checkout-billing">
              <Typography variant="h4" className="heading">
                Billing Address
              </Typography>
              <Box className="form-checkout-wrap">
                <Box className="form-row">
                  <TextField
                    id="outlined-helperText"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    // error={Boolean(formErrors.firstName)}
                    error={formErrors.firstName}
                    helperText={formErrors.firstName}
                    required
                  />
                </Box>
                <Box className="form-row">
                  <TextField
                    id="outlined-helperText"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    // error={formErrors.lastName !== undefined} // Add error prop
                    error={formErrors.lastName}
                    helperText={formErrors.lastName} // Add helperText prop
                    required
                  />
                </Box>

                <Box className="form-row wide">
                  <TextField
                    id="outlined-helperText"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={formErrors.email}
                    helperText={formErrors.email}
                    required
                  />
                </Box>
                <Box className="form-row wide">
                  <FormControl>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country-label"
                      label="Country"
                      value={value}
                      onChange={changeHandler}
                      error={formErrors.value !== undefined} // Check if formErrors.value exists
                      helperText={
                        formErrors.value ? "This field is required" : ""
                      }
                    >
                      {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box className="form-row">
                  <TextField
                    id="outlined-helperText"
                    label="Town / City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    error={formErrors.city}
                    helperText={formErrors.city}
                    required
                  />
                </Box>
                <Box className="form-row">
                  <TextField
                    id="outlined-helperText"
                    value={flatNum}
                    onChange={(e) => setFlatNum(e.target.value)}
                    placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </Box>
                <Box className="form-row small">
                  <TextField
                    id="outlined-helperText"
                    label="County (Optional)"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                  />
                </Box>
                <Box className="form-row small">
                  <TextField
                    id="outlined-helperText"
                    label="Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    error={formErrors.postcode}
                    helperText={formErrors.postcode}
                    required
                  />
                </Box>
                <Box className="form-row small">
                  <TextField
                    id="outlined-helperText"
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={formErrors.phone}
                    helperText={formErrors.phone}
                    required
                  />
                </Box>
              </Box>
              {/* <Typography variant="h4" className="heading">
                Shipping Method
              </Typography> */}
              {/* <Box>
                {" "}
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Free Shipping"
                    name="radio-buttons-group"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <FormControlLabel
                        value="Free Shipping"
                        control={<Radio />}
                        //label="Free Shipping"
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <label>Free Shipping</label>
                          <span>10-12 business days</span>
                        </Box>
                        <Typography>$0</Typography>
                      </Box>
                    </Box>

                    <FormControlLabel
                      value="Regular Shipping"
                      control={<Radio />}
                      label="Regular Shipping"
                    />
                    <FormControlLabel
                      value="EXpress Shipping"
                      control={<Radio />}
                      label="EXpress Shipping"
                    />
                  </RadioGroup>
                </FormControl>
              </Box> */}
            </Grid>
            <Grid item md={4} sx={{ alignContent: "flex-start" }}>
              <Box
                className="cart-item-wrap"
                sx={{
                  boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)",
                  padding: "32px",
                  borderRadius: "8px",
                }}
              >
                {cart.map((product) => (
                  <Box key={product.id} className="cart-item">
                    <div className="cart-item-image">
                      <Link to={`/product/${product.id}`}>
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

                      {/* <Button
                        startIcon={<BiTrash />}
                        className="btn-text btn-text-delete"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Remove
                      </Button> */}
                    </div>
                  </Box>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "2px dashed rgba(0,0,0,0.1)",
                    borderBottom: "2px dashed rgba(0,0,0,0.1)",
                    padding: "16px 0",
                  }}
                  className="subtotal"
                >
                  <Typography className="label">Subtotal</Typography>
                  <Typography className="amount" sx={{ fontWeight: "600" }}>
                    {subtotal}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "16px 0",
                  }}
                >
                  <Typography className="label">Grand Total</Typography>
                  <Typography className="amount" sx={{ fontWeight: "600" }}>
                    {subtotal}
                  </Typography>
                </Box>
                <Button
                  className="btn btn-primary"
                  sx={{ width: "100%" }}
                  onClick={handlePaymentClick}
                >
                  Continue to payment
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
