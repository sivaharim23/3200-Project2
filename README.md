# 3200-Project2

# HouseTab — Roommate Expense Tracker (MongoDB)

HouseTab is a document-based database system designed to manage shared household 
expenses among roommates. It tracks who paid what, splits costs among household 
members, records settlements, and categorizes spending over the lifecycle of a 
shared lease.

## Team Members
- Sivahari Mohanraj
- Hasith Kadiyala

## Project Tasks

### Task 1 — Requirements Document (5 pts)
Describes the rules of the database in problem domain language, identifying 
nouns and actions. See `Requirements Project 2.pdf`.

### Task 2 — Logical Data Model (15 pts)
Adapted logical data model with hierarchical collections for MongoDB.
Main collections are Users and Households, from which all other data relates.
See `logical_model.png`.

### Task 3 — Collections Definition (10 pts)
Defines the main MongoDB collections with example JSON objects.
Collections: users, households, expenses, settlements, categories.
See `collections.json`.

### Task 4 — Test Data (15 pts)
Mock data generated using Mockaroo and imported into MongoDB.
See the `/data` folder for all JSON files.

#### Dump File
A mongodump could not be generated due to installation issues.
The data can be fully restored using the JSON files in the /data
folder with the mongoimport commands provided below.

#### How to Import Data

##### Option 1: mongoimport
mongoimport --db housetab --collection users --file data/users.json --jsonArray
mongoimport --db housetab --collection households --file data/households.json --jsonArray
mongoimport --db housetab --collection expenses --file data/expenses.json --jsonArray
mongoimport --db housetab --collection settlements --file data/settlements.json --jsonArray
mongoimport --db housetab --collection categories --file data/categories.json --jsonArray

##### Option 2: MongoDB Compass
1. Open Compass and connect to your MongoDB instance
2. Create a new database called `housetab`
3. For each collection click Add Data → Import File
4. Select the corresponding JSON file from the /data folder

### Task 5 — Queries (30 pts)
Five queries demonstrating database functionality:
- `query1.js` — Aggregation: Total expenses per household
- `query2.js` — Complex search: Find expenses with multiple logical connectors
- `query3.js` — Count: Count all expenses paid by a specific user
- `query4.js` — Update: Flip isPaid boolean for a specific expense
- `query5.js` — Find: All settlements for a specific household sorted by amount

## How to Run
1. Install MongoDB and MongoDB Compass
2. Start your MongoDB instance
3. Create a new database called `housetab`
4. Import the data using the instructions in Task 4
5. Open MongoDB Compass or mongosh and run any query file