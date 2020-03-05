

# REST API ENPOINTS - VERSE PROJECT

Thank you for your interested in VERSE. 
A personal project that it helping me to put into practice what I learned in this full stack journey.

HTML application

### Reading the Root API

`GET:  loads React web app  --> https://verse.com/ `

- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/`
- DESCRIPTION: `It makes a Get request to Loads React web app.`
- PARAMETERS: `This endpoint doesn't have any parameters.`


### USER 
User are using GET, PATH & DELETE.

`GET: Get all user  --> /user/ `
- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/user`
- DESCRIPTION: `Fetches all users`
- PARAMETERS: `n/a`

`GET: Get single user  --> /user/:id:  `
- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/user/:id:`
- DESCRIPTION: `Fetches single user details`
- PARAMETERS: `{id}`

`PATCH: Update single user -> /user/:id: `
- METHOD: `PATCH`  
- ENDPOINTS:  `https://verse.com/user/:id:`
- DESCRIPTION: `Update single user details`
- PARAMETERS: `{id}`

`DELETE: Delete single user -> /user/:id: `
- METHOD: `DELETE`  
- ENDPOINTS:  `https://verse.com/user/:id:`
- DESCRIPTION: `Delete single user details`
- PARAMETERS: `{id}`

### BOOKS
Only use GET & POST

`GET: Get all the books -> /books`
- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/books`
- DESCRIPTION: `Fetches all the books`
- PARAMETERS: `n/a`

`GET: Get books by Autor -> /books/autor/:id`
- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/books/autor/:id`
- DESCRIPTION: `Fetches all books by autor`
- PARAMETERS: `{id}`

`GET: Get books by User -> /books/user/:id`
- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/books/user/:id`
- DESCRIPTION: `Fetches all books by single user`
- PARAMETERS: `{id}`

`POST: Adding new book -> /books`
- METHOD: `POST`  
- ENDPOINTS:  `https://verse.com/books/`
- DESCRIPTION: `Create and added a new book`
- PARAMETERS: `n/a`

### QUOTES

`POST: Create a new Quote for single book -> /book/:id:/quote/`
- METHOD: `POST`  
- ENDPOINTS:  `https://verse.com/book/:id:/quote/`
- DESCRIPTION: `Create a new Quote for a single book`
- PARAMETERS: `{id}`

`GET: Get all Quotes for single book -> /book/:id:/quote/`
- METHOD: `GET`  
- ENDPOINTS:  `https://verse.com/book/:id:/quote/`
- DESCRIPTION: `Fetches all Quotes for a single book`
- PARAMETERS: `{id}`

`DELETE: Delete Quote from the book -> /book/:id:/quote/:id_quote:`
- METHOD: `DELETE`  
- ENDPOINTS:  `https://verse.com/book/:id:/quote/:id_quote:`
- DESCRIPTION: `Delete single Quote from the book`
- PARAMETERS: `{id} & {id_quote}`

`PATCH: Updates Quote from the book -> /book/:id:/quote/:id_quote:`
- METHOD: `PATCH`  
- ENDPOINTS:  `https://verse.com/book/:id:/quote/:id_quote:`
- DESCRIPTION: `Updates single Quote from the book`
- PARAMETERS: `{id} & {id_quote}`





