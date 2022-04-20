import fs from 'fs';
import users from './data/test.json';

const newUser = {
    "name": "Yuri",
    "age": 19,
    "email": "yuri@test.com"
};

users.push(newUser);

fs.writeFile(process.cwd() + '/src/data/test.json', JSON.stringify(users), (err) => {
    if (err) {
        throw err;
    };
});

console.log(users)
