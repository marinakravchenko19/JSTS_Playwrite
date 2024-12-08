function withEmploymentDate(target: any, context: any): void {
    if (context.kind === "class") {
        target.prototype.employmentDate = new Date("2024-04-12");
    }
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'

    constructor() {
        console.log('Initializing the Manager class')
    }

    showManagerActivity() {
        console.log(`Project:${this.project}, task:${this.task}, emplDate: ${(this as any).employmentDate.toDateString()}`);
    }
}

const manager = new Manager();
console.log(manager.showManagerActivity()); // Output { "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z" }
console.log(manager); // does not show the date