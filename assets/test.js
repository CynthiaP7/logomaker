const { Circle, Square, Triangle } = require ("./shapes");

describe("Circle", () => {
        test("Renders Circle Content, Succesful!", ()=> {
            const shape = new Circle("blue");
        expect(shape.renderShape()).toEqual(
        '<circle cx="150" cy="100" r= "100" fill="blue"/>'
        );
    });
});

describe("Square", () => {
    test("Renders Square Content, Succesful!", ()=> {
        const shape = new Square("blue");
    expect(shape.renderShape()).toEqual(
        '<polygon points="0,200 300,200 150,0" fill="blue"/>'
    );
    });
});

describe("Triangle", () => {
    test("Renders Triangle Content, Succesful!", ()=> {
        const shape = new Triangle("blue");
    expect(shape.renderShape()).toEqual(
    '<circle cx="150" cy="100" r= "100" fill="blue"/>'
    );
});
});