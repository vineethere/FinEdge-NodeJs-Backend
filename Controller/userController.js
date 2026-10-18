const { usersData } = require('../Models/userModel');

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 5;
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = (user) => {
    // console.log(user, "user");
    
    // Fix: check user.userName and user.password correctly
    if (!user || !user.userName) {
        throw new Error('userName is mandatory');
    }
    if (!user.password) {
        throw new Error('password must be there');
    }

    const hashedPassword = bcrypt.hashSync(user.password, SALT_ROUNDS);
    const userId = usersData.Users.length + 1;
    
    usersData.Users.push({
        userId: userId,
        userName: user.userName,
        password: hashedPassword,
        transactions: []
    });
    
    return userId;
};

const loginUser = (user) => {
    const { userName, password } = user;
const findUser = (userName) => {
    return usersData.Users.find(item => userName === item.userName);
}

    const dbuser = findUser(userName);
    if (!dbuser) {
        throw new Error('User didn\'t exist pls check userName properly');
    }

    const isSamePassword = bcrypt.compareSync(password, dbuser.password);
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    // const payload = {
    //     userId: dbuser.userId,
    //     userName: dbuser.userName
    // }

    // const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })
    const token = jwt.sign({ userId: dbuser.userId, userName: user.userName }, JWT_SECRET);

    return { status: "ok", token };
}



module.exports = { loginUser,registerUser };