import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), "data");

// Ensure the data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

app.use(express.static(".")); // Serve HTML, CSS, JS
app.use(express.json()); // Parse JSON from requests

// Handle form submission
app.post("/submit", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `message-${timestamp}.json`;
  const filepath = path.join(DATA_DIR, filename);

  const dataToSave = {
    firstName,
    lastName,
    email,
    message,
    submittedAt: new Date().toISOString(),
  };

  // Save to a new JSON file
  fs.writeFileSync(filepath, JSON.stringify(dataToSave, null, 2));

  console.log(`✅ New message saved: ${filename}`);
  res.json({ message: "Form submitted successfully!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
