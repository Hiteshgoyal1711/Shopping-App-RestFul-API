# Shopping-Cart-RestFull-API

RESTful API for shopping where you can add/delete your product and order any product after authorization.

#### DESCRIPTION

- Built a REST Api in Node.js using Node.js + MongoDB.
- JWT for Authetication and Authorization.

#### BASIC REQUIREMENTS

- NodeJs
- ExpressJs
- MongoDB
- Postman

#### INSTALLATION INSTRUCTIONS
-   Clone or download the repo. into your local system.
-   Cd into that root folder you just cloned locally.
-   install all dependencies which are written in the packet.json file, type
    ```
    npm install
    ```
-   Now type
    ```
    npm start
    ```
    will start a server !
    
    App should now be running on **localhost:3000**

## Available API Routes
### [Products Routes](#1-product-routes) 
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|---------------------|
| [`GET/products/`](#a-get-list-of-all-products)    |Get list of all products| User + Admin | 
| [`POST/products/`](#b-post-a-new-product)     | Post a new product| Admin | 
| [`GET/products/:productId`](#c-get-details-of-a-particular-product)| Get details of a particular product. | User + Admin | 
| [`PATCH/products/:productId`](#d-update-a-particular-product) | Update a particular product| Admin |
| [`DELETE/products/:productId`](#e-delete-a-particular-product) |Delete a particular product| Admin |




