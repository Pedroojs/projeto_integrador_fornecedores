import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const server = await createServer({
    configFile: path.resolve(__dirname, '..', 'vite.config.ts'),
    server: {
      host: '0.0.0.0',
      port: 5000,
    },
  });
  
  await server.listen();
  console.log(`Server running on port 5000`);
}

startServer().catch(console.error);
