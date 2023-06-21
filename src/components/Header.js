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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "./Search";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import { BiCartAlt } from "react-icons/bi";
import { GlobalContext } from "../context/GlobalState";
import DrawerCart from "./DrawerCart";

export default function Header() {
  const { cart } = useContext(GlobalContext);
  const pages = ["Home", "About", "Products", "Contact"];
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

  return (
    <>
      <AppBar className={trigger ? "navbar scrolled" : "navbar"}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" noWrap component="a" href="/">
              Furniture.
            </Typography>
            {/* <IconButton onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            className="responsive-menu"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
          >
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu> */}
            <Box
              className="menu-list"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page}`}
                  className="menu"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {/* <Link to={`/products`}></Link> */}
                  {page}
                </Button>
              ))}
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
