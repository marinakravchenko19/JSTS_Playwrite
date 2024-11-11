/**
 * Ви розробляєте додаток для соціальних мереж, який отримує дані з двох асинхронних функцій: одна з них завантажує профіль користувача, а інша - його дописи. 
 * Ви хочете отримати обидві частини інформації послідовно для відображення на сторінці профілю користувача.
 * Реалізуйте функцію loadUserProfile(userId), яка отримує один аргумент ідентифікатор користувача userId.
 * 	Використовує асинхронні функції fetchUserProfile() і fetchUserPosts() (задані нижче) для отримання даних профілю і постів.
 * 	Повертає об'єкт, що містить дві властивості:
-	profile - дані з fetchUserProfile
-	posts - дані з fetchUserPosts.
*  Якщо виникає помилка в будь-якій з функцій, loadUserProfile повинна обробити помилку і повернути повідомлення: «Error loading user data».
 */

async function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ userId, name: "John Doe", age: 30 });
            }
            else {
                reject(new Error("No such userId"));
            }

        }, 1000);
    });
}

async function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postId: 1, content: "Hello, world!" },
                { postId: 2, content: "Loving this app!" }
            ]);
        }, 2000);
    });
}

function getFullUserInfo(userProfile, userPosts = []) {
    return {
        profile: userProfile,
        posts: [...userPosts]
    };
}

function loadUserProfile(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const userProfile = await fetchUserProfile(userId);
            const userPosts = await fetchUserPosts(userId);

            resolve(getFullUserInfo(userProfile, userPosts));
        }
        catch {
            reject("Error loading user data");
        }
    });
};

loadUserProfile(1)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

loadUserProfile(-3)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));