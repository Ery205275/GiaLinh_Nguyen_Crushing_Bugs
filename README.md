# GiaLinh_Nguyen_Crushing_Bugs
Use the in-class build files (the Puzzle Drag and Drop) and fix the bugs that were discovered in class.

## Student

Nguyen Gia Linh

## Problems
1. Any puzzle piece and more than one piece can be dropped in any dropzone even when is wrong
2. The puzzle pieces stay in the dropzones after finishing, even choosing new puzzles won't reset the pieces

## Solutions 
1. Function created to allow one piece to one dropzone.

Dropzones and puzzle pieces matched id via data sets. --> Function created to allow one piece to one dropzone --> Return statement created to prevent wrong puzzle pieces to be dropped to the dropzone

2. Puzzle sets didn't reset when a new puzzle is selected.(still working on making it happen)

resetPuzzle function created with paren-child properties then remove the Dropped Child once theBoardgame is changed.

## Prerequisites

A code editer program to write code for Javascripts, HTML5, CSS (for example, Sublime Text, Visual Studio Code).

## License

MIT License

Copyright (c) 2022 Nguyen Gia Linh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.