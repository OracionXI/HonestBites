import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes


// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Backend Healthy');
});

// Start server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});