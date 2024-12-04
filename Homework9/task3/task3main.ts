import { Admin } from "./structure/Admin";

// create first admin and change password
const admin = new Admin('admin@gmail.com', 'Qwerty', false);

admin.changePassword('Weak');
console.log(admin.passwordPreview); // Password too short!

admin.changePassword('Super-Pass');
console.log(admin.passwordPreview); // S*******s

console.log(admin.showProfile()); // https://softserve/login

// create another admin and verify ID is set correctly for new users
const superAdmin = new Admin("superadmin@gmail.com", "Password1!", true);
console.log(superAdmin.showProfile()); // https://softserve/profile/1001 

// check that Admin caanot be created with a short password from the beginning
const thirdAdmin = new Admin("thirdadmin@gmail.com", "PS", true); // Password too short! 
thirdAdmin.changePassword("tyutyutyu");
console.log(thirdAdmin.showProfile());