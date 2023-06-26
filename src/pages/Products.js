import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductItem from "../components/ProductItem";
import { useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function Products() {
  const {
    productList,
    searchResult,
    filterProduct,
    selectedCategory,
    setSelectedCategory,
    selectedMaterial,
    setSelectedMaterial,
    selectedRange,
    setSelectedRange,
    setSearchText,
  } = useContext(GlobalContext);

  const categories = [...new Set(productList.map((item) => item.category))];
  const handleChangeCategory = (e) => {
    // debugger;
    const { value, checked } = e.target;
    setSelectedCategory(value);
    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    } else {
      setSelectedCategory(selectedCategory.filter((c) => c !== value));
    }
  };

  const materials = productList.flatMap((item) =>
    item.material.toLocaleLowerCase().split(", ")
  );
  const allMaterials = [...new Set(materials)];

  const handleChangeMaterial = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedMaterial([...selectedMaterial, value]);
    } else {
      setSelectedMaterial(selectedMaterial.filter((m) => m !== value));
    }
  };

  const handleChangePrice = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedRange([...selectedRange, value]);
    } else {
      setSelectedRange(selectedRange.filter((range) => range !== value));
    }
  };

  const handleFilter = () => {
    //debugger;
    const filteredItems = {
      category: selectedCategory,
      material: selectedMaterial,
      price: selectedRange,
    };
    filterProduct(filteredItems); // Call filterProduct from the context
    //setSearchText("");
    setTitle("Product List");
  };

  const [title, setTitle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    //debugger;
    if (location && location.state && location.state.setSearchText) {
      debugger;
      const searchText = location.state.setSearchText.trim();
      if (searchText !== "") {
        setSearchText(searchText); // Set the search query in the state
        setTitle(`Search Result for "${searchText}"`); // Update the title with the search query
      } else {
        setSearchText(""); // Clear the search query in the state
        setTitle("Product List"); // Set the title as "Product List" if the search query is empty
      }
    } else {
      setSearchText(""); // Clear the search query in the state
      setTitle("Product List"); // Set the title as "Product List" if no search query is present
    }
  }, [location.state]);

  const handleReset = () => {
    setSelectedCategory([]);
    setSelectedMaterial([]);
    setSelectedRange([]);
    if (location && location.state && location.state.setSearchText) {
      if (location.state.setSearchText !== "") {
        setSearchText("");
        setTitle("Product List");
      }
    }
  };

  const [isActive, setIsActive] = useState(false);

  const handleFilterOpen = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className="section section-margin">
        <Container maxWidth="lg">
          <Grid container sx={{ position: "relative" }}>
            <Grid item md={3}>
              <div
                className={isActive ? "sidebar-filter show" : "sidebar-filter"}
              >
                <div className="list category-list">
                  <Typography className="title">Category</Typography>
                  <Box>
                    {categories.map((category) => (
                      <div key={category}>
                        <input
                          type="checkbox"
                          id={category}
                          value={category}
                          checked={selectedCategory.includes(category)}
                          onChange={handleChangeCategory}
                        />
                        <label htmlFor={category}>{category}</label>
                      </div>
                    ))}
                  </Box>
                </div>
                <div className="list material-list">
                  <Typography className="title">Material</Typography>
                  <Box>
                    {allMaterials.map((material, index) => (
                      <div key={`${material}-${index}`}>
                        <input
                          type="checkbox"
                          id={`${material}-${index}`}
                          value={material}
                          checked={selectedMaterial.includes(material)}
                          onChange={handleChangeMaterial}
                        />
                        <label htmlFor={material}>{material}</label>
                      </div>
                    ))}
                  </Box>
                </div>

                <div className="list price-list">
                  <Typography className="title">Price</Typography>
                  <Box>
                    <div>
                      <input
                        type="checkbox"
                        name="range-0-250"
                        value="0-250"
                        checked={selectedRange.includes("0-250")}
                        onChange={handleChangePrice}
                      />
                      <label>0-250</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="range-250-500"
                        value="250-500"
                        checked={selectedRange.includes("250-500")}
                        onChange={handleChangePrice}
                      />
                      <label>250-500</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="range-500-1000"
                        value="500-1000"
                        checked={selectedRange.includes("500-1000")}
                        onChange={handleChangePrice}
                      />
                      <label>500-1000</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="range-500-1000"
                        value="1000-above"
                        checked={selectedRange.includes("1000-above")}
                        onChange={handleChangePrice}
                      />
                      <label>1000-above</label>
                    </div>
                  </Box>
                </div>
                <div className="btn-wrapper">
                  <Button className="btn btn-primary" onClick={handleFilter}>
                    Filter
                  </Button>
                  <Button className="btn btn-secondary" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item md={9} className="product-list-grid">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography className="heading">{title}</Typography>
                <Box className="filter-dropdown" onClick={handleFilterOpen}>
                  <Typography sx={{ marginRight: "6px" }}>Filter</Typography>
                  <FiChevronDown />
                </Box>
              </Box>
              <div className="product-list">
                {searchResult.length > 0 ? (
                  searchResult.map((item) => (
                    <ProductItem key={item.id} product={item} />
                  ))
                ) : (
                  <div> No Product Found</div>
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
