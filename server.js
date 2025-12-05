import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), "data");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

app.use(express.static(".")); 
app.use(express.json());

app.post("/submit", (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `message-${timestamp}.json`;
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(
    { firstName, lastName, email, message, submittedAt: new Date().toISOString() },
    null, 2
  ));

  res.json({ message: "Thank you for your enquiry! Our team has received your message and will get back to you shortly." });
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running inside Docker on port ${PORT}`)
);
