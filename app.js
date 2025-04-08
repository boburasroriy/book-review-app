const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set Handlebars as view engine
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'layout', // Use 'layout.hbs' as the default layout
  layoutsDir: path.join(__dirname, 'views') // Look for layouts in 'views/' instead of 'views/layouts/'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});