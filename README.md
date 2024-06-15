# Handwritten Digit Recognition

## Overview

The "Handwritten Digit Recognition" is a simple yet effective tool for recognizing handwritten digits. This project is powered by a machine learning model originally trained with PyTorch, and the outputs have been adapted to JavaScript format for use in the browser. The application utilizes arrays and matrices to represent biases and weights, allowing for quick and efficient digit recognition.

## Live Demo

Experience the "Handwritten Digit Recognition" directly in your browser [here](https://vontanne.github.io/handwritten-digit-recognition).

## How It Works

The core of the "Handwritten Digit Recognition" is a neural network, which is a computational model inspired by the human brain. It consists of layers of interconnected nodes or "neurons" that process input data, learn from it, and make predictions. In this case, the model predicts handwritten digits from 0 to 9 using learned weights and biases from the training phase.

## Running the Project

To use the "Handwritten Digit Recognition":

1. Clone the project from the GitHub repository.
2. Ensure you have Node.js installed on your local machine.
3. Navigate to the project directory in your terminal.
4. Run the project using the command `npm run start` or `node app.js`.
5. Open your web browser and go to `localhost:8080`.

You'll be greeted with a canvas where you can draw a digit using your mouse or touchscreen. Upon drawing, the prediction chart next to the canvas will display the recognized digit, with the height of the columns representing the model's confidence in its prediction.

## Technologies Used

The project is built with HTML, CSS, and JavaScript, running on Node.js without the need for any third-party dependencies or Node.js frameworks. For digit drawing, the HTML5 Canvas API is employed.

## About PyTorch and Neural Networks

[PyTorch](https://pytorch.org/) is an open-source machine learning library used for applications such as computer vision and natural language processing. It's known for its flexibility and ease of use in building and training neural networks.

## License

This project is open-sourced under the MIT license. For more details, see the [LICENSE](./LICENSE) file in the project repository.

---

We believe in the power of JavaScript in machine learning to create accessible and efficient applications. By leveraging modern web technologies, we bring AI capabilities directly to your browser, making it easy for anyone to benefit from the advancements in machine learning.

Enjoy using the "Handwritten Digit Recognition", and feel free to contribute or provide feedback!
