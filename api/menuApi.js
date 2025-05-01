const express = require('express');
const router = express.Router();

// Geçici sabit veri (dosya okuma yerine)
const menu = [
  {
    id: 1,
    item: "Deneme Döner",
    price: "100",
    category: "durum",
    description: "Test açıklama | İçindekiler: Sos, Turşu, Patates, Mayonez",
    image: "/images/test.png"
  }
];

router.get('/menu', (req, res) => {
  res.json(menu);
});

router.post('/save-menu', (req, res) => {
  console.log("POST /save-menu çalıştı fakat dosya kaydı yapılmıyor (test modu)");
  res.json({ success: true, message: "Geçici test modunda başarıyla alındı." });
});

module.exports = router;
