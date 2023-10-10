const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {
    AttributesSVG,
    Circle,
    Square,
    Triangle,
} = require("./assets/shapes.js");

const userPrompts = [
    {
     type: "input",
     name: "text",
     message: "Enter up to 3 characters:  ",
    },
    {
     type: "input",
     name: "textColor",
     message: "What text color would you like? (enter keyword or hexadecimal):  ",
    },
    {
     type: "list",
     name: "shape",
     message: "What shape would you like?",
     choices: ["circle", "square", "triangle"],
    },
    {
     type: "input",
     name: "shapeColor",
     message: "What shape color would you like? (enter keyword or hexadecimal):  ",
     },
];

function createFile(fileName, data) {
    try {
        let filePath = path.join(__dirname, "/dist", fileName);
        fs.writeFileSync(filePath, data);
        console.log("Logo generated. Check Dist folder");
    } catch (error) {
        console.log("Error generating file");
        console.error(error);
    }
};

async function init() {
    const response = await inquirer.prompt(userPrompts);


if (response.text.length > 0 && response.text.length < 4) {
    console.log("Valid Text Input");
  } else {
    console.log(
      "ERROR: Invalid Text Input. Please input up to a minimum 1 character (i.e. 'A') and maximum 3 characters (i.e. 'ABC')"
    );
    return;
  }


  if (response.shape === "circle") {
    let renderCircle = new Circle(response.shapeColor);
    let shape = renderCircle.renderShape();
    let renderShape = new AttributesSVG (
        response.text,
        response.textColor,
        shape
    );
    let renderedSVG = renderShape.render();
    createFile("newlogo.svg", renderedSVG);

  } else if (response.shape === "square") {
    let renderSquare = new Square(response.shapeColor);
    let shape = renderSquare.renderShape();
    let renderShape = new AttributesSVG (
        response.text,
        response.textColor,
        shape
    );
    let renderedSVG = renderShape.render();
    createFile("newlogo.svg", renderedSVG);


  } else if (response.shape === "triangle") {
    let renderTriangle = new Triangle(response.shapeColor);
    let shape = renderTriangle.renderShape();
    let renderShape = new AttributesSVG (
        response.text,
        response.textColor,
        shape
    );
    let renderedSVG = renderShape.render();
    createFile("newlogo.svg", renderedSVG);

    } else {
        console.log ("Error, please follow prompts");
    
    }
};
init ()