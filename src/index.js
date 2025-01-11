"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
function getUsersJobPositions() {
    const userInfoMap = new Map(userInfo_1.userInfoArray.map(user => [user.userid, user]));
    return users_1.usersArray.map(user => {
        const userInfo = userInfoMap.get(user.userid);
        if (!userInfo) {
            console.warn(`info for user ID does not exist: ${user.userid}`);
            return { name: user.name, position: 'Unknown', age: 0, gender: user.gender };
        }
        return {
            name: user.name,
            position: userInfo.organization.position,
            age: userInfo.age,
            gender: user.gender
        };
    });
}
const usersPositions = getUsersJobPositions();
console.log(usersPositions);
//# sourceMappingURL=index.js.map