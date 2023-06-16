import { TextField, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export default function Search() {
  const {
    setSearchText,
    setSelectedCategory,
    setSelectedMaterial,
    setSelectedRange,
  } = useContext(GlobalContext);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setText(e.target.value);
    // console.log(setText);
  };

  const handleSubmitText = (e) => {
    debugger;
    e.preventDefault();
    setSearchText(text);
    navigate("/products", { state: { setSearchText: text } });
    setSelectedCategory([]);
    setSelectedMaterial([]);
    setSelectedRange([]);
    setText("");
  };
  // useEffect(() => {
  //   debugger;
  //   setSearchText(text);
  // }, [text]);

  return (
    <>
      <form onSubmit={handleSubmitText}>
        {/* <TextField
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        /> */}
        <Paper
          className="search-wrap"
          component="div"
          sx={{ display: "flex", alignItems: "center", p: 1 }}
        >
          <InputBase
            value={text}
            onChange={handleSearchChange}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
          <button
            type="submit"
            className="icon"
            // component={Link}
            // to={{ pathname: "/products", state: { setSearchText: text } }}
          >
            <BiSearchAlt />
          </button>
        </Paper>
      </form>
    </>
  );
}
