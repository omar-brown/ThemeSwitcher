// Require
const express = require('express');
const path = require('path');

// Set up server constants
const app = express();
const router = express.Router();
const port = 3000;

// Set up app paths
const rootPath = path.join(__dirname, 'public');
const publicPaths = {
  index: path.join(rootPath, 'index.html'),
  app: path.join(rootPath, 'app.js'),
  styles: path.join(rootPath, 'styles.css'),
  image: path.join(rootPath, 'thunder.png'),
};

// Configure HTTP GET requests
router.get('/', (req, res) => res.sendFile(publicPaths.index));
router.get('/app.js', (req, res) => res.sendFile(publicPaths.app));
router.get('/styles.css', (req, res) => res.sendFile(publicPaths.styles));
router.get('/thunder.png', (req, res) => res.sendFile(publicPaths.image));

// Mount the router on the app
app.use('/', router);

// Create the server
const server = app.listen(port, () => {
  console.log(`App server is running on port ${port}`);
});
