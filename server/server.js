const express = require('express');
const app = express()
const port = process.env.port || 3001;

app.get("/api", (req, res) => {
  res.json({ message:'Hello World' })
});

app.listen(port, () => console.log(`Server: ${port}`))