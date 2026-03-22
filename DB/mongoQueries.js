//Query to fetch all users who live in either 'Delhi' or 'Mumbai'.
db.getCollection('users').find({'address.city':{'$in':['Delhi','Chennai']}})

//Find documents where status = 'active' and score > 80.

db.users.find({
  status: "active",
  score: { $gt: 80 }
})

db.users.find({
  $and: [
    { status: "active" },
    { score: { $gt: 80 } }
  ]
})


//Query to fetch only name and email fields, excluding _id.
db.users.find(
  {},                     // Filter: {} means fetch all documents
  { name: 1, email: 1, _id: 0 }  // Projection: include name & email, exclude _id
)

//Write a query to sort users by age descending and limit results to 5.
db.getCollection('users').find().sort({age:-1}).limit(5)

//Query to update the email of a specific user by _id

db.users.updateOne(
  { _id: ObjectId("USER_ID_HERE") },   // Filter: match the specific user by _id
  { $set: { email: "newemail@example.com" } }  // Update: set the new email
)


//Write a query to increment salary by 5000 for all users with role developer.

db.users.updateMany(
  { role: "developer" },          // Filter: select developers
  { $inc: { salary: 5000 } }      // Update: increment salary by 5000
)

// Query to delete all inactive users.
db.users.deleteMany({ status: "inactive" })


//Query to find users where skills array contains 'Node.js'.
db.getCollection('users').find({'skills':'Node.js'})

//Query to fetch users where skills array has both 'Node.js' and 'React'.
db.users.find({ skills: { $all: ["Node.js", "React"] } })


//Write an aggregation pipeline to group orders by customer_id and calculate total spending.
db.orders.aggregate([
  {
    $group: {
      _id: "$customer_id",             // Group by customer_id
      totalSpending: { $sum: "$amount" }  // Sum the 'amount' field for each customer
    }
  }
])


//Write an aggregation query to get average rating per product from a reviews collection.
db.reviews.aggregate([
  {
    $group: {
      _id: "$product_id",             // Group by product_id
      averageRating: { $avg: "$rating" }  // Calculate average rating
    }
  }
])

//Query to lookup (join) customers with their orders.
db.customers.aggregate([
  {
    $lookup: {
      from: "orders",          // Collection to join with
      localField: "_id",       // Field from customers
      foreignField: "customer_id", // Field from orders
      as: "orders"             // Name of the array field to store matched orders
    }
  }
])


// Write an aggregation query to get the top 3 products by sales.
db.orders.aggregate([
  {
    $group: {
      _id: "$product_id",           // Group by product
      totalSales: { $sum: "$amount" } // Sum the sales amount
    }
  },
  {
    $sort: { totalSales: -1 }       // Sort by totalSales descending
  },
  {
    $limit: 3                       // Get only the top 3
  }
])


//Write a query to find all users where phone number is missing.
db.users.find({ phone: { $exists: false } })

db.users.find({ phone: { $in: [null, undefined] } })


// Write a query to create a text index on description field and perform a text search for 'biryani'.
db.restaurants.createIndex({ description: "text" })

db.restaurants.find({ $text: { $search: "biryani" } })



// create index on email
 db.users.createIndex({ email: 1 })  // 1 for ascending index




 // Write a query to find all documents created in the last 7 days.

 const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

db.users.find({ createdAt: { $gte: sevenDaysAgo } })

//////
db.collectionName.find({
  createdAt: {
    $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  }
})



 //Query to rename a field in all documents.
db.users.updateMany(
  {},
  { $rename: { "oldField": "newField" } }
)


//Write an aggregation query to get the top 3 products by sales.
db.orders.aggregate([
 $looku:{
  $from:'customers',
  $localField:'cust_id',
  $foreignField:'customer_id'
 }
]);


//Write a query to count how many indexes exist on a given table.
 db.collectionName.getIndexes().length



//Query to find all users with name starting with 'A' in mongo
db.users.find({ name: { $regex: /^A/, $options: 'i' } })  //options is to distinguis from A or a


//Write a query to find all documents in a users collection where age > 25.

db.users.find({ age: { $gt: 25 } })








//  Query to find documents with nested field address.city = 'Chennai'.

   

  
