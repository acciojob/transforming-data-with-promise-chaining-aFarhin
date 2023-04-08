// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here


const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const number = input.value;
  Promise.resolve(number)
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number);
        }, 2000);
      });
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number);
        }, 2000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number * 2);
        }, 1000);
      });
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number - 3);
        }, 1000);
      });
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number / 2);
        }, 1000);
      });
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number + 10);
        }, 1000);
      });
    })
    .then((number) => {
      output.textContent = `Final Result: ${number}`;
    })
    .catch((error) => {
      output.textContent = `Error: ${error.message}`;
    });
});



app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
