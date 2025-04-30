const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5555;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'menuData.json');

app.get('/api/menu', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Veri okunamadı' });
    res.json(JSON.parse(data));
  });
});

app.post('/api/save-menu', (req, res) => {
  const updatedData = JSON.stringify(req.body, null, 2);
  fs.writeFile(dataPath, updatedData, 'utf8', (err) => {
    if (err) return res.status(500).json({ error: 'Veri kaydedilemedi' });
    res.json({ message: 'Veri başarıyla kaydedildi' });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor: http://localhost:${PORT}`);
});
