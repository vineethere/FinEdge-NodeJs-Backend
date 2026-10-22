// getAllTransactions
const { usersData } = require('../Models/userModel');


const getAllTransactions = (userId) => {
    if (!userId) {
        throw new Error('User is not logged In');
    }

    const desiredUser = usersData.Users.find(item => item.userId === userId);

    if (!desiredUser) {
        throw new Error('User Data is not found');
    }
    return { transactions: desiredUser.transactions };
};

// const usersData = {
//     Users: [
//         {
//             userId: 1,
//             userName: 'airtribe',
//             password: 'abcdef',`
//             transactions:[
//                 {transactionId:1,type:"credited",amount:200},
//                 {transactionId:2,type:"debited",amount:3000}
//             ]
//         },
//     ]
// } 
const updateTransaction = (userId, transactionId, transaction) => {
    const desiredUser = usersData.Users.find(item => item.userId === userId);

    if (!desiredUser) {
        throw new Error('User does not exist');
    }

    const transactionIndex = desiredUser.transactions.findIndex((item) => {

        return item.transactionId == transactionId;
    });

    if (transactionIndex === -1) {
        throw new Error('Transaction does not exist');
    }

    desiredUser.transactions[transactionIndex] = {
        ...desiredUser.transactions[transactionIndex],
        ...transaction
    };
    return desiredUser;
};

const addTransaction = (userId, transaction) => {
    const desiredUser = usersData.Users.find(item => item.userId === userId);
    if (!desiredUser) {
        throw Error('User does not exist, there might be some issue');
    }

    let updatedTransactions = [...desiredUser.transactions];
    let transactionIndex = updatedTransactions.findIndex(item => item.transactionId == transaction.transactionId);

    if (transactionIndex === -1) {
        updatedTransactions.push(transaction);
    } else {
        updatedTransactions[transactionIndex] = transaction;
    }

    // Assigned once here for both cases
    desiredUser.transactions = updatedTransactions;

    return desiredUser;
}

const deleteTransaction = (userId, transactionId) => {
    const desiredUser = usersData.Users.find(item => item.userId === userId);
    if (!desiredUser) {
        throw Error('User does not exist, there might be some issue');
    }

    const exists = desiredUser.transactions.some(item => item.transactionId != null && item.transactionId == transactionId);
    if (!exists) {
        throw new Error('Transaction does not exist');
    }

    let updatedTransactions = desiredUser.transactions.filter(item => item.transactionId != transactionId);
    desiredUser.transactions = updatedTransactions;

    return updatedTransactions;
}

const getATransaction = (userId, transactionId) => {
    const desiredUser = usersData.Users.find(item => item.userId === userId);
    if (!desiredUser) {
        throw Error('User does not exist, there might be some issue');
    }
    const transactionIndex = desiredUser.transactions.findIndex(
        item => item.transactionId != null && Number(item.transactionId) === Number(transactionId)
    );
    
    if (transactionIndex === -1) {
        throw new Error('Transaction does not exist');
    }

    return desiredUser.transactions[transactionIndex];
};

const returnSummary = (userId) => {
    const desiredUser = usersData.Users.find(item => item.userId === userId);
    if (!desiredUser) {
        throw Error('User does not exist, there might be some issue');
    }

    return desiredUser.transactions;
};

module.exports = { getAllTransactions, updateTransaction, addTransaction, deleteTransaction, getATransaction, returnSummary };
