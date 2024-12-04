export abstract class User {
    private static idCount: number = 1000;

    private readonly id: number;
    protected email: string;
    protected password: string;

    protected constructor(email: string, password: string) {
        this.email = email;
        this.changePassword(password);
        this.id = User.idCount;
        User.idCount++;
    }

    protected get getId(): number {
        return this.id;
    }

    public get passwordPreview(): string {
        // regex for finding all the symbols except the first and the last in the string
        const middleSymbols = /(?!^)[\s\S](?!$)/g;
        return this.password.replace(middleSymbols, "*");
    }

    public changePassword(pass: string): void {
        if (pass.length < 6) {
            console.log("Password too short!");
        }
        else {
            this.password = pass;
        }
    }

    public abstract showProfile(): string;
}

