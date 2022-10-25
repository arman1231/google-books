import React from 'react'

export default function Header() {
  return (
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
  )
}
