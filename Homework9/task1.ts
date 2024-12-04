type Direction = "asc" | "desc";

function superSort(arr: string[], direction: Direction): string[] {
    const arrCopy = [...arr];
    switch (direction) {
        case "asc":
            return arrCopy.sort((a, b) => a.localeCompare(b));
        case "desc":
            return arrCopy.sort((a, b) => b.localeCompare(a));
        default:
            throw new Error("Invalid sorting direction");
    }
}

type SortFunction = (arr: string[], direction: Direction) => string[];
const func: SortFunction = superSort;

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const result = func(["A", "C", "D", "B"], "desc");
console.log(result);