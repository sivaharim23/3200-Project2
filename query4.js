// Query 4: Update - Flip isPaid boolean


db.expenses.updateOne(
  { _id: 1 },
  { $set: { isPaid: true } }
)
