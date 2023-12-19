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