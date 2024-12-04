import { Printable } from "./Printable";
import { User } from "./User";

export class Admin extends User implements Printable {

    private isActive: boolean;

    constructor(email: string, password: string, isActive: boolean) {
        super(email, password);
        this.isActive = isActive;
    }

    showProfile(): string {
        return this.isActive ? `https://softserve/profile/${this.getId}` : "https://softserve/login";
    }

    print(): void {
        console.log("Admin");
    }
}