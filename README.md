# Feedy - Feedback Collection Web App

Feedy is a simple, full-stack web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. It allows users to submit testimonials or feedback and view all feedback on a public page.

## Live Demo

Live Demo Link :

## Features

- Submit feedback using a user-friendly form.
- View all submitted testimonials with timestamps.
- Smooth frontend animations (GSAP).
- TailwindCSS for modern styling.
- Input validation and success message.
- Clean modular backend structure using MVC.

##  Deliverables

1. `form.ejs` - Feedback submission page
2. `feedback.ejs` - Public testimonial viewer
3. `Form.js` - Mongoose schema
4. Route and controller files
5. MongoDB integration
6. GSAP animation + Tailwind styling
7. `.env` support for environment configs
8. Clear project setup instructions
9. Live demo hosting (optional but recommended)


### Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- EJS templating
- TailwindCSS for UI
- GSAP for animation
- dotenv for configuration
- Nodemon for development


## Setup Instructions

-- Follow the steps below to run Feedy on your local machine:

1. Clone the Repository

```bash
git clone https://github.com/your-username/feedy.git
cd feedy


2. Install Dependencies

npm install

3. Add Environment Variables

Create a .env file in the root directory and add your MongoDB URI:

MONGODB_URI=mongodb+srv://<your-username>:<password>@cluster0.mongodb.net/feedy
PORT=5000

4. Start the Server

npm run dev

5. Server will start at: http://localhost:5000