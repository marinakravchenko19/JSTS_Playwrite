function display(a: string): void;
function display(a: string, b: string): void;
function display(a: string[]): void;

function display(a: string | string[], b?: string): void {
    if (Array.isArray(a)) {
        a.forEach(el => {
            console.log(el);
        });
    }

    else if (typeof a === "string") {
        if (b) {
            console.log(a);
            console.log(b);
        }
        else {
            console.log(a);
        }
    }
}

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);