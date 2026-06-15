import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
app.use(express.json());
app.get('/api/health', (_request, response) => {
    response.json({
        ok: true,
        service: 'octofit-tracker-backend',
        baseUrl,
    });
});
async function start() {
    await mongoose.connect(mongoUri, { dbName: 'octofit_db' });
    app.listen(port, () => {
        console.log(`OctoFit Tracker API listening on ${baseUrl}`);
    });
}
void start().catch((error) => {
    console.error('Failed to start OctoFit Tracker API', error);
    process.exit(1);
});
