function processData(param: string | number | boolean | number[]): string | number | boolean | number[] {
    switch (true) {
        case typeof param === "string":
            return param.toUpperCase();
        case typeof param === "number":
            return param ** 2;
        case typeof param === "boolean":
            return !param;
        case Array.isArray(param):
            if (param.length > 0) {
                return param.map((p) => p * p);
            }
            else return "Empty array: []";
        default:
            console.log(typeof param);
            return;
    }
};

console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // Empty array: []

