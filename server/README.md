This server made with node and express

## Started Local

First, install dependencies:

```bash
npm run install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data and Deploy view

This project have a Client, if you wants just look check this link:

If you wants to run local, run the Server with the [Client](../client) too.

You can run, with single cmd: `npm start`

[Check](../)

## Doc API

### GET
- List All Projects: http://localhost:4242/projects
- List One Projects: http://localhost:4242/projects/:id
- List All Tasks: http://localhost:4242/projects/:projectId/tasks

### POST
- Create Project: http://localhost:4242/projects
- Create Task: http://localhost:4242/projects/:projectId/tasks

### PUT
- Edit Project: http://localhost:4242/projects/:id
- Edit Task: http://localhost:4242/projects/:projectId/tasks/:taskId


### DELETE
- Delete Project: http://localhost:4242/projects/:id
- Delete Project: http://localhost:4242/projects/:projectId/tasks/:taskId