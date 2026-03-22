// create table customers(
// _id INT PRIMARY KEY,
// customer_id INT,
// name varchar(100)
// ) 

const { group } = require("console")
const { groupBy, orderBy } = require("lodash")

// INSERT INTO customers  (_id,customer_id,name) VALUES ('01','123','Marty')

// INSERT INTO orders (order_id,cust_id,product,amount) VALUES ('16231','1223','POCOX5','23000')

// ALTER TABLE customers
// ADD UNIQUE (customer_id);

// ALTER TABLE customers
// ADD city varchar(100);  to add new column

//ALTER TABLE customers DROP COLUMN _id    to delete column



//TO KNOW THE DETAILS OF ANY TABLE
SELECT 
    column_name,
    data_type,
    character_maximum_length,
    numeric_precision,
    numeric_scale,
    is_nullable,
    column_default
FROM 
    information_schema.columns
WHERE 
    table_name = 'departments'
    AND table_schema = 'public'
    AND column_name IN ('department_id', 'department_name')
ORDER BY 


ALTER TABLE table_name
CHANGE COLUMN old_column_name new_column_name data_type;  //to change column name


// CREATE TABLE orders (
// order_id INT,
// cust_id INT PRIMARY KEY,
// product varchar(100),
// amount  INT,
// FOREIGN KEY (cust_id) REFERENCES customers(customer_id)
// )

// select*from customers
// select*from orders


INSERT INTO movies
    (title, genre, director, main_cast, release_date, duration_minutes, language, country, rating, description, budget, box_office, is_active, created_at, updated_at)
VALUES
    ('Inception', 'Sci-Fi', 'Christopher Nolan', 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page', '2010-07-16', 148, 'English', 'USA', 8.8, 'A thief who steals corporate secrets through dream-sharing technology.', 160000000, 825532764, TRUE, now(), now()),
    ('The Godfather', 'Crime', 'Francis Ford Coppola', 'Marlon Brando, Al Pacino, James Caan', '1972-03-24', 175, 'English', 'USA', 9.2, 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.', 6000000, 246120974, TRUE, now(), now()),
    ('Pulp Fiction', 'Crime', 'Quentin Tarantino', 'John Travolta, Uma Thurman, Samuel L. Jackson', '1994-10-14', 154, 'English', 'USA', 8.9, 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.', 8000000, 213928762, TRUE, now(), now()),
    ('The Dark Knight', 'Action', 'Christopher Nolan', 'Christian Bale, Heath Ledger, Aaron Eckhart', '2008-07-18', 152, 'English', 'USA', 9.0, 'Batman faces the Joker, a criminal mastermind who unleashes chaos.', 185000000, 1004558444, TRUE, now(), now()),
    ('Forrest Gump', 'Drama', 'Robert Zemeckis', 'Tom Hanks, Robin Wright, Gary Sinise', '1994-07-06', 142, 'English', 'USA', 8.8, 'The life journey of Forrest Gump, a slow-witted but kind-hearted man.', 55000000, 678222284, TRUE, now(), now()),
    ('The Matrix', 'Sci-Fi', 'The Wachowskis', 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss', '1999-03-31', 136, 'English', 'USA', 8.7, 'A computer hacker learns the nature of his reality and his role in the war against its controllers.', 63000000, 466364845, TRUE, now(), now()),
    ('Gladiator', 'Action', 'Ridley Scott', 'Russell Crowe, Joaquin Phoenix, Connie Nielsen', '2000-05-05', 155, 'English', 'USA', 8.5, 'A former Roman General sets out to exact vengeance.', 103000000, 460583960, TRUE, now(), now()),
    ('Titanic', 'Romance', 'James Cameron', 'Leonardo DiCaprio, Kate Winslet', '1997-12-19', 195, 'English', 'USA', 7.8, 'A love story doomed by historical tragedy.', 200000000, 2187463944, TRUE, now(), now()),
    ('The Shawshank Redemption', 'Drama', 'Frank Darabont', 'Tim Robbins, Morgan Freeman', '1994-09-23', 142, 'English', 'USA', 9.3, 'Two imprisoned men bond over a number of years.', 25000000, 28341469, TRUE, now(), now()),
    ('The Lord of the Rings: The Return of the King', 'Fantasy', 'Peter Jackson', 'Elijah Wood, Viggo Mortensen, Ian McKellen', '2003-12-17', 201, 'English', 'USA', 8.9, 'The final confrontation between the forces of good and evil fighting for control of Middle-earth.', 94000000, 1146030912, TRUE, now(), now()),

    ('Fight Club', 'Drama', 'David Fincher', 'Brad Pitt, Edward Norton, Helena Bonham Carter', '1999-10-15', 139, 'English', 'USA', 8.8, 'An insomniac office worker and a soap maker form an underground fight club.', 63000000, 101209702, TRUE, now(), now()),
    ('Interstellar', 'Sci-Fi', 'Christopher Nolan', 'Matthew McConaughey, Anne Hathaway, Jessica Chastain', '2014-11-07', 169, 'English', 'USA', 8.6, 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.', 165000000, 677471339, TRUE, now(), now()),
    ('The Prestige', 'Mystery', 'Christopher Nolan', 'Hugh Jackman, Christian Bale, Scarlett Johansson', '2006-10-20', 130, 'English', 'USA', 8.5, 'Two magicians engage in a battle to create the ultimate illusion.', 40000000, 109676311, TRUE, now(), now()),
    ('The Lion King', 'Animation', 'Roger Allers & Rob Minkoff', 'Matthew Broderick, Jeremy Irons, James Earl Jones', '1994-06-24', 88, 'English', 'USA', 8.5, 'A young lion prince flees his kingdom only to learn the true meaning of responsibility.', 45000000, 968483777, TRUE, now(), now()),
    ('Jurassic Park', 'Sci-Fi', 'Steven Spielberg', 'Sam Neill, Laura Dern, Jeff Goldblum', '1993-06-11', 127, 'English', 'USA', 8.1, 'During a preview tour, a theme park suffers a major power breakdown causing cloned dinosaurs to run amok.', 63000000, 1029154474, TRUE, now(), now()),
    ('The Departed', 'Crime', 'Martin Scorsese', 'Leonardo DiCaprio, Matt Damon, Jack Nicholson', '2006-10-06', 151, 'English', 'USA', 8.5, 'An undercover cop and a mole in the police attempt to identify each other.', 90000000, 291465034, TRUE, now(), now()),
    ('Whiplash', 'Drama', 'Damien Chazelle', 'Miles Teller, J. K. Simmons', '2014-10-10', 106, 'English', 'USA', 8.5, 'A promising young drummer enrolls at a cut‑throat music conservatory.', 3300000, 48900000, TRUE, now(), now()),
    ('The Social Network', 'Biography', 'David Fincher', 'Jesse Eisenberg, Andrew Garfield', '2010-10-01', 120, 'English', 'USA', 7.7, 'The founding of Facebook and ensuing lawsuits.', 40000000, 224920315, TRUE, now(), now()),
    ('Parasite', 'Thriller', 'Bong Joon‑ho', 'Song Kang‑ho, Lee Sun‑kyun, Cho Yeo‑jeong', '2019-05-30', 132, 'Korean', 'South Korea', 8.6, 'Greed and class discrimination threaten the newly formed symbiotic relationship.', 11400000, 258794313, TRUE, now(), now()),
    ('Whisper of the Heart', 'Animation', 'Yoshifumi Kondō', 'Yoko Honna, Issei Takahashi', '1995-07-15', 111, 'Japanese', 'Japan', 8.0, 'A young girl aspiring to be a writer meets a boy whose family makes violins.', 0, 0, TRUE, now(), now()),
    ('Spirited Away', 'Animation', 'Hayao Miyazaki', 'Rumi Hiiragi, Miyu Irino', '2001-07-20', 125, 'Japanese', 'Japan', 8.6, 'During her family''s move to the suburbs, a sullen 10‑year‑old girl wanders into a world of gods, witches, and spirits.', 19000000, 355467427, TRUE, now(), now()),
    ('The Grand Budapest Hotel', 'Comedy', 'Wes Anderson', 'Ralph Fiennes, F. Murray Abraham', '2014-03-28', 100, 'English', 'USA', 8.1, 'A concierge teams up with a lobby boy to prove his innocence after a murder.', 25000000, 172900000, TRUE, now(), now()),
    ('Mad Max: Fury Road', 'Action', 'George Miller', 'Tom Hardy, Charlize Theron', '2015-05-15', 120, 'English', 'Australia', 8.1, 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.', 150000000, 378858340, TRUE, now(), now()),
    ('La La Land', 'Musical', 'Damien Chazelle', 'Ryan Gosling, Emma Stone', '2016-12-09', 128, 'English', 'USA', 8.0, 'A jazz pianist falls for an aspiring actress in Los Angeles.', 30000000, 446000000, TRUE, now(), now()),
    ('The Avengers', 'Action', 'Joss Whedon', 'Robert Downey Jr., Chris Evans, Scarlett Johansson', '2012-05-04', 143, 'English', 'USA', 8.0, 'Earth’s mightiest heroes must come together to stop Loki.', 220000000, 1518812988, TRUE, now(), now()),
    ('Guardians of the Galaxy', 'Action', 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista', '2014-08-01', 121, 'English', 'USA', 8.0, 'A group of intergalactic criminals must pull together to stop a fanatical warrior.', 170000000, 772776600, TRUE, now(), now()),
    ('Black Panther', 'Action', 'Ryan Coogler', 'Chadwick Boseman, Michael B. Jordan', '2018-02-16', 134, 'English', 'USA', 7.3, 'T’Challa returns home to Wakanda to take his place as king.', 200000000, 1346913161, TRUE, now(), now()),
    ('Django Unchained', 'Western', 'Quentin Tarantino', 'Jamie Foxx, Christoph Waltz, Leonardo DiCaprio', '2012-12-25', 165, 'English', 'USA', 8.4, 'A freed slave sets out to rescue his wife.', 100000000, 425368238, TRUE, now(), now()),
    ('The Wolf of Wall Street', 'Biography', 'Martin Scorsese', 'Leonardo DiCaprio, Jonah Hill', '2013-12-25', 180, 'English', 'USA', 8.2, 'Based on the true story of a stockbroker’s rise and fall.', 39200000, 392000000, TRUE, now(), now()),
    ('Inglourious Basterds', 'War', 'Quentin Tarantino', 'Brad Pitt, Christoph Waltz', '2009-08-21', 153, 'English', 'USA', 8.3, 'In Nazi-occupied France, a plan to assassinate Nazi leaders.', 70000000, 321455689, TRUE, now(), now()),
    ('The Silence of the Lambs', 'Thriller', 'Jonathan Demme', 'Jodie Foster, Anthony Hopkins', '1991-02-14', 118, 'English', 'USA', 8.6, 'A young FBI cadet must confide in an incarcerated cannibal.', 19000000, 272742922, TRUE, now(), now()),
    ('Saving Private Ryan', 'War', 'Steven Spielberg', 'Tom Hanks, Matt Damon', '1998-07-24', 169, 'English', 'USA', 8.6, 'Following the Normandy invasion, a group is sent to rescue a paratrooper.', 70000000, 482349603, TRUE, now(), now()),
    ('The Green Mile', 'Drama', 'Frank Darabont', 'Tom Hanks, Michael Clarke Duncan', '1999-12-10', 189, 'English', 'USA', 8.6, 'The lives of guards on death row are affected by a supernatural inmate.', 60000000, 286801374, TRUE, now(), now()),
    ('The Pianist', 'Biography', 'Roman Polanski', 'Adrien Brody', '2002-09-25', 150, 'English', 'France', 8.5, 'A Polish Jewish musician struggles to survive WWII.', 35000000, 120100000, TRUE, now(), now()),
    ('Braveheart', 'Biography', 'Mel Gibson', 'Mel Gibson, Sophie Marceau', '1995-05-24', 178, 'English', 'USA', 8.3, 'Scottish warrior leads revolt against English tyranny.', 72000000, 210000000, TRUE, now(), now()),
    ('The Social Network', 'Biography', 'David Fincher', 'Jesse Eisenberg, Andrew Garfield', '2010-10-01', 120, 'English', 'USA', 7.7, 'Story about the founding of Facebook.', 40000000, 224920315, TRUE, now(), now()),
    ('Memento', 'Mystery', 'Christopher Nolan', 'Guy Pearce, Carrie-Anne Moss', '2000-09-05', 113, 'English', 'USA', 8.4, 'A man with short-term memory loss attempts to track down his wife''s murderer', 9000000, 39723096, TRUE, now(), now()),
    ('The Great Gatsby', 'Drama', 'Baz Luhrmann', 'Leonardo DiCaprio, Tobey Maguire', '2013-05-10', 143, 'English', 'USA', 7.2, 'A writer observes the lavish life of his neighbor.', 105000000, 353600000, TRUE, now(), now()),
    ('Gone Girl', 'Thriller', 'David Fincher', 'Ben Affleck, Rosamund Pike', '2014-10-03', 149, 'English', 'USA', 8.1, 'A man becomes the prime suspect in the disappearance of his wife.', 61000000, 369330363, TRUE, now(), now()),
    ('The Hunger Games', 'Adventure', 'Gary Ross', 'Jennifer Lawrence, Josh Hutcherson', '2012-03-23', 142, 'English', 'USA', 7.2, 'In a dystopian future, teens fight to the death on live TV.', 78000000, 694394724, TRUE, now(), now()),
    ('Frozen', 'Animation', 'Chris Buck & Jennifer Lee', 'Kristen Bell, Idina Menzel', '2013-11-27', 102, 'English', 'USA', 7.4, 'A princess sets out to find her sister who has magical ice powers.', 150000000, 1276480335, TRUE, now(), now()),
    ('Toy Story', 'Animation', 'John Lasseter', 'Tom Hanks, Tim Allen', '1995-11-22', 81, 'English', 'USA', 8.3, 'A cowboy doll is profoundly threatened by a new spaceman figure.', 30000000, 373554033, TRUE, now(), now()),
    ('Avatar', 'Sci-Fi', 'James Cameron', 'Sam Worthington, Zoe Saldana', '2009-12-18', 162, 'English', 'USA', 7.8, 'A paraplegic Marine is dispatched to Pandora on a unique mission.', 237000000, 2847246203, TRUE, now(), now()),
    ('The Incredibles', 'Animation', 'Brad Bird', 'Craig T. Nelson, Holly Hunter', '2004-11-05', 115, 'English', 'USA', 8.0, 'A family of undercover superheroes try to live a quiet suburban life.', 92000000, 633019734, TRUE, now(), now()),
    ('The Avengers: Endgame', 'Action', 'Anthony Russo, Joe Russo', 'Robert Downey Jr., Chris Evans', '2019-04-26', 181, 'English', 'USA', 8.4, 'The Avengers assemble once more to undo Thanos’ actions.', 356000000, 2797800564, TRUE, now(), now()),
    ('Joker', 'Crime', 'Todd Phillips', 'Joaquin Phoenix, Robert De Niro', '2019-10-04', 122, 'English', 'USA', 8.4, 'In Gotham City, a failed comedian turns to a life of crime and chaos.', 55000000, 1074251311, TRUE, now(), now()),
    ('Coco', 'Animation', 'Lee Unkrich, Adrian Molina', 'Anthony Gonzalez, Gael García Bernal', '2017-11-22', 105, 'English', 'USA', 8.4, 'A young boy journeys to the Land of the Dead to unlock his family''s history.', 175000000, 807082196, TRUE, now(), now()),
    ('The Fault in Our Stars', 'Romance', 'Josh Boone', 'Shailene Woodley, Ansel Elgort', '2014-06-06', 126, 'English', 'USA', 7.7, 'Two teenagers with cancer fall in love after meeting in a support group.', 12000000, 307177489, TRUE, now(), now());



// Imagine you have two tables—orders and customers. Write a query to list all orders placed by customers in a specific city.
select O.cust_id, C.name  from orders O JOIN customers C  ON O.cust_id=C.customer_id where C.city='Chicago'



// Scenario: "Given two tables, employees and departments, explain the difference between using an INNER JOIN and a LEFT JOIN to list all employees and their departments, even if some employees are not assigned to a department."

//INNER JOIN
SELECT e.name, d.department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;


//❌ Charlie is excluded because he doesn’t belong to any department.

SELECT e.name, d.department_name
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.department_id;

//Charlie is included, but since he has no department, the department_name is NULL.



// Scenario: "You have a table of sales with columns product_id, sales_date, and amount. Write a query to find 
// the total sales for each product in a given month, but only include products where the total sales exceed $1000."

SELECT product_id, SUM(amount) AS total_sales
FROM sales
WHERE DATE_TRUNC('month', sales_date) = DATE '2023-08-01'
GROUP BY product_id
HAVING SUM(amount) > 1000;



//In a table of transactions, write a query to fetch all transactions for the last 30 days, ordered by the highest transaction amount first

SELECT *
FROM transactions
WHERE transaction_date >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY amount DESC;


//You have a products table. Write a query to list products that have a price greater than $50 and 
// their categories, but only include those categories where the average price is above $100


SELECT *
FROM products p
WHERE p.price > 50
  AND p.category IN (
    SELECT category
    FROM products
    GROUP BY category
    HAVING AVG(price) > 100
  );


  //"Write a query to search for all customers in the customers table whose email starts 
  // with 'info' or ends with 'example.com'."

  SELECT *
FROM customers
WHERE email LIKE 'info%' OR email LIKE '%example.com';

//Given a table of orders and another table of customers, write a query to find customers who have placed  orders,
//  using IN and then refactor it using EXISTS to compare performance.

SELECT *
FROM customers
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
);
//This query finds all customers whose customer_id exists in the orders table.

//It's straightforward, but for large datasets, IN can be slower, especially if the subquery returns many rows.

SELECT *
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
);
//This version uses a correlated subquery with EXISTS.

//It stops evaluating as soon as it finds a matching row in orders for a customer, 
// often making it more performant, especially with appropriate indexes.



//You have a users table with a last_login column. Write a query to find all users who have never logged in
SELECT *
FROM users
WHERE last_login IS NULL;


//How do you update data using the UPDATE query?

UPDATE users
SET email = 'new_email@example.com',
    name = 'Updated Name'
WHERE user_id = 42;

//"Write a query to update the salary of employees in a employees table who belong to a particular department,
//  increasing their salary by 10%.
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 3;


//How do you delete records using the DELETE query?
DELETE FROM table_name
WHERE condition;


DELETE FROM users
WHERE user_id = 1001;


//Given a logs table, write a query to delete all records that are older than 6 months,
//  assuming you have a log_date column.
DELETE FROM logs
WHERE log_date < CURRENT_DATE - INTERVAL '6 months';


//How do you insert data using the INSERT INTO query?
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO users (user_id, name, email)
VALUES (101, 'Alice Johnson', 'alice@example.com');


//Insert Multiple Rows at Once:
INSERT INTO users (user_id, name, email)
VALUES 
  (102, 'Bob Smith', 'bob@example.com'),
  (103, 'Charlie Lee', 'charlie@example.com');


  //Without Specifying Columns (Not Recommended):
INSERT INTO users
VALUES (104, 'Dana Miller', 'dana@example.com');

//Write a query to insert a new record into the customers table. Ensure that if the customer already exists
//  (based on email), no new record is inserted.

//works on all database

INSERT INTO customers (name, email, phone)
SELECT 'John Doe', 'john@example.com', '555-1234'
WHERE NOT EXISTS (
    SELECT 1 FROM customers WHERE email = 'john@example.com'
);

//In a sales table, write a query that categorizes each sale as 'High', 'Medium', or 'Low' based on the amount,
//  and also adds a column showing the commission for each sale (10% for high, 5% for medium, 2% for low).
SELECT 
    sale_id,
    customer_id,
    amount,
    
    -- Categorize the sale
    CASE 
        WHEN amount >= 1000 THEN 'High'
        WHEN amount >= 500 THEN 'Medium'
        ELSE 'Low'
    END AS sale_category,

    -- Calculate commission based on category
    CASE 
        WHEN amount >= 1000 THEN amount * 0.10
        WHEN amount >= 500 THEN amount * 0.05
        ELSE amount * 0.02
    END AS commission

FROM sales;


//You have an employees table with employee_id and manager_id. Write a query to list each employee 
// along with their manager's name.
SELECT 
    e.employee_id,
    e.name AS employee_name,
    m.name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

//Write a query to find the employee(s) with the highest salary in each department using a correlated subquery.

SELECT employee_id, name, department_id, salary
FROM employees e
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE department_id = e.department_id
);

The subquery:

SELECT MAX(salary)
FROM employees
WHERE department_id = e.department_id


// finds the highest salary within the same department as the outer employee row (e).

// The outer query selects employees whose salary equals that maximum.

// This handles ties, meaning if two employees in the same department share the top salary, both will be returned.




//You have two tables, current_employees and past_employees. Write a query to return all distinct employees from both tables

SELECT employee_id, name, email
FROM current_employees

UNION

SELECT employee_id, name, email
FROM past_employees;

// UNION combines the results of both queries and removes duplicates automatically.

// To ensure this works, both SELECT statements must:

// Return the same number of columns.

// Have matching data types in each position.

// UNION (not UNION ALL) guarantees distinct rows.


//You have two tables, current_employees and past_employees. Write a query to return all distinct employees from both tables
//  and then modify the query to return all rows, including duplicates.






//Given a table of sales with employee_id and sales_amount, write a query to assign a rank to each 
// employee based on their total sales for the month


To assign a rank to each employee based on their total monthly sales, you can use the 
RANK() window function along with SUM() and GROUP BY.

SELECT 
    employee_id,
    SUM(sales_amount) AS total_sales,
    RANK() OVER (ORDER BY SUM(sales_amount) DESC) AS sales_rank
FROM sales
GROUP BY employee_id;



//You need to create a products table where the product_id column should automatically generate unique values
//  for each product. Write the SQL to create this table.

//MySQL
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);


AUTO_INCREMENT is MySQL's way to auto-generate unique values.


//You need to add a foreign key constraint between the orders table (which references customers).
//  Write the SQL to create the foreign key and later write the query to drop it.


Step 1: Create Tables (without FK)
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE
);

//Add Foreign Key Constraint
PostgreSQL / SQL Server / Oracle
ALTER TABLE orders
ADD CONSTRAINT fk_customer
FOREIGN KEY (customer_id) REFERENCES customers(customer_id);

//IN SQL
ALTER TABLE orders
ADD FOREIGN KEY (customer_id) REFERENCES customers(customer_id);



//Drop Foreign Key Constraint
//PostgreSQL / SQL Server / Oracle
ALTER TABLE orders
DROP CONSTRAINT fk_customer;


//MySQL
ALTER TABLE orders
DROP FOREIGN KEY fk_customer;


//HOW TO KNOW THE CONTRAINT NAME

SELECT CONSTRAINT_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'orders' AND TABLE_SCHEMA = 'your_database_name';


//Write a query to find all rows in the users table where the email column contains an email from the domain 
// 'example.com' using a regular expression.

PostgreSQL
SELECT *
FROM users
WHERE email ~* '@example\.com$';


~* is the case-insensitive regex match operator.

@example\.com$ matches any email that ends with @example.com.


//TRICKY QUESTIONS

//Write a query to find the second-highest salary without using LIMIT or TOP clauses.
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);


//Given an employees table with employee_id, salary, and department_id, write a query to find employees
//  who earn more than the average salary of their respective department.
SELECT employee_id, salary, department_id
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);


//Write a query to count employees per department and only return departments with more than 4 employees.
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 4;


//You have a table users with columns id, email, and phone. Write a query to find duplicate records based on
//  the email and phone columns.

SELECT email, phone, COUNT(*) AS duplicate_count
FROM users
GROUP BY email, phone
HAVING COUNT(*) > 1;


// Given two tables, students and graduated_students, write a query to find students who are not in the
//  graduated_students table.


//Option 1: Using LEFT JOIN + WHERE IS NULL
SELECT s.*
FROM students s
LEFT JOIN graduated_students g
  ON s.student_id = g.student_id
WHERE g.student_id IS NULL;


// This returns students from students who have no matching row in graduated_students.

// ✅ Option 2: Using NOT IN
SELECT *
FROM students
WHERE student_id NOT IN (
    SELECT student_id
    FROM graduated_students
);


// ⚠️ Be cautious: NOT IN can fail if graduated_students.student_id contains NULL values.

// ✅ Option 3: Using NOT EXISTS (most robust)
SELECT *
FROM students s
WHERE NOT EXISTS (
    SELECT 1
    FROM graduated_students g
    WHERE g.student_id = s.student_id
);


This is usually the safest and most efficient method, especially when dealing with large tables or possible NULLs.

//You have an orders table with columns order_id, customer_id, and order_date. Write a query to find 
// the most recent order for each customer.


//Option 1: Use ROW_NUMBER() to Get Full Order Details
SELECT order_id, customer_id, order_date
FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
    FROM orders
) ranked
WHERE rn = 1;

// 🔍 Explanation:

// PARTITION BY customer_id: Separates the rows by customer.

// ORDER BY order_date DESC: Sorts so the most recent order comes first.

// ROW_NUMBER() assigns 1 to the most recent order per customer.

// Outer query filters to rn = 1, i.e., the most recent order per customer.





// Simple GROUP BY (No order_id)

// If you only need customer ID and latest order date, not the full order:

SELECT customer_id, MAX(order_date) AS most_recent_order
FROM orders
GROUP BY customer_id;


//⚠️ This won’t give you the order_id. It just gives the latest date per customer.





//Given a table contacts with columns phone1, phone2, and phone3, 
// write a query to find the first non-null phone number for each row.

SELECT *,
       COALESCE(phone1, phone2, phone3) AS first_non_null_phone
FROM contacts;
🔍 Explanation:
//COALESCE(a, b, c) returns the first non-null value from the list.



//Given a customers table and an orders table, write a query to find customers 
// who haven't placed an order in the last 6 months.

SELECT c.*
FROM customers c
LEFT JOIN orders o
  ON c.customer_id = o.customer_id
  AND o.order_date >= CURRENT_DATE - INTERVAL '6 months'
WHERE o.customer_id IS NULL;



SELECT *
FROM customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.customer_id
      AND o.order_date >= CURRENT_DATE - INTERVAL '6 months'
);




//PARTITION WORKING

SELECT 
  product_id,
  category_id,
  price,
  ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY price DESC) AS rn
FROM products;

// 🔍 How It Works (Step-by-Step):
// PARTITION BY category_id: divides the table into groups by category (A, B, C).

// ORDER BY price DESC: sorts each group from highest to lowest price.

// ROW_NUMBER(): assigns a row number starting at 1 within each group.

// 🧠 Result:
// product_id	category_id	price	rn
// 1	A	100	1
// 2	A	90	2
// 3	A	85	3
// 4	B	95	1
// 5	B	80	2
// 6	C	120	1
// 7	C	110	2
// 8	C	105	3

// ✅ Key Insight:
// PARTITION BY is like applying the ROW_NUMBER() separately to each group.

// Without PARTITION BY, it would number all rows across the full table.

// 🔁 Without PARTITION BY:

SELECT 
  product_id,
  category_id,
  price,
  ROW_NUMBER() OVER (ORDER BY price DESC) AS rn
FROM products;



// product_id	category_id	price	rn
// 6	C	120	1
// 1	A	100	2
// 4	B	95	3
// 2	A	90	4
// 7	C	110	5
// ...	...	...	..

// ❌ This ranks all products together — not grouped by category.




//You have a products table with columns product_id, category_id, and price.
//  Write a query to return the top 3 most expensive products in each category.

SELECT product_id, category_id, price
FROM (
    SELECT *,
           RANK() OVER (PARTITION BY category_id ORDER BY price DESC) AS rnk
    FROM products
) ranked
WHERE rnk <= 3;

//ROW_NUMBER() assigns a unique number to each product within its category.

//Use RANK() if, for example, two products tie for 1st place — both will be included,
//  and the next one would be ranked 3rd.





///Given an employees table with a hire_date column, write a query to count how many employees joined in each month






//Given a sales table with columns employee_id, sale_date, and amount, 
// write a query to find the maximum and minimum sales for each employee.

SELECT 
  employee_id,
  MAX(amount) AS max_sale,
  MIN(amount) AS min_sale
FROM sales
GROUP BY employee_id;


Given a sales table with columns employee_id, sale_date, and amount, 
// write a query to calculate a running total of sales for each employee.

SELECT 
  employee_id,
  sale_date,
  amount,
  SUM(amount) OVER (
    PARTITION BY employee_id
    ORDER BY sale_date
  ) AS running_total
FROM sales;

// Explanation:

// PARTITION BY employee_id: groups the data per employee.

// ORDER BY sale_date: ensures the running total is calculated in chronological order.

// SUM(amount) OVER (...): gives the cumulative sum (running total).

// 🧠 Example:

// Assume this is your sales table:

// employee_id	sale_date	amount
// 101	2023-01-01	1000
// 101	2023-01-03	2000
// 101	2023-01-10	1500
// 102	2023-01-02	500
// 102	2023-01-05	700
// 🟢 Output:
// employee_id	sale_date	amount	running_total
// 101	2023-01-01	1000	1000
// 101	2023-01-03	2000	3000
// 101	2023-01-10	1500	4500
// 102	2023-01-02	500	500
// 102	2023-01-05	700	1200


//get all departments having an average salary greater than 50,000.

//xxxx
SELECT department_name, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_name
HAVING AVG(salary) > (
    SELECT AVG(salary) FROM employees
);

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;



//write a query to find employees whose name start and end with same letter
 SELECT name
FROM employees
WHERE LEFT(name, 1) = RIGHT(name, 1);



//write a query to delete duplicate rows from table but keep one
DELETE FROM employees
WHERE id NOT IN (
    SELECT MIN(id)
    FROM employees
    GROUP BY name, salary
);


//write a query to find students with marks greater than all students in class A using all keyword

SELECT *
FROM students
WHERE marks > ALL (
    SELECT marks
    FROM students
    WHERE class = 'A'
);


//Write a query to update salaries by 10% for employees earning less than 40,000.
UPDATE employees
SET salary =salary+ salary * 1.10
WHERE salary < 40000;



//find the name from table employees whose firstane include e and lastname have length more than 5  
  SELECT *
FROM employees
WHERE first_name LIKE '%e%'
  AND LENGTH(last_name) > 5;

  //Write a query to find the employees who never ordered anything (using NOT EXISTS).

  SELECT *
FROM employees e
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.employee_id = e.employee_id
);


//Get all departments having an average salary greater than 50,000

SELECT dept, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept
HAVING AVG(salary) > 50000;

// Retrieve employees who have no manager (self-join)



SELECT e.*
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
WHERE e.manager_id IS NULL
   OR m.employee_id IS NULL;

   //OR
   SELECT e.name AS employeeName
FROM employees e
WHERE NOT EXISTS (
    SELECT 1 
    FROM employees f 
    WHERE f.employee_id = e.manager_id
);

// Find all customers who have placed more than 5 orders in the Orders table

 SELECT c.customer_id, c.name, COUNT(o.order_id) AS total_orders
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
HAVING COUNT(o.order_id) > 5;


//Write a query to display the nth highest salary (generic).

select*salary from employees order by salary desc limit 1 offset n-1


//Write a query to find employees who earn more than the average salary
           //wrong:  You cannot use aggregate functions directly in the WHERE clause.
   select name, AVG(salary) from employees where salary>AVG(salary)

    //correct 
   SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);













//Write a query to fetch employees whose names start and end with the same letter

SELECT *
FROM employees
WHERE name LIKE CONCAT(LEFT(name,1), '%', RIGHT(name,1));


//Find all customers who have placed more than 5 orders in the Orders table

SELECT customer_id, COUNT(order_id) AS total_orders
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) > 5;



//Write a query to find employees who earn more than the average salary.

SELECT *
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
);


//Write a query to find the second highest salary from the employees table.


select name,salary from employees where salary<(
    select max(salary) from employees
)

select name,salary from employees order by salary desc offset 1 limit 2



////. Write a query to find students with marks greater than all students in class A (using ALL
 //keyword).
 
SELECT *
FROM Students
WHERE Marks > ALL (
    SELECT Marks
    FROM Students
    WHERE Class = 'A'
);


//Write a query to delete duplicate rows from a table but keep one.
DELETE s1
FROM Students s1
JOIN Students s2
ON s1.name = s2.name 
AND s1.marks = s2.marks
AND s1.id > s2.id;









//  Write a query to find employees who earn more than the average salary.
        
select name, from employees where salray>(select AVG(salary )from employees)

//Write a query to find the percentage contribution of each employee’s salary to the total company
 salary
SELECT 
    name,
    salary,
    (salary * 100.0 / (SELECT SUM(salary) FROM employees)) AS salary_percentage
FROM employees;
















//  Write a query to find employees who earn more than the average salary. 

 select name,salary from employees where salary>( select AVG(salary) from employees)

  
   
   



       

         