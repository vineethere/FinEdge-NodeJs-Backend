const usersData = {
    Users: [
        {
            userId: 1,
            userName: 'airtribe',
            password: 'abcdef',
            transactions:[
                {transactionId:1,type:"credited",amount:200},
                {transactionId:2,type:"debited",amount:3000}
            ]
        },
        {
            userId: 2,
            userName: 'airtribe2',
            password: 'abcdef',
            transactions:[]
        },
        {
            userId: 3,
            userName: 'airtribe3',
            password: 'abcdef',
            transactions:[]
        }]
}

module.exports = {usersData}

// email 
