# We Park

A parking spot tracker built with [Expo](https://expo.dev/) and [Express](https://expressjs.com/).

## Table of Contents

1. [How to Run](#how-to-run)
2. [How to Contribute](#how-to-contribute)
3. [TypeScript Style Guide](#typescript-style-guide)
4. [Notable Contributors](#notable-contributors)

## How to Run
(Requires [MySQL](https://www.mysql.com/), [NodeJs](https://nodejs.org/en/))
1. Install the [Expo App](https://expo.dev/client) onto your iOS or Android device.
2. Clone the project into your preferred projects directory with <code>git clone https://github.com/simone-lofaso/we-park</code>.
3. Install dependencies. <code>npm install</code> <code>cd backend && npm install</code> <code>cd ../frontend && npm install</code>
4. In the backend dir, start the server with <code>npm run reset-db</code>, then <code>npm start</code>
5. Start the frontend in the frontend dir with <code>npm start</code>, and scan the QR using the Expo app, following Expo's instructions.


## How to Contribute

1. Ensure you are up to date with <code>git pull origin main</code>.
2. Open up a new branch with <code>git checkout -b your-branch-name</code>.
3. Make your desired changes to your branch, stage your changes with <code>git add .</code>, then commit with <code>git commit -m 'A consise summary of your contributions'</code>, push your changes using <code>git push -u origin your-branch-name</code>. <strong>DO NOT PUSH TO MAIN</strong>.
4. Open up a pull request and wait for at least 1 team member to review your changes.
5. Once your changes are approved, merge into the main branch and delete your-branch-name.

## TypeScript Style Guide

- Prefer types over interfaces whereever possible.
- Prefer <code>const</code> over <code>let</code> and <code>let</code> over <code>var</code>.
- Prefer es5 function for components, arrow functions for all others.
- Prefer functional React components with hooks over class React components.

## Notable Contributors

- Simone LoFaso (Software Engineer)
- Rafa Padilla (Software Engineer)
- Polus Gorgees (Software Engineer)
- Logan Dang (Software Engineer)

## Important Links

- [Figma](https://www.figma.com/file/u9Appt46M0BBispTLVQnxB/WePark?node-id=0%3A1)
- [Trello](https://trello.com/b/cJrzfF7D/wepark)
- [Database Diagram](https://drawsql.app/teams/we-park-team/diagrams/we-park-db)
