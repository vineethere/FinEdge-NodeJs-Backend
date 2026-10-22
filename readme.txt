Following are the API implemented : 

/v1/routes/health



POST
/users
Register new user
—————

POST /transactions
Add income/expense
———————

GET /transactions
Fetch all transactions
—————

GET /transactions/:id
View single transaction
—————


PATCH /transactions/:id
Update transaction
———————

DELETE /transactions/:id
Delete transaction


GET /summary
Fetch income-expense summary

Note: - we append /v1/api before api just after localhost , so our signature will become localhost:3000/v1/api/login (if we are using PORT as 3000)

These will be working after the developer hits 'npm start' as main command in terminal on the localhost:3000 (3000 is set as base PORT bydefault in env file)