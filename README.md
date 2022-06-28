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

## Available API Routes

### [Products Routes](#1-product-routes) 
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|----------------------------|
| [`GET/products/`](#a-get-list-of-all-products)    |Get list of all products| User + Admin | 
| [`POST/products/`](#b-post-a-new-product)     | Post a new product| Admin | 
| [`GET/products/:productId`](#c-get-details-of-a-particular-product)| Get details of a particular product. | User + Admin | 
| [`PUT/products/:productId`](#d-update-a-particular-product) | Update a particular product| Admin |
| [`DELETE/products/:productId`](#e-delete-a-particular-product) |Delete a particular product| Admin |



### [User Routes](#2-user-routes) 
| Routes        | Description           |Accessability       |
| ------------- |:-------------:|----------------------------|
| [`GET/users/`](#a-get-list-of-all-users)    |Get list of all users| Admin | 
| [`DELETE/user/`](#b-delete-a-user)     | Delete a user | Admin | 
| [`GET/users/me`](#c-get-details-of-a-loggedin-user)| Get details of a user which is logged in. | User + Admin | 
| [`GET/users/:userId`](#d-get-details-of-a-specific-user)| Get details of a user. | Admin |
| [`PUT/api/v1/me/update`](#e-update-loggedin-user-details) | Update a logged in user details| User |
| [`PUT/api/v1/password/update`](#f-update-password-loggedin-user) |Update password for loggedin user| User |

