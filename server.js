const express = require('express');
const cors = require('cors');
const app = express();
const menuApi = require('./api/menuApi');

app.use(cors());
app.use(express.json());
app.use('/api', menuApi);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor: http://localhost:${PORT}`);
});