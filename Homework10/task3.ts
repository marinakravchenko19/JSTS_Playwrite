function withEmploymentDate<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        employmentDate = new Date("2024-04-12");
    };
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'

    constructor() {
        console.log('Initializing the Manager class')
    }
}

const manager = new Manager();
console.log(manager);