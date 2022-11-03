# Dog-Store
## Pick your new canine companion

Online storefront created with React, Node, Express, and Stripe.

### Docker Compose file included to build containers for frontend & backend
### $ docker compose up 

<img src="/stripestore/src/assets/dogStoreGif.gif" alt="Dog Store">

## Frontend

Dog Store storefront frontend for the end userbase, using basic React Bootstrap components.

The main page is dynamically rendered from an array of dogs mapped to product cards.

React Context API is utilized to store the state of the shopping cart which.

## Backend

The backend is an Express server that pushes the line item data from the cart to Stripe.
