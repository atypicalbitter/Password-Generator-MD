# Password-Generator-MD
Password Generator made by Matt Dudman for edX Bootcamp course

## Description/Introduction

Welcome to this password generator application I have built. The purpose of this application is for a employee to use to generate a random password based on criteria they’ve selected.

## Table of Contents

- [Description/Introduction](#introduction)
- [Installation](#installation)
- [About](#about)
- [License](#license)
- [Deployed Link](#deployed-link)
- [Author](#author)



## Installation 

No need to install. The application can be used via the link provided in the deployed link section. 

## About

I started this project by taking the information and instructiosn from the inital README and strated psudeo coding the steps I needed to take. 

I knew that the application had to do these following points - 

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Prompt about length of password
      * At least 8 characters but no more than 128.
      * If the user wanted lowercase characters 
      * If the user wanted uppercase characters 
      * If the user wanted numbers
      * If the user wanted special characters

The first thing I needed to do was be able to generate the password options. By putting the choices in a function which was the option of lowercase, uppercase, numbers and special characters. 

The next thing was to create an array to return a random element. I used Math.random() to generate a random decimal between 0 and 1. Then I used Math.floor to get a whole number index.

Then I created the empty arry which was 'possible characters' which returned a result of desired characters and length that was selected via the prompts. 

Then I used document.querySelector to select the "Generate Password" button by its ID and then uded addEventListener to attach the writePassword function to the button's click event. I then used document.querySelector to select the password textarea and store it in the passwordText variable.

Now, when a user clicks the "Generate Password" button, the complete process is executed, and the generated password is displayed on the page. Attached below are a screen shot of the prompts and the application in action. 

## This is what appears when application is loaded.
![Alt text](<Assets/Screenshot 2023-12-19 at 20.12.19.png>)
## Once the 'Generate Password' button has been clicked it brings up the first prompt which is asking you for the length of your password.
![Alt text](<Assets/Screenshot 2023-12-19 at 20.13.21.png>)
## It then brings up the prompt if you want to include lowercase characters.
![Alt text](<Assets/Screenshot 2023-12-19 at 20.14.32.png>)
## It then brings up the prompt if you want to include uppercase characters.
![Alt text](<Assets/Screenshot 2023-12-19 at 20.15.19.png>)
## It then brings up the prompt if you want to include numbers. For the purposes of demonstation, I clicked 'cancel' here which acts as a 'no' feature. 
![Alt text](<Assets/Screenshot 2023-12-19 at 20.15.46.png>)
## It then brings up the prompt if you want to include special characters.
![Alt text](<Assets/Screenshot 2023-12-19 at 20.16.43.png>)
## This was the final output. 10 characters including uppercase, lowercase and special characters but no numbers. 
![Alt text](<Assets/Screenshot 2023-12-19 at 20.18.21.png>)

I had to do a lot of research for this project but I feel very happy in making this work and learning how to make this applictaion operate.
 
## License

MIT License

Copyright (c) [2023] [Dudman-Matt]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Deployed Link
 * [See Deployed Link Here](https://github.com/atypicalbitter)

## Author
 * [Matt Dudman](https://github.com/atypicalbitter)