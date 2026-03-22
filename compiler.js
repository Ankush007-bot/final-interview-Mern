const multer = require('multer')



const storage = multer.diskStorage({

    destination:(req,file,res)=>{ cb(null,'/uploads')},
    filename:(req,file,res)=>{cb(null,file.originalname)}
})

const upload= multer({storage})

app.post('/upload',upload.single(image),(req,res)=>{

})