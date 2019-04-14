const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

//Creo la app con una instacia de express y seteo puerto por defecto
const app = express();
const port = process.env.PORT;

//Seteo que express automaticamente parsee los JSON
app.use(express.json());

//Agrego las rutas
app.use(userRouter);
app.use(taskRouter);

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx)$/)) return cb(new Error('The file must be doc or docx'));
        cb(undefined,true);
    }
});
app.post('/upload',upload.single('upload'), (req,res) => {
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({error: error.message});
});


//Inicio el servidor
app.listen(port, () => {
    console.log('The server is running on port 3000');
});




