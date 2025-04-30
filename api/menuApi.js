const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

router.get('/menu', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/menuData.json');
    const data = await fs.readFile(filePath, 'utf8');
    const menu = JSON.parse(data);
    res.json(menu);
  } catch (error) {
    console.error('Veri okuma hatası:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/save-menu', async (req, res) => {
  try {
    const menuData = req.body;
    const filePath = path.join(__dirname, '../data/menuData.json');
    await fs.writeFile(filePath, JSON.stringify(menuData, null, 2), 'utf8');
    res.json({ success: true });
  } catch (error) {
    console.error('Kaydetme hatası:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;