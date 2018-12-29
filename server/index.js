const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const clients = require('./routes/api/posts');
app.use('/api/posts', clients);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
