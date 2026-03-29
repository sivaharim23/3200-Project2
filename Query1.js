// Query 1: Aggregation - Total expenses per household


db.expenses.aggregate([
  {
    $addFields: {
      numericAmount: {
        $toDouble: {
          $substrCP: ["$totalAmount", 1, 10]
        }
      }
    }
  },
  {
    $group: {
      _id: "$householdID",
      totalExpenses: { $sum: "$numericAmount" },
      numberOfExpenses: { $count: {} }
    }
  },
  { $sort: { totalExpenses: -1 } }
])