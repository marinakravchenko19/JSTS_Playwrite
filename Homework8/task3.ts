enum Figure {
    Triangle,
    Rectangle,
    Circle
}

type Triangle = {
    typeOfFigure: Figure.Triangle,
    base: number,
    height: number
};

type Rectangle = {
    typeOfFigure: Figure.Rectangle,
    width: number,
    height: number
};

type Circle = {
    typeOfFigure: Figure.Circle,
    radius: number
};

function getFigureInfo(figure: Triangle | Rectangle | Circle) {
    switch (true) {
        case figure.typeOfFigure === Figure.Triangle:
            return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${figure.base * figure.height / 2}`;;
        case figure.typeOfFigure === Figure.Rectangle:
            return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${figure.width * figure.height}`;
        case figure.typeOfFigure === Figure.Circle:
            return `Circle with radius ${figure.radius} has an area of ${Math.round(Math.PI * figure.radius ** 2).toFixed(2)}`;
        default: return `No such figure!`;
    }
}

const triangle: Triangle = { typeOfFigure: Figure.Triangle, base: 4, height: 6 };
const rectangle: Rectangle = { typeOfFigure: Figure.Rectangle, height: 5, width: 9 };
const circle: Circle = { typeOfFigure: Figure.Circle, radius: 4 };
console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));