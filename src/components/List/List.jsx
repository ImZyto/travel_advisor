import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = () => {
  //const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Cool Place'},
    { name: 'Best Beer'},
    { name: 'Best Steak'},
    { name: 'Cool Place'},
    { name: 'Best Beer'},
    { name: 'Best Steak'},
    { name: 'Cool Place'},
    { name: 'Best Beer'},
    { name: 'Best Steak'},
  ];



//   useEffect(() => {
//     setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
//   }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restauracje, hotele i atrakcje wokół Ciebie</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Typ</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restauracje</MenuItem>
              <MenuItem value="hotels">Hotele</MenuItem>
              <MenuItem value="attractions">Attrakcje</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Ocena</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">Wszystkie</MenuItem>
              <MenuItem value="3">Powyżej 3.0</MenuItem>
              <MenuItem value="4">Powyżej 4.0</MenuItem>
              <MenuItem value="4.5">Powyżej 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                    <PlaceDetails place={place} />
                </Grid>
              ))}
          </Grid>
    </div>
  );
};

export default List;
