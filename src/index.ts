import { usersArray } from './users';
import { userInfoArray } from './userInfo';

interface UserSummary {
    name: string;
    position: string;
    age: number;
    gender: string;
  }
  
  // Функция создает новый массив по userid из user массива UserInfoArray файла userInfo и передает его в конструктор map
  // далее проверяется массив usersArray и возвращается инфо о пользователе
  // далее создается новый объект по структуре UserSummary, содержащий информацию из обоих массивов
  function getUsersJobPositions(): UserSummary[] {
    const userInfoMap = new Map(userInfoArray.map(user => [user.userid, user]));
  
    return usersArray.map(user => {
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