const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { sendEmail } = require("./service/email");

app.use(express.json());
app.use(cors());

app.post("/sendEmail", async (req, res) => {
  // TODO: Implement email sending logic
  const { email, message } = req.body;
  try {
    sendEmail({
      from: email,
      subject: "Caleb, You Have A New Contact from " + email,
      body: message,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while sending the email",
      error: error.message,
    });
  }
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the root route" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
