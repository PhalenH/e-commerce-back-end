# E-commerce-back-end


## Table of Contents
- [Description](#Description)
- [Video](#Video)
- [Installation](#Installation)
- [Usage](#Usage)
- [Questions](#Questions)

## Description: 
The purpose of this assignment was to modify starter code by completing database models, use dotenv package to store user's sql information, syncing sequalize, and back-end routes for cateogires, tags, and products. This will allow a user to use the backend to test their routes and make sure everything works including: getting all items and associated items in the database, getting a singular item in the databse, creating an item, updating an item, and deleting an item. The acceptance criteria is as follows:

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

```

## Video:
[Employee Tracker Walkthrough Vdieo](https://youtu.be/AK0WwaCwgI0)

## Installation: 
- Download or clone the repo from GitHub

## Usage: 
Once downloaded
- A user should open the .env file and change the rootpassword to their own
- Then a user will open a new terminal
- Type in "npm i" to install dependencies
- Type in "mysql -u root -p"
    - Type in their mysql password
- Write the following lines in the mysql terminal
    - "source db/schema.sql" and hit enter
    - "Quit" and hit enter
- In the same terminal or a new terminal 
    - Type in "npm run seed"
    - Then type in "node server.js"
- At this point your database is running, populated with seeds, and now your server is running as well.

## Contributing: 
  There a no plans for public contribution at this time.

## Questions
- If you have any questions, email me at pchaze@yahoo.com
- Checkout my GitHub profile [here](https://github.com/PhalenH)



