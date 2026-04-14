import express from "express";
import cors from "cors";
import protectedRoutes from "./routes/protected.routes.js";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/protected", protectedRoutes);

// Test route
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);

export default app;