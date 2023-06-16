import { Container, Grid, Button, Typography } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ProductItem from "../components/ProductItem";
import { useLocation } from "react-router-dom";

export default function Filter() {
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
  const location = useLocation();

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
    debugger;
    const filteredItems = {
      category: selectedCategory,
      material: selectedMaterial,
      price: selectedRange,
    };
    filterProduct(filteredItems); // Call filterProduct from the context
    setSearchText("");
    //searchText("");
  };
  return (
    <>
      <div className="sidebar-filter">
        <div className="list category-list">
          <Typography className="title">Category</Typography>
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
        </div>
        <div className="list material-list">
          <Typography className="title">Material</Typography>
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
        </div>

        <div className="list price-list">
          <Typography className="title">Price</Typography>
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
        </div>
        <Button className="btn btn-secondary" onClick={handleFilter}>
          Filter
        </Button>
      </div>
    </>
  );
}
