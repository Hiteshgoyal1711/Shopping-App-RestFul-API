# Shopping-Cart-RestFul-API

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
    
### Dependencies 
 - For dependencies refer Package.json


### For Testing (Postman)
- Postman extension can be used for testing !

## Available API Routes

### [Products Routes](#1-product-routes) 
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|----------------------------|
| [`GET/api/v1/products/`](#a-get-list-of-all-products)    |Get list of all products| User | 
| [`POST/api/v1/admin/product/new`](#b-post-a-new-product)     | Post a new product| Admin | 
| [`GET/api/v1/products/:productId`](#c-get-details-of-a-particular-product)| Get details of a particular product. | User | 
| [`PUT/api/v1/admin/products/:productId`](#d-update-a-particular-product) | Update a particular product| Admin |
| [`DELETE/api/v1/admin/products/:productId`](#e-delete-a-particular-product) |Delete a particular product| Admin |



### [User Routes](#2-user-routes) 
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|----------------------------|
| [`GET/api/v1/admin/users`](#a-get-list-of-all-users)    |Get list of all users| Admin | 
| [`DELETE/api/v1/admin/users/:userId`](#b-delete-a-user)     | Delete a user | Admin | 
| [`GET/users/:userId`](#c-get-details-of-a-specific-user)| Get details of a user. | Admin |
| [`PUT/api/v1/admin/users/:userId`](#d-update-user-role-to-admin) |Update User Role to admin| Admin |
| [`GET/users/me`](#e-get-details-of-a-loggedin-user)| Get details of a user which is logged in. | User | 
| [`PUT/api/v1/me/update`](#f-update-loggedin-user-details) | Update a logged in user details| User |
| [`PUT/api/v1/password/update`](#g-update-password-loggedin-user) |Update password for logged in user| User |



### [Order Routes](#3-order-routes)
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|----------------------------|
| [`GET/api/v1/orders/me`](#a-get-list-of-all-orders)    | Get all orders by the logged in user | User |
| [`POST/api/v1/order/new`](#b-post-a-new-order)     | Post a new order for the logged in user | User |
| [`GET/api/v1/order/:orderId`](#c-get-details-of-a-particular-order-for-loggedin-user)| Fetch details of a particular order of loggedin user| User |
| [`DELETE/api/v1/admin/order/:orderId`](#d-delete-a-particular-order) | Deletes a particular order | Admin |
| [`PUT/api/v1/admin/order/:orderId`](#e-update-a-particular-order-status) | Updates a particular order Status| Admin |
| [`GET/api/v1/admin/orders`](#f-get-list-of-all-orders-by-all-users)    | Get all orders by all users | Admin |



### [Authentication Routes](#4-authentication-routes)
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|----------------------------|
| [`PUT/api/v1/register`](#a-register-a-new-user)    | Register a New User | User |
| [`POST/api/v1/login`](#b-Login-a-user)     | Login a User | User |
| [`POST/api/v1/logout`](#c-logout-a-user)| Logout a User | User |
| [`POST/api/v1/password/forgot`](#d-sends-an-email-with-reset-link) | Sends An Email with Reset Link | User |
| [`PUT/api/v1/password/reset/:resetId`](#e-update-password-for-a-user) | Updates user password| User |








