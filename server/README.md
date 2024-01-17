This server made with [node](https://nodejs.org/en) and [express](https://expressjs.com/pt-br/)

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

## Data and Deploy view

This project have a Client

If you wants to run local, run the Server with the [Client](../client) too.

You can run, with single cmd: `npm run start`

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