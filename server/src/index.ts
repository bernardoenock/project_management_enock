import express, { Application, Request, Response } from 'express';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

const app: Application = express();
const port = 4242;

const pool = new Pool({
  user: 'enock',
  host: 'localhost',
  database: 'dysrupbd',
  password: '123interview',
  port: 5432,
});

app.use(cors());

app.use(express.json());

const generateUUID = () => {
  return uuidv4();
};

// Criar tabelas
async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        startDate DATE,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS tasks (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        startDate DATE,
        completed BOOLEAN DEFAULT false,
        project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

createTables();

// Rotas para projetos
app.get('/projects', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM projects');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO Ao listar os projetos.' });
  }
});

app.post('/projects', async (req: Request, res: Response) => {
  const { name, description, startDate } = req.body;
  const id = generateUUID();

  try {
    const result = await pool.query(
      'INSERT INTO projects (id, name, description, startDate) VALUES ($1, $2, $3, $4) RETURNING *',
      [id, name, description, startDate]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO Ao criar um projeto' });
  }
});

app.put('/projects/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, startDate } = req.body;

  try {
    const result = await pool.query(
      'UPDATE projects SET name=$1, description=$2, startDate=$3 WHERE id=$4 RETURNING *',
      [name, description, startDate, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO Ao editar um projeto' });
  }
});

app.delete('/projects/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM projects WHERE id=$1', [id]);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro Ao deletar um projeto' });
  }
});

// Rotas para tasks
app.get('/projects/:projectId/tasks', async (req: Request, res: Response) => {
  const { projectId } = req.params;

  try {
    const result = await pool.query('SELECT * FROM tasks WHERE project_id=$1', [projectId]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO Ao listar as Tasks' });
  }
});

app.post('/projects/:projectId/tasks', async (req: Request, res: Response) => {
  const { projectId } = req.params;
  const { name, description, startDate } = req.body;
  const id = generateUUID();

  try {
    const result = await pool.query(
      'INSERT INTO tasks (id, name, description, startDate, project_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, name, description, startDate, projectId]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO ao criar uma Task' });
  }
});

app.put('/projects/:projectId/tasks/:taskId', async (req: Request, res: Response) => {
  const { projectId, taskId } = req.params;
  const { name, description, startDate, completed } = req.body;

  try {
    const result = await pool.query(
      'UPDATE tasks SET name=$1, description=$2, startDate=$3, completed=$4 WHERE id=$5 AND project_id=$6 RETURNING *',
      [name, description, startDate, completed, taskId, projectId]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO ao editar uma Task' });
  }
});

app.delete('/projects/:projectId/tasks/:taskId', async (req: Request, res: Response) => {
  const { projectId, taskId } = req.params;

  try {
    await pool.query('DELETE FROM tasks WHERE id=$1 AND project_id=$2', [taskId, projectId]);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERRO ao deletar uma Task' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} url=> http://localhost:4242/`);
});