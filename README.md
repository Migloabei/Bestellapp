# Bestellapp

A food ordering app in the style of Lieferando, built as a project during my training at the Developer Akademie. Made with plain HTML, CSS and JavaScript, without any frameworks.

## Features

- Menu with three categories (pizza, burger, salad), rendered from an array with JavaScript
- Basket: add dishes, increase or decrease the amount, remove single dishes
- Subtotal, delivery fee and total price
- Test order with a confirmation dialog
- On desktop, the basket stays visible while scrolling
- Responsive down to a width of 320 px
- On mobile, a fixed menu bar at the bottom shows the number of items in the basket and opens the basket as a dialog
- The page does not scroll in the background while a dialog is open

## Project structure

| File | Content |
|---|---|
| `index.html` | Basic page structure |
| `scripts/db.js` | Dishes and category icons |
| `scripts/template.js` | HTML templates |
| `script.js` | Logic for the menu and the basket |
| `style.css` | Page layout and menu |
| `styles/standard.css` | Reset and base settings |
| `styles/basket.css` | Basket and dialogs |
| `assets/` | Icons and images |

Data, templates and logic are kept in separate files. The template functions contain no logic: all decisions and calculations happen in `script.js`, and the finished values are passed to the templates as parameters.

## Getting started

Clone the repository and open `index.html` in your browser, for example with the VS Code extension Live Server.

```
git clone https://github.com/Migloabei/Bestellapp.git
```
