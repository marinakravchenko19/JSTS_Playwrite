function identity<T extends { rating: number }>(arr: T[]): number {

    if (!arr.every(el => typeof el.rating === "number")) {
        throw new Error("Not every array element has rating as number!");
    }

    let ratings: number[] = arr.map(el => el.rating);
    let avgRating: number = ratings.reduce((a, b) => a + b) / ratings.length;

    return avgRating;
}

console.log(identity([{ name: "Anna", rating: 3 }]))	// 3
console.log(identity([{ title: "Encounter", rating: 3 }, { title: "Dead to me", rating: 4 }, { title: "Riverdale", rating: 5 }]))		// 4