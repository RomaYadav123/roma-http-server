const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;

// GET /html - Returns the HTML content
app.get("/html", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
        <p>- Martin Fowler & Roma & Anmol</p>
      </body>
    </html>
  `;
  res.send(htmlContent);
});

// GET /json - Returns the JSON string
app.get("/json", (req, res) => {
  const jsonData = {
    slideshow: {
      author: "Yours Truly",
      date: "date of publication",
      slides: [
        {
          title: "Wake up to WonderWidgets!",
          type: "all",
        },
        {
          items: [
            "Why <em>WonderWidgets</em> are great",
            "Who <em>buys</em> WonderWidgets",
          ],
          title: "Overview",
          type: "all",
        },
      ],
      title: "Sample Slide Show",
    },
  };
  res.json(jsonData);
});

// GET /uuid - Returns a UUID4
app.get("/uuid", (req, res) => {
  const uuid = uuidv4();
  res.json({ uuid });
});

// GET /status/{status_code} - Returns a response with the specified status code
app.get("/status/:statusCode", (req, res) => {
  const statusCode = parseInt(req.params.statusCode);
  res.sendStatus(statusCode);
});

// GET /delay/{delay_in_seconds} - Returns a success response after the specified delay
app.get("/delay/:delayInSeconds", (req, res) => {
  const delayInSeconds = parseInt(req.params.delayInSeconds);
  setTimeout(() => {
    res.sendStatus(200);
  }, delayInSeconds * 1000);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
