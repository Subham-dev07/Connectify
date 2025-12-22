import express from 'express';
import cors from "cors";
import connectDB from './db/connect.js';
import authController from './controller/authController.js';
const app = express();

const PORT = 3000;

connectDB();
const router=express.Router();
app.use(cors());
app.use(express.json());
app.use(router);

router.post("/api/auth/loginSignup",authController);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});