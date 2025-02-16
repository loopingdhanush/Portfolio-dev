import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Get the directory name (for ES module support)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Export the app (No `app.listen()` on Vercel)
export default app;
