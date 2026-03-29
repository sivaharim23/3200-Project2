// Query 2: Complex search - Find Rent or Groceries expenses


db.expenses.find({
  $or: [
    { title: "Rent" },
    { title: "Groceries" }
  ],
  $and: [
    { paidByUserID: { $exists: true } },
    { householdID: { $exists: true } }
  ]
})