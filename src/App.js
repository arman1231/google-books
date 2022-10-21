
import "./App.scss";
import axios from "axios";
import Searchpanel from "./Searchpanel";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Book from "./Book";
 

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    // axios
    //   .get("https://www.googleapis.com/books/v1/volumes?q=Dostoevsky")
    //   .then((res) => {
    //     console.log(res.data);
    //     setItems(res.data.items);
    //   });
  }, []);

  function handleChangeInput(e) {
    setSearch(e.target.value);
  }
  function handleSerach(req) {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${req}`)
      .then((res) => {
        setItems(res.data.items);
      });
  }
  function handleButtonClick(e) {
    e.preventDefault();
    handleSerach(search);
    setSearch("");
  }
  return (
    <div className="page">
      <header className="header">
        <h1 className="heading">Smart Book <span className="blue">S</span><span className="red">e</span><span className="yellow">a</span><span className="blue">r</span><span className="green">c</span><span className="red">h</span></h1>
        <form className="search-controls">
          {/* <input className='search-input' value={search} onChange={handleChangeInput} type='text' /> */}
          <TextField
            value={search}
            onChange={handleChangeInput}
            id="outlined-search"
            label="Search field"
            type="search"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
          <Button
            onClick={handleButtonClick}
            type="submit"
            variant="contained"
            style={{ padding: "15px 25px 15px 25px", margin: 20 }}
            disabled={search.length > 0 ? false : true}
          >
            Search
          </Button>
          {/* <button onClick={handleButtonClick} className='button' type='submit'>Search = )</button> */}

          <div className="filters">
            {/* <label>Categories</label>
            <select className='select'>
              <option>test 1</option>
              <option>test 1</option>
              <option>test 1</option>
            </select> */}
            <FormControl>
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort by"
                onChange={handleChangeSort}
                style={{ backgroundColor: "white", width: 200, marginBottom: 20 }}
              >
                <MenuItem value={10}>Relevance</MenuItem>
                <MenuItem value={20}>Newest</MenuItem>
              </Select>
            </FormControl>
            {/* <label>Sort by</label>
            <select className="select">
              <option>test 2</option>
              <option>test 2</option>
              <option>test 2</option>
            </select> */}
          </div>
        </form>
      </header>
      <ul className="booklist">
        {items.length > 0 ? items.map((el) => {
          console.log(el.volumeInfo);
          return (
            <Link key={el.id} className="link" to={`/books/${el.id}`}>
              <li className="bookitem">
                <h3>
                  <strong>{el.volumeInfo.title}</strong>
                </h3>
                <img
                  className=""
                  src={el.volumeInfo.imageLinks !== undefined ? el.volumeInfo.imageLinks.thumbnail : ''}
                 alt=""></img>
                <span className="category">
                  <strong>Category: </strong>
                  {el.volumeInfo.categories
                    ? el.volumeInfo.categories.map((el) => el)
                    : ""}
                </span>
                <span className="rating">
                  <strong>Rating: </strong>
                  {el.volumeInfo.averageRating
                    ? el.volumeInfo.averageRating
                    : "None"}
                </span>
              </li>
            </Link>
          );
        }) : 'Please make a search...'}
      </ul>
    </div>
  );
}

export default App;
