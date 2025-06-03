import express from 'express';
import routes from './routes/routes.js'; 
import cors from 'cors';
console.log("Starting server...");

const app = express();
app.use(cors({
  origin: 'https://sayout-one.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use("/",routes)

app.listen(3000, '0.0.0.0',() => {
  console.log('✅ Server running on http://localhost:3000');
});
