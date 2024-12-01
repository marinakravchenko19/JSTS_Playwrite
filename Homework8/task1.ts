type Employee = {
    name: string,
    profession: string,
    workingHoursPerDay: number
};

type PremiumData = {
    isPremium: boolean,
    premium: number
};

const employee: Employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};

const premiumData: PremiumData = {
    isPremium: true,
    premium: 1000
};

let payPerHour: number = 32;
const workingDays: number = 14;
const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5,];


const getSalaryInfo = (employeeData: Employee, premiumData: PremiumData, payPerHour: number, worworkingDays: number, experienceCoefficients: number): string => {
    let salary = employeeData.workingHoursPerDay * payPerHour * worworkingDays * experienceCoefficients;
    if (premiumData.isPremium) {
        salary += premiumData.premium;
    }
    return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceCoefficients[2]);
console.log(salaryInfo);