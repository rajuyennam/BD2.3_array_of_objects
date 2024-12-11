const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
let products = [
  { name: 'laptop', price: 50000, category: 'electronics' },
  { name: 'mobile', price: 20000, category: 'electronics' },
  { name: 'freeze', price: 90000, category: 'electronics' },
  { name: 'mixer', price: 1000, category: 'home appliance' },
  { name: 'chair', price: 4000, category: 'home appliance' },
];

let cars = [
  { make: 'tata', model: 'nexon', mileage: 40000 },
  { make: 'hynndai', model: 'i10', mileage: 50000 },
  { make: 'maruti', model: 'swift', mileage: 30000 },
];

let movies = [
  { title: 'Bahubali', genere: 'action', rating: 8 },
  { title: 'devara', genere: 'drama', rating: 6 },
  { title: 'hera pheri', genere: 'comedy', rating: 7 },
];

let orders = [
  { orderid: 101, customername: 'raju', status: 'shipped' },
  { orderid: 102, customername: 'teju', status: 'pending' },
  { orderid: 103, customername: 'yennam', status: 'shipped' },
];
function filterProductsByCategory(productObj, category) {
  return productObj.category === category;
}

app.get('/products/category/:category', (req, res) => {
  let category = req.params.category;
  let results = products.filter((productObj) =>
    filterProductsByCategory(productObj, category)
  );
  res.json(results);
});

function filterCarsbyMileage(carObj, mileage) {
  return carObj.mileage < mileage;
}

function filterMoviesByRating(movieObj, rating) {
  return movieObj.rating >= rating;
}

app.get('/movies/rating/:rating', (req, res) => {
  let rating = req.params.rating;
  let results = movies.filter((movieObj) =>
    filterMoviesByRating(movieObj, rating)
  );
  res.json(results);
});
app.get('/cars/mileage/:mieage', (req, res) => {
  let mileage = req.params.mieage;
  let results = cars.filter((carObj) => filterCarsbyMileage(carObj, mileage));
  res.json(results);
});

function filterOrdersByStatus(orderObj, status) {
  return orderObj.status === status;
}

app.get('/orders/status/:status', (req, res) => {
  let status = req.params.status;
  let results = orders.filter((orderObj) =>
    filterOrdersByStatus(orderObj, status)
  );
  res.json(results);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
