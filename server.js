const express = require('express');
const PORT = 3001;
const viewRoutes = require('./routes/view')
const apiRoutes = require('./routes/api')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(viewRoutes)
app.use(apiRoutes)
app.listen(PORT, () => console.log ('app running' +PORT))