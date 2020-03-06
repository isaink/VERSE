# REST API ENPOINTS: *VERSE PROJECT*

Thank you for your interested in VERSE. 
A personal project that it helping me to put into practice what I learned in this full stack journey.

HTML application

### Reading the Root API

`GET:  loads React web app  --> https://verse.com/ `

- METHOD: `GET`  
- URL Root:  `https://verse.com/`
- ENDPOINTS:  `none`
- DESCRIPTION: `It makes a Get request to Loads React web app.`
- PARAMETERS: `This endpoint doesn't have any url params.`

### USER 

User Authentication: 
`LOG OUT User`
`LOG IN User`
`IS LOGGED IN User`

`GET: Get all user  --> /user/ `
- METHOD: `GET`  
- ENDPOINTS:  `/user/`
- DESCRIPTION: `Fetches all users`
- PARAMETERS: `This endpoint doesn't have any url params.`

`GET: Get single user  --> /user/:id:  `
- METHOD: `GET`  
- ENDPOINTS:  `/user/:id:`
- DESCRIPTION: `Fetches single user details`
- PARAMETERS: `{id}`

`PATCH: Update single user -> /user/:id: `
- METHOD: `PATCH`  
- ENDPOINTS:  `/user/:id:`
- DESCRIPTION: `Edit single user details & allows the user to update their profile`
- PARAMETERS: `{id}`

`DELETE: Delete single user -> /user/:id: `
- METHOD: `DELETE`  
- ENDPOINTS:  `/user/:id:`
- DESCRIPTION: `Delete single user details`
- PARAMETERS: `{id}`

### BOOKS

`GET: Get all the books -> /books`
- METHOD: `GET`  
- ENDPOINTS:  `/books`
- DESCRIPTION: `Fetches all the books`
- PARAMETERS: `This endpoint doesn't have any url params.`

`GET: Get books by Autor -> /books/autor/:id`
- METHOD: `GET`  
- ENDPOINTS:  `/books/autor/:id`
- DESCRIPTION: `Fetches all books by autor`
- PARAMETERS: `{id}`

`GET: Get books by User -> /books/user/:id`
- METHOD: `GET`  
- ENDPOINTS:  `/books/user/:id`
- DESCRIPTION: `Fetches all books by single user`
- PARAMETERS: `{id}`

`POST: Adding new book -> /books`
- METHOD: `POST`  
- ENDPOINTS:  `/books/`
- DESCRIPTION: `Create and added a new book`
- PARAMETERS: `This endpoint doesn't have any url params.`

### QUOTES

`POST: Create a new Quote for single book -> /book/:id:/quote/`
- METHOD: `POST`  
- ENDPOINTS:  `/book/:id:/quote/`
- DESCRIPTION: `Create a new Quote for a single book`
- PARAMETERS: `{id}`

`GET: Get all Quotes for single book -> /book/:id:/quote/`
- METHOD: `GET`  
- ENDPOINTS:  `/book/:id:/quote/`
- DESCRIPTION: `Fetches all Quotes for a single book`
- PARAMETERS: `{id}`

`DELETE: Delete Quote from the book -> /book/:id:/quote/:id_quote:`
- METHOD: `DELETE`  
- ENDPOINTS:  `/book/:id:/quote/:id_quote:`
- DESCRIPTION: `Delete single Quote from the book`
- PARAMETERS: `{id} & {id_quote}`

`PATCH: Updates Quote from the book -> /book/:id:/quote/:id_quote:`
- METHOD: `PATCH`  
- ENDPOINTS:  `/book/:id:/quote/:id_quote:`
- DESCRIPTION: `Updates single Quote from the book`
- PARAMETERS (URL Params): `{id} & {id_quote}`





