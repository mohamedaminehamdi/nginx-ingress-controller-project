const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

const appName = process.env.APP_NAME
// Serve static files from assets folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
