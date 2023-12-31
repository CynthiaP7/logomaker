## Logo Maker

## Description

This command line app prompts information and generates personalized logo based on user inputs.

## Table of Contents

- [Story](#story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Story

> GIVEN a command-line application that accepts user input

> WHEN I am prompted for text
> THEN I can enter up to three characters

> WHEN I am prompted for the text color
> THEN I can enter a color keyword (OR a hexadecimal number)

> WHEN I am prompted for a shape
> THEN I am presented with a list of shapes to choose from: circle, triangle, and square

> WHEN I am prompted for the shape's color
> THEN I can enter a color keyword (OR a hexadecimal number)

> WHEN I have entered input for all the prompts
> THEN an SVG file is created named `logo.svg`
> AND the output text "Generated logo.svg" is printed in the command line

> WHEN I open the `logo.svg` file in a browser
> THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation

npm (inquirer,fs), node, jest

## Usage

Run “node index.js” in command line. User will be prompted with a few questions. After user answers all prompt questions, logo.svg file will be generated and available in distri folder.

Note: If you enter a null value or more than 3 characters, an error will be produced. If you re-run the prompt it will replace any logo.svg that had been previously created.

## License

Logo maker is licensed under [MIT](https://opensource.org/licenses/mit).

## Contributing

Author

## Tests

Used Jest to create tests (see test.js in assets folder for more information). Created 3 tests to confirm successful creation of shape!

## Questions

Links: 

GitHUb: https://github.com/CynthiaP7/logomaker
Deployed site: https://cynthiap7.github.io/logomaker/
