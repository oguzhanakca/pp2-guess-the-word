# Guess The Word

(Developed by Oğuzhan Akça)

![Mockup image](docs/am-i-responsive.jpg)

[Live webpage](https://oguzhanakca.github.io/pp2-guess-the-word/)

## Table of Content

1. [Project Goals](#project-goals)
   1. [User Goals](#user-goals)
   2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
   1. [Target Audience](#target-audience)
   2. [User Requrements and Expectations](#user-requrements-and-expectations)
   3. [User Stories](#user-stories)
3. [Design](#design)
   1. [Design Choices](#design-choices)
   2. [Colour](#colours)
   3. [Fonts](#fonts)
   4. [Structure](#structure)
   5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
   1. [Languages](#languages)
   2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
   1. [HTML Validation](#HTML-validation)
   2. [CSS Validation](#CSS-validation)
   3. [Accessibility](#accessibility)
   4. [Performance](#performance)
   5. [Device testing](#performing-tests-on-various-devices)
   6. [Browser compatibility](#browser-compatability)
   7. [Testing user stories](#testing-user-stories)
7. [Bugs](#Bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

## Project Goals

Guess The Word is a challenging game for people who wanna test their knowledge of words.

### User Goals

- Playing a challenging word guessing game
- Having fun while spending time

### Site Owner Goals

- Create a challenging game
- Give players more chances incase they need
- Game should be playable on different devices

## User Experience

### Target Audience

- People who wants to play a challenging game and have fun
- People who wants to test their knowledge

### User Requirements and Expectations

- Accessibility
- Easy and challenging to play
- Eye-friendly UI Design
- Learning how to play
- Easy to give feedback
- Replayability

### User Stories

#### First-time User

As a first time user,

1. I want to be able to choose game difficulty
2. I want to know how to play
3. I want to have additional hints & lifes
4. I want to find social media accounts
5. I want to leave feedback
6. I want to see my life & score
7. I want to see the cost of powers
8. I want to see the history of my guesses

#### Returning User

As a returning user,

9. I want to be able to choose game difficulty
10. I want to remember how to play
11. I want to find social media accounts
12. I want to give feedback
13. I want to see my life & score

#### Site Owner

As the site owner,

14. I want users to be able to find our social media accounts
15. I want users to be able to find how to play
16. I want users to be able to give feedback
17. I want users to see their current stats
18. I want users to choose their desired difficulty
19. I want users to be able to go back to Homepage when they are in wrong page

## Design

### Design Choices

The game is designed with an interface that will not hurt user's eyes. Also with the difficulty levels, it's aimed for the users to test themselves while having fun.

### Colour

Dark and soft colors was chosen to keep eye-friendly design. Also users can get clear info about their guesses.
<br>

![Colour Palette](docs/features/color-palette.png)

### Fonts

Game title : Protest Riot
<br>
Difficulty options : Permanent Marker
<br>
Main Font : Oswald

### Structure

The page is structured in a user and eye-friendly way. It's easy to learn and engage. The website consists of three separate pages:

- A homepage with 5 different views:
  - Game Difficulty Screen
  - Gameplay Screen
  - Correct Answer Screen
  - Wrong Answer Screen
  - End Game Screen
- A Contact Page with 2 different views
  - Contact Form
  - Thanking to user for the contact
- A 404 Page

### Wireframes

<details><summary>Start Game</summary>
<img src="docs/wireframes/start-screen.jpg">
</details>
<details><summary>Gameplay</summary>
<img src="docs/wireframes/game-screen.jpg">
</details>
<details><summary>Correct Answer</summary>
<img src="docs/wireframes/correct-answer.jpg">
</details>
<details><summary>Wrong Answer</summary>
<img src="docs/wireframes/wrong-answer.jpg">
</details>
<details><summary>End Game</summary>
<img src="docs/wireframes/end-game.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/wireframes/contact.jpg">
</details>
<details><summary>Contact Result</summary>
<img src="docs/wireframes/contact-result.jpg">
</details>
<details><summary>404</summary>
<img src="docs/wireframes/404.jpg">
</details>

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks & Tools

- Git
- GitHub
- Balsamiq
- Google Fonts
- Font Awsome
- Favicon.io
- Color-hex.com

## Features

The page consists of five pages and fourteen features

### Footer

- Featured on all pages except 404 page
- The footer navigates to contact page and other social media platforms
- It allows users to easily navigate the page
- User stories covered: 4, 5, 11, 12, 14, 16

![Footer](docs/features/footer.jpg)

### Difficulty Screen

- Gives users the option to choose difficulty
- User stories covered: 1, 9, 18

![Difficulty Screen](docs/features/difficulty.jpg)

### Game Information

- Shows users their current stats
- User stories covered: 6, 13, 17

![Game Information](docs/features/game-information.jpg)

### How To Play

- Shows users how to play in an alert box
- User stories covered: 2, 10, 15

![How To Play](docs/features/how-to-play.jpg)

### Jokers

- Asks users in a confirm box to use their Hint & Extra Life jokers
- When used, shows the costs
- User stories covered: 3, 7

![Jokers](docs/features/jokers.jpg)

### History

- Shows users their previous guesses
- User stories covered: 8

![History](docs/features/history.jpg)

### Contact Page

- Gives users a form to leave feedback
- User stories covered: 5, 12, 16

![Contact](docs/features/contact.jpg)

### 404 Page

- Appears when users tries to navigate a page that doesn't exist
- Gives a button for users to navigate Homepage
- User stories covered: 19

![404](docs/features/404.jpg)

## Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors no warnings to show.

<details><summary>Home</summary>
<img src="docs/validation/html-index.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/html-contact.jpg">
</details>
<details><summary>404</summary>
<img src="docs/validation/html-404.jpg">
</details>

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.

<details><summary>style.css</summary>
<img src="docs/validation/css.jpg">
</details>

### Accessibility

The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.

<details><summary>Home</summary>
<img src="docs/validation/wave-index.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/wave-contact.jpg">
</details>
<details><summary>404</summary>
<img src="docs/validation/wave-404.jpg">
</details>

### Performance

Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.

<details><summary>Home</summary>
<img src="docs/validation/lighthouse-index.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/lighthouse-contact.jpg">
</details>
<details><summary>404</summary>
<img src="docs/validation/lighthouse-404.jpg">
</details>

### JavaScript

JSHint Static Code Analysis Tool for JavaScript was used to validate the Javascript files. No significant issues were found.

<details><summary>gameplay.js</summary>
<img src="docs/validation/jshint-gameplay.jpg">
</details>
<details><summary>game-settings.js</summary>
<img src="docs/validation/jshint-game-settings.jpg">
</details>
<details><summary>contact.js</summary>
<img src="docs/validation/jshint-contact.jpg">
</details>

### Performing tests on various devices

The website was tested on the following devices:

- Iphone 6S
- Ipad 5th Gen

### Browser compatability

The website was tested on the following browsers:

- Google Chrome
- Opera
- Microsoft Egde

### Testing user stories

As a first time user,

1.  I want to be able to choose game difficulty

| **Feature**                          | **Action**                            | **Expected Result**                | **Actual Result** |
| ------------------------------------ | ------------------------------------- | ---------------------------------- | ----------------- |
| Choosing Difficulty                  | Click the expected difficulty         | Game starts with chosen difficulty | Works as expected |
| Footer - contact information section | On any page scroll down to the footer | Find the address of the restaurant | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-1v1-12.jpg">
<img src="docs/user-story-testing/user-story-1v2.jpg">
</details>

2. I want to know how to play

| **Feature** | **Action**                | **Expected Result**     | **Actual Result** |
| ----------- | ------------------------- | ----------------------- | ----------------- |
| Menu        | Navigate to the Menu page | See prices on menu page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-2.jpg">
</details>

3. I want to have additional hints & lifes

| **Feature**      | **Action**                                                             | **Expected Result**                | **Actual Result** |
| ---------------- | ---------------------------------------------------------------------- | ---------------------------------- | ----------------- |
| About Us         | Navigate to the About page and locate the About Us section             | Find description of the restaurant | Works as expected |
| Customer reviews | Navigate to the About page, scroll down to What our guests say section | Read customer reviews              | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3-14.jpg">
</details>

4. I want to find social media accounts

| **Feature** | **Action**                                                 | **Expected Result**                                   | **Actual Result** |
| ----------- | ---------------------------------------------------------- | ----------------------------------------------------- | ----------------- |
| Gallery     | Navigate to the Gallery page                               | Find pictures of the restaurant and food served there | Works as expected |
| Promo video | Navigate to the GAlelry page and scroll to the promo video | Watch promo video                                     | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-4.jpg">
</details>

5. I want to leave feedback

| **Feature** | **Action**                                               | **Expected Result**                         | **Actual Result** |
| ----------- | -------------------------------------------------------- | ------------------------------------------- | ----------------- |
| Meal-deal   | On home page scroll down to the Sunday meal deal section | Find the meal-deal for the upcomming Sunday | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-5.jpg">
</details>

6. I want to see my life & score

| **Feature**                    | **Action**                       | **Expected Result** | **Actual Result** |
| ------------------------------ | -------------------------------- | ------------------- | ----------------- |
| Footer - opening times section | On any page scroll to the footer | See opening times   | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-6.jpg">
</details>

7. I want to see the cost of powers

| **Feature**                          | **Action**                                                        | **Expected Result** | **Actual Result** |
| ------------------------------------ | ----------------------------------------------------------------- | ------------------- | ----------------- |
| Footer - contact information section | On any page scroll to the footer                                  | See phone number    | Works as expected |
| Info Box                             | Navigate to Contact Us page and locate the How to find us section | See phone number    | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-7v1-15.jpg">
<img src="docs/user-story-testing/user-story-7v2-15.jpg">
</details>

8. I want to see the history of my guesses

| **Feature** | **Action**                | **Expected Result** | **Actual Result** |
| ----------- | ------------------------- | ------------------- | ----------------- |
| Menu        | Navigate to the menu page | Read the menu       | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-8.jpg">
</details>

As a returning user,

9.  I want to be able to choose game difficulty

| **Feature**  | **Action**                                                                                    | **Expected Result**            | **Actual Result** |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------------ | ----------------- |
| Contact Form | Navigate to the Contact Us Page and locate the contact form, fill out and submit contact form | Data submited via contact form | Works as expectd  |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-9-15.jpg">
</details>

10. I want to remember how to play

| **Feature**                   | **Action**                       | **Expected Result**         | **Actual Result** |
| ----------------------------- | -------------------------------- | --------------------------- | ----------------- |
| Footer - social media section | On any page scroll to the bottom | Click on social media links | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-10.jpg">
</details>

11. I want to find social media accounts

| **Feature**   | **Action**                                                          | **Expected Result**        | **Actual Result** |
| ------------- | ------------------------------------------------------------------- | -------------------------- | ----------------- |
| Meet the Chef | Navigate to the About page and scroll down to Meet the Chef section | Find brief bio of the Chef | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-11.jpg">
</details>

12. I want to give feedback

| **Feature** | **Action**                                                                   | **Expected Result**                            | **Actual Result** |
| ----------- | ---------------------------------------------------------------------------- | ---------------------------------------------- | ----------------- |
| Map         | Navigate to the Contact Us page, locate the map and click on directions link | See directions to the restaurant on Goole Maps | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-1v1-12.jpg">
</details>

13. I want to see my life & score

| **Feature** | **Action**                                       | **Expected Result** | **Actual Result** |
| ----------- | ------------------------------------------------ | ------------------- | ----------------- |
| News        | Scroll down on home page and locate news section | Find latest news    | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-13.jpg">
</details>

As the site owner,

14. I want users to be able to find our social media accounts

| **Feature** | **Action**                                         | **Expected Result**                           | **Actual Result** |
| ----------- | -------------------------------------------------- | --------------------------------------------- | ----------------- |
| About Us    | Navigate to About page and locate About Us section | See relevant information about the restaurant | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3-14.jpg">
</details>

15. I want users to be able to find how to play

| **Feature**                          | **Action**                                                                                    | **Expected Result**            | **Actual Result** |
| ------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------ | ----------------- |
| Contact Form                         | Navigate to the Contact Us Page and locate the contact form, fill out and submit contact form | Data submited via contact form | Works as expectd  |
| Info Box                             | Navigate to Contact Us page and locate the How to find us section                             | Find the phone number          | Works as expected |
| Footer - contact information section | On any page scroll down to the footer                                                         | Find the phone number          | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-7v1-15.jpg">
<img src="docs/user-story-testing/user-story-7v2-15.jpg">
<img src="docs/user-story-testing/user-story-9-15.jpg">
</details>

16. I want users to be able to give feedback

| **Feature** | **Action**                                         | **Expected Result**                           | **Actual Result** |
| ----------- | -------------------------------------------------- | --------------------------------------------- | ----------------- |
| About Us    | Navigate to About page and locate About Us section | See relevant information about the restaurant | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3-14.jpg">
</details>

17. I want users to see their current stats

| **Feature** | **Action**                                         | **Expected Result**                           | **Actual Result** |
| ----------- | -------------------------------------------------- | --------------------------------------------- | ----------------- |
| About Us    | Navigate to About page and locate About Us section | See relevant information about the restaurant | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3-14.jpg">
</details>

18. I want users to choose their desired difficulty

| **Feature** | **Action**                                         | **Expected Result**                           | **Actual Result** |
| ----------- | -------------------------------------------------- | --------------------------------------------- | ----------------- |
| About Us    | Navigate to About page and locate About Us section | See relevant information about the restaurant | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3-14.jpg">
</details>

19. I want users to be able to go back to Homepage when they are in wrong page

| **Feature** | **Action**                                         | **Expected Result**                           | **Actual Result** |
| ----------- | -------------------------------------------------- | --------------------------------------------- | ----------------- |
| About Us    | Navigate to About page and locate About Us section | See relevant information about the restaurant | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3-14.jpg">
</details>

## Bugs

| **Bug**                                                                  | **Fix**                                                                                                           |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Home page link stays highlighted when visiting another page              | Change active atribute to the correct page                                                                        |
| The user can submit a contact form input without a message               | Add required attribute to message input field                                                                     |
| Navbar divides into two rows on xs screen size                           | Add a media query to remove the right margin of the logo in the navbar on xs screen                               |
| Email overflows on xs screen size                                        | Add a media query that makes the divs spread to 100% width on xs sreens to froce the content onto a seperate line |
| When viewed on tablets, the contact page has whitespace after the footer | Set min-height for body to 100vh                                                                                  |

## Deployment

The website was deployed using GitHub Pages by following these steps:

1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automaticaly you will se a ribbon on the top saying: "Your site is published at https://4n4ru.github.io/CI_MS1_BodelschwingherHof/"

You can for fork the repository by following these steps:

1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

You can clone the repository by following these steps:

1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Select if you prefere to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
   7.Press Enter to create your local clone.

## Credits

Images not referenced below are owned by the developer.

### Media

In order of apearance:

- [carousel-1](assets/images/carousel-1.jpg): Photo by <a href="https://unsplash.com/@heathergill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Heather Gill</a> on <a href="https://unsplash.com/s/photos/pots-and-pans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [news](assets/images/news.jpg): Photo by <a href="https://unsplash.com/@mareksminder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Claudia Altamimi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [meal-deal](assets/images/meal-deal.jpg): Photo by <a href="https://unsplash.com/@itssammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moqadam</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [chef](assets/images/chef.jpg): <a href='https://www.freepik.com/photos/food'>Food photo created by freepik - www.freepik.com</a>
- [menu background](assets/images/menu-background.jpg): <a href="https://www.freepik.com/vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>
- [starter](assets/images/starter.jpg) Photo by <a href="https://unsplash.com/@margzu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Margarita Zueva</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [main meal](assets/images/main-meal.jpg) Photo by <a href="https://unsplash.com/@keriliwi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Keriliwi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [kids meal](assets/images/kids-meal.jpg) Photo by <a href="https://unsplash.com/@itssammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moqadam</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [dessert](assets/images/dessert.jpg) Photo by <a href="https://unsplash.com/@almapapi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Krisztina Papp</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [wine](assets/images/wine.jpg) Photo by <a href="https://unsplash.com/@biljaminai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Biljana Martinic</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [salad](assets/images/salad.jpg): Photo by <a href="https://unsplash.com/@itssammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moqadam</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [fish](assets/images/fish.jpg): Photo by <a href="https://unsplash.com/@itssammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moqadam</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [chicken](assets/images/chicken.jpg): Photo by <a href="https://unsplash.com/@itssammoqadam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Moqadam</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- [404 error image](assets/images/404-error.png): <a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>

### Code

In order of apearance:

- The HTML for the responsive [Navbar with toggler](https://getbootstrap.com/docs/5.0/components/navbar/#toggler) was taken from the Bootstrap v5.0 documentation code snippet and combined with their [Navbar with Pills](https://getbootstrap.com/docs/5.0/components/navs-tabs/#pills)
- [Carousel](https://getbootstrap.com/docs/5.0/components/carousel/#with-indicators) on index page was taken from Bootrap v5.0 documentation code snippet
- CSS code to avoid whitespace below footer was taken from a forum post on [FreeCodeCamp](https://forum.freecodecamp.org/t/footer-white-space-below/191360)
- 404 page was build using description on [GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

## Acknowledgements

I would like to take the opportunity to thank:

- My mentor Mo Shami for his feedback, advice, guidance and support.
- My husband Jure Runje for his support, advice, help with testing, and for giving me some kids free time to work on my project.
- To the lovely people on the Code Institute Slack for providing peer code reviews.
- My parents who own the restaurant that inspired this website

h1 font : Protest Riot
