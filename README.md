# Book Review App

## About the App
This is a dynamic web application built for the Web Technologies module (4BUIS011C). It allows users to create, read, update, and delete book reviews with details like title, author, and genre. The app uses Express.js, EJS templating, and a simple file-based database.

## How to Run Locally
1. Clone the repository: `git clone <github-repo-link>`
2. Navigate to the project folder: `cd book-review-app`
3. Install dependencies: `npm install`
4. Start the server: `npm start` (or `npm run dev` for development with nodemon)


## Dependencies
- express: Web framework
- express-handlebars
- express-validator: Form validation
- nodemon: Development server (optional)

## Links
- GitHub Repository: <https://github.com/boburasroriy/book-review-app.git>
- Hosted Application: <https://organic-flying-secretary.glitch.me/>

## Project Structure
/book-review-app 
app.js # Main application file
package.json # Project configuration 
.gitignore # Git ignore file 
/public # Static files 
/images 
/javascripts # Client-side JS 
/styles # CSS files -  style.css 
/routes # Route definitions 
index.js # Main routes 
/views # EJS templates 
index.ejs # Homepage 
/controllers # Controller logic 
index.js # Main controllers 
/users # User controllers 
index.js # Main services  
