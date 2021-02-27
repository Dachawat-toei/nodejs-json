// require('dotenv').config
// const { config } = require('dotenv/types');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors({ origin: true}))

 
app.get('/', (req, res ) =>  {
  res.send('Hello World');
});

app.post('/login', (req,res) => {
  console.log(req.body);
  if (req.body.username === 'dachawat' && req.body.password === '11111') {
    res.send({
      status: "success",
      message: "LOGIN_COMPLETE"
      
    });
    return; 
  }
  res.send({
    status: 'fail',
    message: 'LOGIN_FAIL'
  })
})

app.listen(port, () => {
  console.log("server is running on port:", port);
});