const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

fs.readdirSync(publicDir).forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg')) {
    const filePath = path.join(publicDir, file);
    const webpPath = path.join(publicDir, file.replace(/\.(png|jpg)$/, '.webp'));
    
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath)
      .then(() => console.log(`Converted ${file} to .webp`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
