import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);

export default app;