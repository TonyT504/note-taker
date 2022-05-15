const express = require('express');
const PORT = process.env.PORT || 3001;
const viewRoutes = require('./routes/view');
const apiRoutes = require('./routes/api');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));
app.use(viewRoutes);
app.use(apiRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})
app.listen(PORT, () => console.log ('app running' + PORT));