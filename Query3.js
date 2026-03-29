// Query 3: Count - Count expenses paid by a specific user


db.expenses.countDocuments({
  paidByUserID: 1
})
