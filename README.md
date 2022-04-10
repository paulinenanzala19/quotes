# Angular Qotes
## Author
pauline Wafula


### Version
10/04/2022

## Description

This is a web application angular quotes which is a platform where a person can be able to post a quote and the author.A person is also able to upvote or downvote a quote depending on what they like.The application is also able to show when the quote was posted and its able to show complete days.     A person is also able to toggle to view more details.

## screenshot

## Live link
 https://paulinenanzala19.github.io/quotes/


## Installation / Setup instruction
* Open Terminal {Ctrl+Alt+T}
* Install Angular

* git clone ```https://github.com/paulinenanzala19/quotes.git```

* cd angularQuotes
* create an angular app through running this command $ ng new quote
* Generate components quote detail and quote form by running the command $ ng generate component quote detail and ng generate component quote form
* generate a highlight directive by running  the command $ ng generate directive highlight
* generate a time pipe count that keeps track of time by running the command $ ng generate pipe date-count

* code . or atom . depending on the text editor of your choice.

## Technologies Used

* [TypeScript]
* [HTML5]
* [CSS]
* [Bootstrap4]
* [Javascript]
* markdown


## BDD
| Behaviour      | Input        | Output       |
| :------------- | :----------: | -----------: |
|  person posting the quote  |  name  |   name   |
| quote being posted  | quote | quote
| author of the quote   |  name of the author  |name of the author    |
| click button show details  |       |  quote details   |
|  click button upvote   |  |  increments votes by 1    | 
| click button downvote |    | decreses popular votes by 1|
| click add button |     | add new quote and the functionalities  |
| click delete button |     | gets an alert to confirm whether todelete or not,deletes the quote| |


## Known Bugs

* The highlight directive was unable to highlight the quote with the top upvote alone

## Contact Information 

If you have any question or contributions that would better this app, please email me at [paulinenanzala19@gmail.com]

## License
* *MIT License:*
* Copyright (c) 2022 **Pauline Wafula**
