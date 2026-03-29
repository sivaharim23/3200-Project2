// Query 5: Find all settlements for a household


db.settlements.find({
  householdID: 1
}).sort({ amount: -1 })
