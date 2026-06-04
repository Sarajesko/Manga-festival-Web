# Festival Manga Core 2026

Final practice project using HTML, CSS, and JavaScript to create a festival-style event page.

## Description

This website presents a mini site for a Manga festival in Seville, with multiple content sections and a voucher reservation form.

## Project structure

- `index.html`
  - Home page with a main poster.
  - Clicking the image loads `examen.html`.
- `examen.html`
  - Main festival page with internal navigation between sections.
  - Sections:
    - Festival
    - Comic
    - Map
    - Voucher reservation
- `Asset/style.css`
  - Styles for the `index.html` page.
- `Asset/StyleExamen.css`
  - Styles for the `examen.html` page.
- `Asset/funcionalidadUno.js`
  - Redirects from `index.html` to `examen.html` when the image is clicked.
- `Asset/funcionalidadDos.js`
  - Manages navigation between internal sections.
  - Displays the current date in the header.
  - Validates the reservation form before submission.
- `Asset/img/`
  - Images used in the festival design.

## Main features

- Internal tab navigation without page reload (`Festival`, `Comic`, `Map`, `Voucher reservation`).
- Display of the current date in the header.
- Reservation form with validation for:
  - First name
  - Last name
  - Email
  - Age (18+)
- Embedded Google Maps showing the event location.

## How to use

1. Open `index.html` in the browser.
2. Click the poster to access `examen.html`.
3. Use the top buttons to switch sections.
4. In the "Voucher reservation" section, fill out the form and submit.

## Notes

- No server is required; the project works with static files.
- Forms are validated with client-side JavaScript.
- The reservation button does not send data to a real server yet; it only validates the form.
