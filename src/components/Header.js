import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import { BiCartAlt } from "react-icons/bi";
import { GlobalContext } from "../context/GlobalState";
import DrawerCart from "./DrawerCart";

export default function Header() {
  const { cart } = useContext(GlobalContext);
  // const pages = ["Home", "About", "Products", "Contact"];
  const pages = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    debugger;
    setIsDrawerOpen(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setTrigger(true);
      } else {
        setTrigger(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //cleanup function
    };
  }, []);
  //debugger;
  const cartCount = cart.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  };

  return (
    <>
      <AppBar
        className={`navbar ${isChecked ? "menu-open" : ""} ${
          trigger ? "scrolled" : ""
        }`}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="a" href="/">
              Furniture.
            </Typography>

            <Box
              className={
                isChecked ? "menu-list-wrap checked" : "menu-list-wrap"
              }
            >
              <Search />
              <Box
                className={isChecked ? "menu-list checked" : "menu-list"}
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.label}
                    component={NavLink}
                    to={page.path}
                    activeClassName="active"
                    className="menu"
                    sx={{ my: 2, color: "white" }}
                    onClick={handleCloseNavMenu}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
            </Box>
            <div className="right-section">
              <Search />
              <IconButton className="top-cart" onClick={handleDrawerOpen}>
                <BiCartAlt />

                {cartCount > 0 ? (
                  <span className="badge">{cartCount}</span>
                ) : (
                  ""
                )}
              </IconButton>
              <Box
                className={isChecked ? "navbar-icon clicked" : "navbar-icon"}
              >
                <input type="checkbox" id="checkbox" onChange={handleToggle} />
                <label for="checkbox" className="toggle">
                  <div className="bars" id="bar1"></div>
                  <div className="bars" id="bar2"></div>
                  <div className="bars" id="bar3"></div>
                </label>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <DrawerCart onClose={handleDrawerClose} />
      </Drawer>
    </>
  );
}
