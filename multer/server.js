
///npm install express multer

const express=require('express')
const path= require('path')
const multer=require('multer')
const app=express()

app.use(express.json())
const port=3000

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,'uploads/')},
    filename:(req,file,cb)=>{cb(null,file.originalname)}
})

const upload=multer({storage})

app.post('/upload',upload.single('file'),(req,res)=>{

  res.send({
    status:'upload success'
  })
})


// const storage= multer.diskStorage({
//     destination:(req,file,cb)=>{cb(null,'./multiple')},
//     filename:(req,file,cb)=>{cb(null,file.originalname)}
// })

// const upload=multer({storage})

// app.post('/uploads', upload.array('images', 2), (req, res) => {
//   console.log(req.files,'files'); // array of files
//   res.send('Multiple files uploaded!');
// });

app.listen(port,()=>{

    console.log(`App is listening on port ${port}`)
})






// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// const app = express();

// // Use memory storage instead of disk storage
// const storage = multer.memoryStorage(); 
// const upload = multer({ storage });

// // Upload route
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) return res.status(400).send('No file uploaded!');

//   // Create a write stream to save file
//   const ext = path.extname(req.file.originalname);
//   const filePath = path.join(__dirname, 'uploads', 'ankushImage' + ext);
//   const writeStream = fs.createWriteStream(filePath);

//   // Pipe buffer data to write stream
//   writeStream.write(req.file.buffer);
//   writeStream.end();

//   writeStream.on('finish', () => {
//     res.json({
//       message: 'File uploaded via streams successfully!',
//       savedAs: 'ankushImage' + ext
//     });
//   });

//   writeStream.on('error', (err) => {
//     console.error(err);
//     res.status(500).send('Error saving file');
//   });
// });

// // Start server
// app.listen(5000, () => console.log('Server running on port 5000'));
