const express = require(`express`);
const app = express();
const PORT = 8080;

app.get(`/`,(req,res)=> {
    res.send(`Peter Paul F. Eclavea<br> BSIT-4A<br> Greetings user, this is my Hands on No. 2`)

});

app.listen(PORT, ()=>{
console.log(`Server is running on https://localhost:${PORT}`);

});
