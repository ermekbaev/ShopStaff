import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { fetchByParams } = useProducts();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="search..."
          variant="standard"
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel value="Стол" control={<Radio />} label="Стол" />
              <FormControlLabel value="Стул" control={<Radio />} label="Стул" />
              <FormControlLabel value="Шкаф" control={<Radio />} label="Шкаф" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("price_lte", e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="all" />

            <FormControlLabel
              value="100"
              control={<Radio />}
              label="less than 1000$"
            />
            <FormControlLabel
              value="250"
              control={<Radio />}
              label="less than 2500$"
            />
            <FormControlLabel
              value="500"
              control={<Radio />}
              label="less than 5000$"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
